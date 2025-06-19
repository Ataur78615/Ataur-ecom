import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CategoryProductStyles.css"; // <-- CORRECTED: Changed from '../styles/CategoryProduct.css' to './CategoryProduct.css'

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);

  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container-fluid mt-3">
        <h4 className="text-center text-uppercase mb-3">
          Category: {category?.name}
        </h4>
        <h6 className="text-center mb-4">
          {products?.length} product{products.length !== 1 && "s"} found
        </h6>
        <div className="row">
          {/* Left Filters */}
          <div className="col-md-3 border-end px-4">
            <h5 className="mb-3">Filters</h5>
            <div>
              <h6>Price Range</h6>
              <div>
                <input type="checkbox" /> Under ₹500 <br />
                <input type="checkbox" /> ₹500 - ₹1000 <br />
                <input type="checkbox" /> ₹1000 - ₹5000 <br />
              </div>
              <hr />
              <h6>Ratings</h6>
              <div>
                <input type="checkbox" /> 4★ & above <br />
                <input type="checkbox" /> 3★ & above <br />
              </div>
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="col-md-9">
            <div className="d-flex flex-wrap justify-content-start">
              {products?.map((p) => (
                <div
                  className="card m-2 shadow-sm"
                  style={{ width: "18rem" }}
                  key={p._id}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{p.name}</h6>
                    <p className="card-text text-muted">
                      {p.description.substring(0, 40)}...
                    </p>
                    <h6 className="text-success">₹ {p.price}</h6>
                    <div className="d-grid gap-2 mt-2">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        View Details
                      </button>
                      <button className="btn btn-sm btn-warning text-white">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
