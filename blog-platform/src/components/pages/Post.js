import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !description) {
      alert("All fields are required!");
      return;
    }

    const postData = {
      title,
      category,
      description,
      file,
    };

    console.log("Post Data:", postData);
    alert("Post created successfully!");

    setTitle("");
    setCategory("");
    setDescription("");
    setFile(null);
  };

  return (
         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "500px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px", textAlign: "center" }}>Create a New Post</h1>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your post description here"
            rows="5"
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          ></textarea>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Choose File</label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileUpload}
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          {file && <p style={{ marginTop: "5px", fontSize: "14px", color: "#666" }}>Selected: {file.name}</p>}
        </div>

        <button
          type="submit"
          style={{ width: "100%", padding: "10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer" }}
        >
          Submit Post
        </button>
      </form>

    </div>

  );
};

export default CreatePost;
