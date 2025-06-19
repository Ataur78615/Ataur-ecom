import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport, BiTime } from "react-icons/bi";
import { Helmet } from 'react-helmet'; // Alternative to next/head for React

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Your E-Commerce Store</title>
        <meta name="description" content="Get in touch with our customer support team for any queries or assistance with your orders." />
      </Helmet>
      
      <div className="container my-5 py-4">
        <div className="row contactus align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img 
              src='https://kronoiinc.com/wp-content/uploads/2021/07/telecalling-jobs-from-home-without-investment.jpg' // Make sure this path is correct
              alt='Customer Support Team'
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
          
          <div className="col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-primary text-white">
                <h1 className="h4 mb-0 text-center">CUSTOMER SUPPORT</h1>
              </div>
              <div className="card-body p-4">
                <p className="lead mb-4">
                  We're here to help you with any questions about our products, orders, or services.
                </p>
                
                <div className="contact-method mb-3 d-flex align-items-center">
                  <BiMailSend className="text-primary me-3" size={24} />
                  <div>
                    <h3 className="h6 mb-1">Email Support</h3>
                    <a href="mailto:support@ecommerceapp.com" className="text-decoration-none">
                      support@ecommerceapp.com
                    </a>
                    <p className="small text-muted mt-1">Typically responds within 2 hours</p>
                  </div>
                </div>
                
                <div className="contact-method mb-3 d-flex align-items-center">
                  <BiPhoneCall className="text-primary me-3" size={24} />
                  <div>
                    <h3 className="h6 mb-1">Phone Support</h3>
                    <a href="tel:0123456789" className="text-decoration-none">
                      91+  7250570798
                    </a>
                    <p className="small text-muted mt-1">Monday-Friday, 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="contact-method mb-3 d-flex align-items-center">
                  <BiSupport className="text-primary me-3" size={24} />
                  <div>
                    <h3 className="h6 mb-1">Live Chat</h3>
                    <p className="mb-1">Available on our website</p>
                    <p className="small text-muted">Click the chat icon in the bottom right corner</p>
                  </div>
                </div>
                
                <div className="contact-method d-flex align-items-center">
                  <BiTime className="text-primary me-3" size={24} />
                  <div>
                    <h3 className="h6 mb-1">Support Hours</h3>
                    <p className="mb-0">24/7 for urgent order issues</p>
                    <p className="small text-muted">General inquiries: 9AM-9PM daily</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-2">
                  <p className="small text-muted">
                    For faster service, please have your order number ready when contacting us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;