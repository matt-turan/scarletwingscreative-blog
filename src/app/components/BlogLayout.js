// BlogLayout.js
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogContent from "@/app/components/BlogContent";
import contentData  from "@/assets/data/content_data";
import useWindowWidth from "@/hooks/useWindowWidth";
import { SEO } from "@/app/components/SEO";

export default function BlogLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const width = useWindowWidth();
  const [activePost, setActivePost] = useState("git-commands");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const blogPosts = [
    { id: "git-commands", title: "Git Commands", category: "Version Control" },
    { id: "cmd-commands", title: "CMD Commands", category: "Windows" },
    { id: "npm-commands", title: "NPM Commands", category: "Package Manager" },
    { id: "npx-commands", title: "NPX Commands", category: "Package Manager" },
    { id: "docker-basics", title: "Docker Basics", category: "DevOps" },
  ];

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  useEffect(() => {
    setSidebarCollapsed(width <= 768);
  }, [width]); // Dependency array

  return (
    <>
      <SEO page="devblog" />

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
    </>
  );
}
