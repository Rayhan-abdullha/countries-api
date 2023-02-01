import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="text-center">
      <p>All rights RayhaN - {new Date().toDateString()}</p>
    </footer>
  );
}
