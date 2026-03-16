import React from 'react';
import Link from 'next/link';

const STRAPI_BASE = "http://13.48.85.216:1337";

function getPageNumbers(currentPage, pageCount) {
  const pages = [];
  if (pageCount <= 7) {
    for (let i = 1; i <= pageCount; i++) pages.push(i);
    return pages;
  }

  // Always show first page
  pages.push(1);

  if (currentPage > 3) {
    pages.push('...');
  }

  // Pages around current
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(pageCount - 1, currentPage + 1);
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (currentPage < pageCount - 2) {
    pages.push('...');
  }

  // Always show last page
  pages.push(pageCount);

  return pages;
}

const BlogList = ({ blogs = [], pagination = {} }) => {
  const { page: currentPage = 1, pageCount = 1 } = pagination;
  const pageNumbers = getPageNumbers(currentPage, pageCount);

  return (
    <div className="">
      <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-6 p-4 md:p-16 max-w-[1600px]">
        {blogs.length === 0 && (
          <div className="col-span-full text-center py-16">
            <p className="font-['Anek_Latin'] text-xl text-gray-500">
              No blogs found.
            </p>
          </div>
        )}

        {blogs.map((blog) => {
          const imageUrl = blog.image?.url
            ? `${STRAPI_BASE}${blog.image.url}`
            : '/blog.png';

          return (
            <div
              key={blog.id}
              className="rounded-[20px] bg-white flex flex-col items-center pb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={imageUrl}
                className="aspect-[42/22] w-full object-cover"
                alt={blog.heading || 'Blog post'}
              />
              <div className="font-['Anek_Latin'] font-semibold text-[19px] leading-[23px] p-4 flex-1">
                {blog.heading || 'Untitled Blog'}
              </div>
              <Link
                href={`/blog/${blog.slug}`}
                className="bg-[#80050A] w-[96%] p-2 text-center rounded-[12px] font-['Anek_Latin'] font-semibold text-[22px] leading-[22px] text-white hover:bg-[#6b0408] transition-colors duration-200"
              >
                Read More
              </Link>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="flex justify-center items-center gap-2 pb-10">
          {/* Previous Button */}
          {currentPage > 1 && (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="px-4 py-2 rounded-[10px] bg-white border font-['Anek_Latin'] font-semibold hover:bg-gray-50 transition-colors"
            >
              &laquo;
            </Link>
          )}

          {/* Page Numbers */}
          {pageNumbers.map((pageNum, idx) =>
            pageNum === '...' ? (
              <span
                key={`ellipsis-${idx}`}
                className="px-3 py-2 font-['Anek_Latin'] font-semibold"
              >
                ...
              </span>
            ) : (
              <Link
                key={pageNum}
                href={`/blog?page=${pageNum}`}
                className={`px-4 py-2 rounded-[10px] border font-['Anek_Latin'] font-semibold transition-colors ${pageNum === currentPage
                    ? 'bg-[#80050A] text-white border-[#80050A]'
                    : 'bg-white hover:bg-gray-50'
                  }`}
              >
                {pageNum}
              </Link>
            )
          )}

          {/* Next Button */}
          {currentPage < pageCount && (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="px-4 py-2 rounded-[10px] bg-white border font-['Anek_Latin'] font-semibold hover:bg-gray-50 transition-colors"
            >
              &raquo;
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogList;
