import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import PlanVisit from "@/components/home/PlanVisit";
import Navbar from "@/components/Navbar";

const STRAPI_BASE = "https://strapi.saiteerth.in";
const PAGE_SIZE = 6;

async function getBlogs(page = 1) {
  const res = await fetch(
    `${STRAPI_BASE}/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}&sort=createdAt:desc`,
    { next: { revalidate: 60 } }
  );
  const json = await res.json();
  return {
    blogs: json.data || [],
    pagination: json.meta?.pagination || { page: 1, pageSize: PAGE_SIZE, pageCount: 1, total: 0 },
  };
}

export default async function Blog({ searchParams }) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page) || 1);
  const { blogs, pagination } = await getBlogs(currentPage);

  return (
    <div className="">
      <Navbar />
      <BlogHero />
      <BlogList blogs={blogs} pagination={pagination} />
      <PlanVisit />
      <Footer />
      <MobileBottomBar></MobileBottomBar>
    </div>
  );
}
