import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container my-4">
        <div className="row g-4">
          <div className="col-md-5">
            <div className="border p-3 bg-white rounded shadow-sm text-center">
              <img
                src={`/api/v1/product/product-photo/${product._id}`}
                alt={product.name}
                className="img-fluid"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="border p-4 bg-white rounded shadow-sm">
              <h3 className="mb-3">{product.name}</h3>
              <h5 className="text-success mb-3">
                {product.price?.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              </h5>
              <p className="text-muted mb-3">{product.description}</p>
              <p><strong>Category:</strong> {product?.category?.name}</p>
              <div className="d-grid gap-2 d-md-block mt-4">
                <button className="btn btn-warning me-2">Add to Cart</button>
                <button className="btn btn-outline-dark">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-5">
          <h4>Similar Products</h4>
          {relatedProducts.length === 0 ? (
            <p className="text-muted">No similar products found.</p>
          ) : (
            <div className="row">
              {relatedProducts.map((p) => (
                <div className="col-md-3 mb-4" key={p._id}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      style={{ height: "200px", objectFit: "contain" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title">{p.name}</h6>
                      <p className="card-text text-muted">
                        {p.description?.substring(0, 40)}...
                      </p>
                      <p className="card-text fw-bold">
                        {p.price?.toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </p>
                      <div className="mt-auto">
                        <button
                          className="btn btn-sm btn-primary me-2"
                          onClick={() => navigate(`/product/${p.slug}`)}
                        >
                          View
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
