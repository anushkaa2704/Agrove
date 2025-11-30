import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#D0DDD0",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "16px", fontSize: "48px", fontWeight: "bold", color: "#727D73" }}>
          404
        </h1>

        <p style={{ marginBottom: "16px", fontSize: "20px", color: "#727D73" }}>
          Oops! Page not found
        </p>

        <a
          href="/"
          style={{
            color: "#AAB99A",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
