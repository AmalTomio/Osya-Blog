import { useState, useEffect } from "react";
import BlogList from "./BlogList";

//useEffect = re-render tapi better guna untuk certain data for render kat DOM (use dependencies [])
//useEffect good for fetch data
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
      {!blogs && !isPending && <div>No blogs to display</div>}
    </div>
  );
};

export default Home;
