import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Search = () => {
  const [values] = useSearch();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => {
              const inCart = cart.some((item) => item._id === p._id);
              return (
                <div
                  className="card m-2 shadow-sm"
                  style={{
                    width: "18rem",
                    border: "1px solid #e3e3e3",
                    borderRadius: "8px",
                    position: "relative",
                  }}
                  key={p._id}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    style={{ height: "220px", objectFit: "contain", padding: "10px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title" style={{ minHeight: "48px" }}>{p.name}</h5>
                    <p className="card-text" style={{ color: "#555", fontSize: "14px" }}>
                      {p.description.substring(0, 60)}...
                    </p>
                    <p className="card-text" style={{ fontWeight: "bold", color: "#B12704", fontSize: "18px" }}>
                      {p.price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </p>
                    {/* Amazon-style rating */}
                    <div style={{ color: "#FFA41C", fontSize: "16px", marginBottom: "4px" }}>
                      ★★★★☆ <span style={{ color: "#111", fontSize: "13px" }}>(123)</span>
                    </div>
                    <div className="mt-auto d-flex flex-column gap-2">
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      {inCart ? (
                        <button
                          className="btn btn-success"
                          onClick={() => navigate("/cart")}
                        >
                          Go to Cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            setCart([...cart, p]);
                            localStorage.setItem("cart", JSON.stringify([...cart, p]));
                            toast.success("Item Added to cart");
                          }}
                        >
                          <i className="fa fa-shopping-cart"></i> Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                  {/* Amazon style badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      background: "#FFD814",
                      color: "#111",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      fontWeight: "bold",
                      fontSize: "12px",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.07)",
                    }}
                  >
                    Best Seller
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;