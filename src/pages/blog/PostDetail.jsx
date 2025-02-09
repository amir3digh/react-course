import { useParams } from "react-router";

const PostDetail = () => {
  const params = useParams();
  return (
    <div className="flex">
      <div className="text-3xl">This is Detail of Post Example {params.id}</div>
    </div>
  );
};

export default PostDetail;
