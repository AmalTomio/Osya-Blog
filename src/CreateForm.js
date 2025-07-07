import { useState } from "react";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Content:</label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{content}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default CreateForm;
