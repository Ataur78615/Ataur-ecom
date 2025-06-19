import React from 'react';
import Layout from '../components/Layout/Layout';
import { FaShieldAlt, FaLock, FaUserShield, FaInfoCircle } from 'react-icons/fa';

const Policy = () => {
  return (
    <Layout title="Privacy Policy" description="Learn how we protect your personal information">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* Header */}
            <div className="text-center mb-5">
              <FaShieldAlt className="display-4 text-primary mb-3" />
              <h1 className="mb-3">Privacy Policy</h1>
              <p className="lead">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            {/* Introduction */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <p>
                  At <strong>Ataur E-Commerce Store</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
                </p>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="accordion" id="privacyAccordion">
              {/* Information Collection */}
              <div className="card mb-3 shadow-sm">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button 
                      className="btn btn-link btn-block text-left d-flex justify-content-between align-items-center" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#collapseOne"
                    >
                      <span><FaLock className="mr-2" /> Information We Collect</span>
                      <FaInfoCircle />
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#privacyAccordion">
                  <div className="card-body">
                    <p>We may collect the following types of information:</p>
                    <ul>
                      <li><strong>Personal Information:</strong> Name, email address, phone number, shipping/billing address</li>
                      <li><strong>Payment Information:</strong> Credit card details (processed securely through our payment processor)</li>
                      <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                      <li><strong>Usage Data:</strong> Pages visited, products viewed, time spent on site</li>
                      <li><strong>Cookies:</strong> We use cookies to enhance your shopping experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Usage */}
              <div className="card mb-3 shadow-sm">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button 
                      className="btn btn-link btn-block text-left collapsed d-flex justify-content-between align-items-center" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#collapseTwo"
                    >
                      <span><FaUserShield className="mr-2" /> How We Use Your Information</span>
                      <FaInfoCircle />
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#privacyAccordion">
                  <div className="card-body">
                    <p>Your information helps us to:</p>
                    <ul>
                      <li>Process and fulfill your orders</li>
                      <li>Provide customer support</li>
                      <li>Improve our website and services</li>
                      <li>Send you relevant offers and updates (with your consent)</li>
                      <li>Prevent fraud and enhance security</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Sharing */}
              <div className="card mb-3 shadow-sm">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button 
                      className="btn btn-link btn-block text-left collapsed d-flex justify-content-between align-items-center" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#collapseThree"
                    >
                      <span><FaShieldAlt className="mr-2" /> Data Sharing & Disclosure</span>
                      <FaInfoCircle />
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#privacyAccordion">
                  <div className="card-body">
                    <p>We may share your information with:</p>
                    <ul>
                      <li><strong>Service Providers:</strong> Payment processors, shipping carriers, IT services</li>
                      <li><strong>Business Partners:</strong> Only with your explicit consent</li>
                      <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                    </ul>
                    <p className="mt-3">We never sell your personal information to third parties.</p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="card mb-3 shadow-sm">
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0">
                    <button 
                      className="btn btn-link btn-block text-left collapsed d-flex justify-content-between align-items-center" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#collapseFour"
                    >
                      <span><FaLock className="mr-2" /> Data Security</span>
                      <FaInfoCircle />
                    </button>
                  </h2>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#privacyAccordion">
                  <div className="card-body">
                    <p>We implement appropriate security measures including:</p>
                    <ul>
                      <li>SSL encryption for all data transmissions</li>
                      <li>Secure storage with access controls</li>
                      <li>Regular security audits</li>
                      <li>PCI DSS compliance for payment processing</li>
                    </ul>
                    <p className="mt-3">
                      While we strive to protect your data, no method of transmission over the Internet is 100% secure. 
                      We cannot guarantee absolute security but we work diligently to protect your information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="card mb-3 shadow-sm">
                <div className="card-header" id="headingFive">
                  <h2 className="mb-0">
                    <button 
                      className="btn btn-link btn-block text-left collapsed d-flex justify-content-between align-items-center" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#collapseFive"
                    >
                      <span><FaUserShield className="mr-2" /> Your Rights</span>
                      <FaInfoCircle />
                    </button>
                  </h2>
                </div>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#privacyAccordion">
                  <div className="card-body">
                    <p>You have the right to:</p>
                    <ul>
                      <li>Access your personal data we hold</li>
                      <li>Request correction of inaccurate data</li>
                      <li>Request deletion of your data (subject to legal requirements)</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Withdraw consent where processing is based on consent</li>
                      <li>Lodge a complaint with a supervisory authority</li>
                    </ul>
                    <p className="mt-3">
                      To exercise these rights, please contact us at privacy@yourecommercestore.com.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="card shadow-sm mt-4">
              <div className="card-body">
                <h5 className="mb-3">Changes to This Policy</h5>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our website with an updated effective date.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card shadow-sm mt-4">
              <div className="card-body">
                <h5 className="mb-3">Contact Us</h5>
                <p>
                  If you have questions about this Privacy Policy, please contact our Data Protection Officer at:
                </p>
                <address>
                  <strong>Ataur E-Commerce Store</strong><br />
                  Saba: Privacy Officer<br />
                  123 Business Avenue<br />
                  Bokaro, Jharkhand 829112<br />
                  Email: privacy@ataurecommercestore.com<br />
                  Phone: 91+ 7250570798
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;