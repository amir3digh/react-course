import Header from "./Header";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PageLayout;
