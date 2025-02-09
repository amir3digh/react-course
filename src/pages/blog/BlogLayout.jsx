import { Outlet } from "react-router";

const BlogLayout = () => {
  return (
    <div>
      <h1 className="text-3xl font-black border-b-4 pb-4">This is blog</h1>
      <Outlet />
    </div>
  );
};

export default BlogLayout;
