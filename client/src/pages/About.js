import React from "react";
import Layout from "../components/Layout/Layout";
import { FaUsers, FaAward, FaShoppingBag, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout
      title="About us - Ecommerce app"
      description="Learn about our story, mission, and values"
    >
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "120px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              Our Story
            </h1>
            <p className="lead">
              Building meaningful connections through exceptional products
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.img
                src="https://media.istockphoto.com/id/1433126431/photo/silhouette-of-climbers-who-climbed-to-the-top-of-the-mountain-thanks-to-mutual-assistance-and.jpg?s=612x612&w=0&k=20&c=qYdKGrhdKAPQiCEfWdTau8lSFSDW8Zy3hWklA6-78Qg="
                alt="Our Team"
                className="img-fluid rounded-lg shadow-lg"
                style={{ maxHeight: "500px", objectFit: "cover" }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="mb-4">Who We Are</h2>
                <p className="lead text-muted">
                  Founded in 2025, we started as a small team with a big dream -
                  to revolutionize the e-commerce experience.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers worldwide
                  with carefully curated products that combine quality,
                  sustainability, and innovation. Our journey has been fueled by
                  our passion for excellence and commitment to customer
                  satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="mb-5">Our Mission</h2>
            <p
              className="mx-auto"
              style={{
                fontSize: "1.5rem",
                fontStyle: "italic",
                maxWidth: "800px",
                position: "relative",
              }}
            >
              "To empower our customers through innovative products, exceptional
              service, and a seamless shopping experience that exceeds
              expectations at every touchpoint."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="row text-center"
          >
            <motion.div variants={fadeInUp} className="col-md-3 mb-4 mb-md-0">
              <div
                className="p-4 rounded-lg"
                style={{
                  background: "white",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <FaUsers
                  className="mb-3"
                  style={{ fontSize: "2.5rem", color: "#4e73df" }}
                />
                <h3>10,000+</h3>
                <p className="mb-0">Happy Customers</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="col-md-3 mb-4 mb-md-0">
              <div
                className="p-4 rounded-lg"
                style={{
                  background: "white",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <FaAward
                  className="mb-3"
                  style={{ fontSize: "2.5rem", color: "#4e73df" }}
                />
                <h3>50+</h3>
                <p className="mb-0">Industry Awards</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="col-md-3 mb-4 mb-md-0">
              <div
                className="p-4 rounded-lg"
                style={{
                  background: "white",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <FaShoppingBag
                  className="mb-3"
                  style={{ fontSize: "2.5rem", color: "#4e73df" }}
                />
                <h3>500+</h3>
                <p className="mb-0">Quality Products</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="col-md-3">
              <div
                className="p-4 rounded-lg"
                style={{
                  background: "white",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <FaHeart
                  className="mb-3"
                  style={{ fontSize: "2.5rem", color: "#4e73df" }}
                />
                <h3>100%</h3>
                <p className="mb-0">Customer Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2>Meet Ataur's Team Member</h2>
            <p className="lead">The passionate people behind our success</p>
          </motion.div>

          <div className="row">
            {/* Team Member 1 */}
            <div className="col-md-4 mb-4">
              <motion.div
                whileHover={{ y: -10 }}
                className="text-center p-4 rounded-lg bg-white shadow-sm"
                style={{ transition: "all 0.3s ease" }}
              >
                <div
                  className="mb-3 rounded-circle overflow-hidden"
                  style={{
                    width: "150px",
                    height: "150px",
                    margin: "0 auto",
                    border: "5px solid #f8f9fa",
                  }}
                >
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Team Member"
                    className="img-fluid"
                  />
                </div>
                <h4>Sarah Johnson</h4>
                <p className="text-muted">Operations & Customer Servic</p>
                <p className="small">
                  With 15 years in e-commerce, Sarah leads our vision with
                  passion and expertise.
                </p>
              </motion.div>
            </div>

            {/* Team Member 2 */}
            <div className="col-md-4 mb-4">
              <motion.div
                whileHover={{ y: -10 }}
                className="text-center p-4 rounded-lg bg-white shadow-sm"
                style={{ transition: "all 0.3s ease" }}
              >
                <div
                  className="mb-3 rounded-circle overflow-hidden"
                  style={{
                    width: "150px",
                    height: "150px",
                    margin: "0 auto",
                    border: "5px solid #f8f9fa",
                  }}
                >
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Team Member"
                    className="img-fluid"
                  />
                </div>
                <h4>Michael Chen</h4>
                <p className="text-muted">Head of Operations</p>
                <p className="small">
                  Michael ensures our supply chain runs smoothly and
                  efficiently.
                </p>
              </motion.div>
            </div>

            {/* Team Member 3 */}
            <div className="col-md-4 mb-4">
              <motion.div
                whileHover={{ y: -10 }}
                className="text-center p-4 rounded-lg bg-white shadow-sm"
                style={{ transition: "all 0.3s ease" }}
              >
                <div
                  className="mb-3 rounded-circle overflow-hidden"
                  style={{
                    width: "150px",
                    height: "150px",
                    margin: "0 auto",
                    border: "5px solid #f8f9fa",
                  }}
                >
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Team Member"
                    className="img-fluid"
                  />
                </div>
                <h4>Priya Patel</h4>
                <p className="text-muted">Customer Experience</p>
                <p className="small">
                  Priya and her team make sure every customer feels valued.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Core Values</h2>
            <p className="lead">What drives us every day</p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 h-100 rounded-lg shadow-sm"
                style={{ background: "white", transition: "all 0.3s ease" }}
              >
                <div className="mb-3">
                  <span style={{ fontSize: "2.5rem" }}>💎</span>
                </div>
                <h4>Quality First</h4>
                <p>
                  We meticulously select every product to ensure it meets our
                  high standards of quality and durability.
                </p>
              </motion.div>
            </div>

            <div className="col-md-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 h-100 rounded-lg shadow-sm"
                style={{ background: "white", transition: "all 0.3s ease" }}
              >
                <div className="mb-3">
                  <span style={{ fontSize: "2.5rem" }}>🌱</span>
                </div>
                <h4>Sustainability</h4>
                <p>
                  We're committed to eco-friendly practices and partner with
                  suppliers who share our environmental values.
                </p>
              </motion.div>
            </div>

            <div className="col-md-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 h-100 rounded-lg shadow-sm"
                style={{ background: "white", transition: "all 0.3s ease" }}
              >
                <div className="mb-3">
                  <span style={{ fontSize: "2.5rem" }}>❤️</span>
                </div>
                <h4>Customer Love</h4>
                <p>
                  Every decision we make starts with how it will impact our
                  customers' experience.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
