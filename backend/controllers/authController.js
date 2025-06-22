import userModel from "../models/userModel.js";
import { hashPassword, comparePassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

// Register Controller
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(200).send({ success: false, message: "User already exists. Please login." });
    }
    const hashed = await hashPassword(password);
    const user = await new userModel({ name, email, password: hashed, phone, address }).save();
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user: { _id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Registration error", error });
  }
};

// Login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ success: false, message: "Invalid credentials" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ success: false, message: "Email not registered" });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({ success: false, message: "Incorrect password" });
    }
    const token = JWT.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });
    res.status(200).send({
      success: true,
      message: "Login successful",
      user: { _id: user._id, name: user.name, email: user.email, phone: user.phone, address: user.address, role: user.role },
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Login error", error });
  }
};

// Forgot Password Controller
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return res.status(400).send({ success: false, message: "Email and new password required" });
    }
    const hashed = await hashPassword(newPassword);
    const user = await userModel.findOneAndUpdate({ email }, { password: hashed });
    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }
    res.status(200).send({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Password reset error", error });
  }
};

// Test Controller (Admin only)
export const testController = (req, res) => {
  res.status(200).send({ success: true, message: "Protected route, Admin access granted." });
};

// Update Profile Controller
export const updateProfileController = async (req, res) => {
  try {
    const { name, phone, address, password } = req.body;
    const { _id } = req.user; // from requireSignIn
    const updatedData = { name, phone, address };
    if (password) {
      updatedData.password = await hashPassword(password);
    }
    const user = await userModel.findByIdAndUpdate(_id, updatedData, { new: true });
    user.password = undefined;
    res.status(200).send({ success: true, message: "Profile updated", user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Profile update error", error });
  }
};

// Orders: Get logged-in user orders
export const getOrdersController = async (req, res) => {
  try {
    const orders = await OrderModel.find({ buyer: req.user._id }).populate("products", "-image").populate("buyer");
    res.status(200).send({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Could not fetch orders", error });
  }
};

// Admin: Get all orders
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await OrderModel.find({}).populate("products", "-image").populate("buyer");
    res.status(200).send({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Could not fetch all orders", error });
  }
};

// Admin: Change order status
export const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const order = await OrderModel.findByIdAndUpdate(orderId, { status }, { new: true });
    res.status(200).send({ success: true, message: "Order status updated", order });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Order status update error", error });
  }
};
