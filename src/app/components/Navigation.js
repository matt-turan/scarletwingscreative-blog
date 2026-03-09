"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    // { id: "apps", label: "Apps", url: "/app-gallery" },
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech", label: "Tech" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const mobileItem = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <>
      <nav
        className="
          sticky
          top-0
          z-50
          backdrop-blur-md
          bg-gray-50/90
          border-b
          border-gray-200
          shadow-md
          shadow-gray-900/10
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div style={{ color: "#9a3921" }}>
                <span className="text-xl hidden md:flex font-bold">
                  DevBlog =&nbsp;
                  <span className="text-gray-600 font-light">
                    [ Web Development Commands & Tips ]
                  </span>
                </span>
                <span className="text-lg flex md:hidden font-medium">
                  DevBlog =&nbsp;
                  <span className="text-gray-600 font-light">
                    Dev Commands & Tips
                  </span>
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md cursor-pointer text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: "#9a3921" }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: "#9a3921" }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide-in */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-y-0 right-0 z-40 w-80 bg-white shadow-2xl"
      >
        <motion.div
          initial="hidden"
          animate={mobileMenuOpen ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.06 },
            },
          }}
          className="flex flex-col pt-20 px-6 space-y-3"
        >
          {sections.map((section) => {
            return (
              <motion.button
                variants={mobileItem}
                key={section.id}
                onClick={() =>
                  {
                    let pageUrl = section.id === 'apps'
                    ? section.url
                    : `https://scarletwingscreative.com#${section.id}`;

                    window.open(
                      // `https://scarletwingscreative.com#${section.id}`,
                      pageUrl,
                      "_self"
                    )
                  }
                }
                className="
                    px-1 sm:px-2 py-2
                    transition-colors
                    cursor-pointer
                    font-medium
                    text-right
                    lg:text-left
                    text-gray-600
                    hover:text-gray-900
                  "
              >
                {section.label}
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
