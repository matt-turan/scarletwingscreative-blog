"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYeaer] = useState(new Date().getFullYear());

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYeaer(year);
  }, []);

  return (
    <footer className="py-8 border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-500">
          © {currentYear} Mehmet Turan — Built with React/Next and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
