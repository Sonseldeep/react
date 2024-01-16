import { useParams, useSearchParams } from "react-router-dom";
const Post = () => {
  let { item, id } = useParams();
  let [searchParams, setSearchParam] = useSearchParams();

  console.log(searchParams.get("price"));
  console.log(searchParams.get("sort"));
  return (
    <>
      <h1>Post Page- {item}</h1>
      <h1>Post Page- {id}</h1>
    </>
  );
};

export default Post;
