import React from "react";
import { Trash2, Edit3, Eye } from "lucide-react"; // icons from lucide-react

const TableData = ({ blog, index, fetchblogs }) => {
  const handleDelete = async () => {
    // Call delete API here
    await fetchblogs();
  };

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      {/* Index */}
      <td className="px-4 py-3 font-medium text-gray-700">{index}</td>

      {/* Blog Title */}
      <td className="px-4 py-3 font-semibold text-gray-800">
        {blog.title || "Untitled"}
      </td>

      {/* Date */}
      <td className="px-4 py-3 max-sm:hidden text-gray-500">
        {new Date(blog.createdAt).toLocaleDateString()}
      </td>

      {/* Status */}
      <td className="px-4 py-3 max-sm:hidden">
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            blog.status === "Published"
              ? "bg-green-100 text-green-700"
              : blog.status === "Draft"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {blog.status || "Unknown"}
        </span>
      </td>

      {/* Actions */}
      <td className="px-4 py-3 flex gap-2">
        <button
          className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600"
          title="View"
        >
          <Eye size={18} />
        </button>
        <button
          className="p-2 rounded-lg bg-yellow-50 hover:bg-yellow-100 text-yellow-600"
          title="Edit"
        >
          <Edit3 size={18} />
        </button>
        <button
          onClick={handleDelete}
          className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600"
          title="Delete"
        >
          <Trash2 size={18} />
        </button>
      </td>
    </tr>
  );
};

export default TableData;
