
import "./postForm.css";


export default function PostForm({ newPost, handleOnChange, handleOnSubmit }) {
  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <h1>Post Form</h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleOnChange}
          value={newPost.title}
        />
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          name="body"
          onChange={handleOnChange}
          value={newPost.body}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
