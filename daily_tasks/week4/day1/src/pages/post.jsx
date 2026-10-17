import { useParams } from "react-router-dom";
import '../css/page.css'
function Post() {
  const { postId } = useParams();

  return (
    <div className="container">
        <div className="page">
      <h2>Post Details</h2>
      <p>Viewing data for Post ID: <strong>{postId}</strong></p>
    </div>
    </div>
  );
}

export default Post;