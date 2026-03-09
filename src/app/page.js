// page.js

import BlogLayout from "@/app/components/BlogLayout";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { generateMetadata } from "@/assets/data/metadata";
export const metadata = generateMetadata("devblog");

export default function Home() {
  return (
    <>
      <Navigation />
      <BlogLayout />
      <Footer />
    </>
  );
}
