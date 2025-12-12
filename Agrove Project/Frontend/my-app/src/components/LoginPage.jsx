// LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  mobile: '',
  password: '',
});


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const res = await fetch("http://localhost:5000/login-password", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData)
});


      const data = await res.json();

      if (data.success) {
        localStorage.setItem("userMobile", formData.mobile);
        navigate("/dashboard");
      } else {
        alert(data.message || "Invalid mobile or password");
      }
    } catch (err) {
      console.log("Login error:", err);
    }
  };

  return (
    <div className="page-wrapper">
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <a onClick={() => navigate("/")} className="back-link" href="#">
          ← Back to Home
        </a>

        <div className="card">
          <h2>Welcome Back</h2>

          <form onSubmit={handleSubmit}>
            {/* MOBILE */}
            <div className="form-group">
              <label className="form-label">Mobile</label>
<input
  type="tel"
  required
  className="form-input"
  placeholder="Enter mobile number"
  value={formData.mobile}
  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
/>

            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                required
                className="form-input"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "1.5rem" }}
            >
              Login
            </button>
          </form>

          <p className="text-center mt-3">
  <a 
    href="#" 
    onClick={() => navigate("/login-otp")} 
    style={{ color: "#727D73", fontWeight: 600 }}
  >
    Sign in using OTP
  </a>
</p>

<p className="text-center mt-3 text-muted">
  Don't have an account?{" "}
  <a
    href="#"
    onClick={() => navigate("/signup")}
    style={{ color: "#727D73", fontWeight: 600 }}
  >
    Sign Up
  </a>
</p>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
