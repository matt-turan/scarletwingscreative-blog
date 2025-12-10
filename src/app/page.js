// page.js

import BlogLayout from "@/app/components/BlogLayout";
import { generateMetadata } from "@/assets/data/metadata";
export const metadata = generateMetadata("devblog");

export default function Home() {
  return <BlogLayout />;
}
