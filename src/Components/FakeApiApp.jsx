import { useState, useEffect } from "react";
import PostContainer from "./PostContainer";
import PostForm from "./postForm";
export default function FakeApiApp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await fetch(URL);
    const postData = await response.json();
    setData(postData);
    setIsLoading(false);
  };
  const handleOnChange = (e) => {
    setNewPost(() => {
      return {
        ...newPost,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const postWithId = { ...newPost, id: data.length + 1 };
    setData([postWithId, ...data]);
    setNewPost({ title: "", body: "" });
  };
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <PostForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        newPost={newPost}
      />
      <PostContainer posts={data} />
    </div>
  );
}
