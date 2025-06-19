import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import '../styles/CartStyles.css';


const CartPage = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Total price in paisa
  const calculateTotalAmount = () => {
    try {
      let total = 0;
      cart?.forEach((item) => {
        total += item.price * 100; // Razorpay works in paisa
      });
      return total;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  const totalDisplay = () => {
    let total = cart.reduce((acc, item) => acc + item.price, 0);
    return total.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  };

  // Remove item
  const removeCartItem = (pid) => {
    let updatedCart = [...cart];
    let index = updatedCart.findIndex((item) => item._id === pid);
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Razorpay handler
  const handleRazorpayPayment = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/v1/product/razorpay/order", {
        amount: calculateTotalAmount(),
        cart,
      });

      const options = {
        key: data.key, // Razorpay key_id
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Ecommrece",
        description: "Thank you for shopping with us.",
        order_id: data.order.id,
        handler: async function (response) {
          const verifyRes = await axios.post("/api/v1/product/razorpay/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyRes.data.success) {
            localStorage.removeItem("cart");
            setCart([]);
            toast.success("Payment Successful!");
            navigate("/dashboard/user/orders");
          } else {
            toast.error("Payment verification failed");
          }
        },
        prefill: {
          name: auth?.user?.name,
          email: auth?.user?.email,
        },
        notes: {
          address: auth?.user?.address || "No address",
        },
        theme: {
          color: "#F37254",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container py-4">
        <h2 className="mb-4" style={{ fontWeight: "bold" }}>
          Shopping Cart
        </h2>
        <div className="row">
          {/* Left side */}
          <div className="col-md-8">
            {cart?.length === 0 ? (
              <div className="alert alert-warning text-center">Your Cart is empty</div>
            ) : (
              cart.map((p) => (
                <div
                  key={p._id}
                  className="d-flex align-items-center mb-3 p-2 border shadow-sm bg-white rounded"
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                    width="100"
                    height="100"
                    style={{ objectFit: "contain", marginRight: "15px" }}
                  />
                  <div className="flex-grow-1">
                    <h5>{p.name}</h5>
                    <p>{p.description.substring(0, 60)}...</p>
                    <h6 className="text-danger">
                      ₹{p.price.toLocaleString("en-IN")}
                    </h6>
                    <button className="btn btn-sm btn-danger" onClick={() => removeCartItem(p._id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right side - summary */}
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h4>Cart Summary</h4>
              <hr />
              <p>Items: {cart.length}</p>
              <p>Total: <strong className="text-danger">{totalDisplay()}</strong></p>
              {auth?.user?.address ? (
                <>
                  <p><strong>Deliver to:</strong> {auth?.user?.address}</p>
                  <button className="btn btn-link p-0" onClick={() => navigate("/dashboard/user/profile")}>
                    Change Address
                  </button>
                </>
              ) : auth?.token ? (
                <button className="btn btn-outline-warning w-100" onClick={() => navigate("/dashboard/user/profile")}>
                  Add Delivery Address
                </button>
              ) : (
                <button
                  className="btn btn-outline-warning w-100"
                  onClick={() => navigate("/login", { state: "/cart" })}
                >
                  Please Login to checkout
                </button>
              )}

              {auth?.user?.address && cart?.length > 0 && (
                <button
                  className="btn btn-success w-100 mt-3"
                  onClick={handleRazorpayPayment}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Pay with Razorpay"}
                </button>
              )}
            </div>
            <div className="mt-3 text-center text-muted" style={{ fontSize: "13px" }}>
              Secure transaction <i className="fa fa-lock"></i>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
