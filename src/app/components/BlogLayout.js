// BlogLayout.js

"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import BlogContent from "@/app/components/BlogContent";
import contentData  from "@/assets/data/content_data";
import useWindowWidth from "@/hooks/useWindowWidth";
import { SEO } from "@/app/components/SEO";

export default function BlogLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const width = useWindowWidth();
  const [activePost, setActivePost] = useState("cmd-commands");
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [currentYear, setCurrentYeaer] = useState(new Date().getFullYear());

  const blogPosts = [
    { id: "cmd-commands", title: "CMD Commands", category: "Windows" },
    { id: "git-commands", title: "Git Commands", category: "Version Control" },
    { id: "npm-commands", title: "NPM Commands", category: "Package Manager" },
    { id: "docker-basics", title: "Docker Basics", category: "DevOps" },
  ];

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  useEffect(() => {
    setSidebarCollapsed(width <= 768);

    const year = new Date().getFullYear();
    setCurrentYeaer(year);
  }, [width]); // Dependency array

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech", label: "Tech" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  // console.log("Content Data:", contentData);

  return (
    <>
      <SEO page="devblog" />

      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Navigation Bar */}
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
        <div
          className={`fixed inset-y-0 right-0 z-40 w-44 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-6 px-6 space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() =>
                  window.open(
                    `https://scarletwingscreative.com#${section.id}`, "_self"
                  )
                }
                className="
                    px-1 sm:px-2 py-2
                    transition-colors
                    cursor-pointer
                    font-medium
                    text-right
                    text-gray-600
                    hover:text-gray-900
                  "
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Main Layout */}
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:gap-6 relative">
            {/* Sidebar Navigation */}
            <aside
              className={`bg-white border border-slate-200 transition-all duration-300 shrink-0 ${
                sidebarCollapsed ? "w-12" : "w-64"
              } md:relative ${
                sidebarCollapsed
                  ? "relative"
                  : "fixed md:relative top-16 md:top-0 bottom-0 left-0 z-40 md:z-auto"
              }`}
            >
              <div className="md:sticky md:top-24 h-full overflow-y-auto">
                <button
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="w-full p-3 flex items-center justify-center border-b border-slate-200 hover:bg-slate-50 cursor-pointer"
                >
                  {sidebarCollapsed ? (
                    <ChevronRight
                      className="w-6 h-6 text-slate-600 font-semibold"
                      style={{ color: "#9a3921" }}
                    />
                  ) : (
                    <ChevronLeft
                      className="w-6 h-6 text-slate-600 font-semibold"
                      style={{ color: "#9a3921" }}
                    />
                  )}
                </button>

                {!sidebarCollapsed && (
                  <nav className="p-4">
                    <ul className="space-y-1">
                      {blogPosts.map((post) => (
                        <li key={post.id}>
                          <button
                            onClick={() => {
                              setActivePost(post.id);
                              if (window.innerWidth < 768) {
                                setSidebarCollapsed(true);
                              }
                            }}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                              activePost === post.id
                                ? "bg-slate-900 text-white"
                                : "text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            <div>{post.title}</div>
                            <div className="text-xs opacity-70 mt-0.5">
                              {post.category}
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>
            </aside>

            {!sidebarCollapsed && (
              <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
                onClick={() => setSidebarCollapsed(true)}
              />
            )}

            {/* Main Content Area */}
            <main className="flex-1 bg-white border border-slate-200 p-4 md:p-8 mt-6 md:mt-0">
              {contentData && (
                <BlogContent
                  activePost={activePost}
                  copiedIndex={copiedIndex}
                  onCopy={copyToClipboard}
                  contentData={contentData}
                />
              )}
            </main>
          </div>
        </div>
        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-500">
              © {currentYear} Mehmet Turan — Built with React/Next and Tailwind
              CSS.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
