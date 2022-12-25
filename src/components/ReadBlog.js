import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/blogs/" + id)
      .then((repsonse) => repsonse.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="mx-5 my-4 p-5 d-flex flex-column align-items-center shadow bg-body rounded">
      <div className="p-2">
        <h1 className="fw-bold">{blog.title}</h1>
      </div>
      <div className="p-2">
        <h5>{blog.author}</h5>
      </div>
      <div className="p-2">
        <p className="fs-5">{blog.content}</p>
      </div>
    </div>
  );
};
export default ReadBlog;
