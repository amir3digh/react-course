import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Products from "./pages/Products";
import PageLayout from "./pages/PageLayout";
import BlogLayout from "./pages/blog/BlogLayout";
import PostsList from "./pages/blog/PostsList";
import PostDetail from "./pages/blog/PostDetail";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="blog" element={<BlogLayout />}>
          <Route path="posts" element={<PostsList />}>
            <Route path=":id" element={<PostDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
