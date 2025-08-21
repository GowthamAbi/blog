import React, { useState } from "react";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    thumbnail: null,
    title: "",
    subtitle: "",
    description: "",
    category: "",
    isPublished: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Data:", formData);
    // 🚀 send to backend API
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Add Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Thumbnail */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Upload Thumbnail</label>
          <input
            type="file"
            name="thumbnail"
            onChange={handleChange}
            className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Blog title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Blog Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Type here"
            className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Sub Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Sub Title</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            placeholder="Type here"
            className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Blog Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Blog Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
          />
          <button
            type="button"
            className="mt-2 px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg shadow hover:bg-indigo-600"
          >
            Generate with AI
          </button>
        </div>

        {/* Blog Category */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Blog Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select category</option>
            <option value="tech">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="startup">Startup</option>
            <option value="finance">Finance</option>
          </select>
        </div>

        {/* Publish Toggle */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="text-gray-600 text-sm">Publish Now</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg font-medium shadow hover:bg-green-600"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
