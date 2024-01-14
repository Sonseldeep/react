import { useParams } from "react-router-dom";
const Post = () => {
  let { item } = useParams();
  return (
    <>
      <h1>Post Page- {item}</h1>
    </>
  );
};

export default Post;
