import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginOtp = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // SEND OTP
  const sendOtp = async () => {
    if (!mobile) return alert("Enter mobile number");

    const res = await fetch("http://localhost:5000/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile }),
    });

    const data = await res.json();

    if (data.success) {
      alert("OTP sent successfully!");
      setOtpSent(true);
    } else {
      alert(data.message || "Failed to send OTP");
    }
  };

  // VERIFY OTP
  const verifyOtp = async () => {
    if (!otp) return alert("Enter OTP");

    const res = await fetch("http://localhost:5000/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile, otp }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("userMobile", mobile);
      navigate("/dashboard");
    } else {
      alert(data.message || "Invalid OTP");
    }
  };

  return (
    <div className="page-wrapper">
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <a onClick={() => navigate("/login")} className="back-link" href="#">
          ← Back to Login
        </a>

        <div className="card">
          <h2>Login With OTP</h2>

          {/* MOBILE INPUT */}
          <div className="form-group">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-input"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <button 
            className="btn btn-primary" 
            style={{ width: "100%", marginBottom: "1rem" }}
            onClick={sendOtp}
          >
            Send OTP
          </button>

          {/* OTP INPUT - Only show after OTP sent */}
          {otpSent && (
            <>
              <div className="form-group">
                <label className="form-label">Enter OTP</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Enter received OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <button 
                className="btn btn-primary" 
                style={{ width: "100%", marginTop: "1rem" }}
                onClick={verifyOtp}
              >
                Verify OTP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
