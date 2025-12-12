// SignupPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem("userMobile", formData.mobile);
          navigate("/dashboard");
        } else {
          alert(data.message || "Signup failed");
        }
      })
      .catch(err => console.log("Signup error:", err));
  };

  return (
    <div className="page-wrapper">
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <a onClick={() => navigate("/")} className="back-link" href="#">
          ← Back to Home
        </a>

        <div className="card">
          <div className="flex gap-2 mb-4" style={{ alignItems: "center" }}>
            <h2 style={{ margin: 0 }}>Create Account</h2>
          </div>

          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* MOBILE */}
            <div className="form-group">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                required
                className="form-input"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                required
                className="form-input"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                required
                className="form-input"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "1.5rem" }}
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-3 text-muted">
            Already have an account?{" "}
            <a
              href="#"
              onClick={() => navigate("/login")}
              style={{ color: "#727D73", fontWeight: 600 }}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
