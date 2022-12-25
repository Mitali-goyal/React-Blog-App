import { useEffect, useState } from "react";
import Blog from "./Blog";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div className="m-5">
            <Blog
              id={blog.id}
              title={blog.title}
              content={blog.content}
              desc={blog.desc}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
