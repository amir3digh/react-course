import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useSearchParams } from "react-router";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const makeFakePosts = () => {
      for (let i = 1; i <= 20; i++) {
        setPosts((prev) => [...prev, i]);
      }
    };
    if (!posts.length) {
      makeFakePosts();
    }
    //read query : ?token=lsdjnfalsjdnasldjn
    console.log(searchParams.getAll("token"));
  }, [posts]);
  useEffect(() => {
    // setting search query params
    setSearchParams({ token: "mytoken", q: "thispost" });
  }, []);
  return (
    <div className="flex flex-col gap-3 items-center">
      <Outlet />
      <div className="text-2xl font-bold mb-4">post list</div>
      <div className="grid grid-cols-5 gap-10">
        {posts.map((post) => (
          <NavLink
            key={post}
            className={({ isActive }) =>
              isActive ? "text-red-600" : "text-blue-900"
            }
            to={`/blog/posts/${post}?`}
          >
            example {post}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
