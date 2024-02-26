import { Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <>
      <h1>this is post layout</h1>;
      <Outlet />
    </>
  );
};

export default PostLayout;
