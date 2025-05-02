import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is your starting screen.</p>
      
      
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}
