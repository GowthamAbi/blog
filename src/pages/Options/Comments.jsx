import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

const Comments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      blogTitle: "How to use React",
      comment: "This is very helpful!",
      status: "Approved",
      date: "2025-08-18",
    },
    {
      id: 2,
      blogTitle: "Node.js Best Practices",
      comment: "Please explain more with examples.",
      status: "Not Approved",
      date: "2025-08-17",
    },
  ]);

  const toggleStatus = (id) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Approved" ? "Not Approved" : "Approved" }
          : c
      )
    );
  };

  return (
    <div className="bg-blue-300/10 w-full px-8 pt-8 gap-4">
      <div className="inline-flex py-6 px-2 gap0-2">
        <img src={assets.dashboard_icon_2} alt="comments icon" />
        <h5 className="font-semibold">Comments</h5>
      </div>

      <div className="relative max-w-5xl overflow-auto shadow rounded-lg text-sm bg-white">
        <table className="w-full text-sm text-gray-600">
          <thead className="text-sm text-gray-600 uppercase text-left bg-gray-100">
            <tr>
              <th className="px-2 py-4">#</th>
              <th className="px-2 py-4">Blog Title & Comment</th>
              <th className="px-2 py-4">Date</th>
              <th className="px-2 py-4">Status</th>
              <th className="px-2 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((c, index) => (
              <tr key={c.id} className="border-t">
                <td className="px-2 py-4">{index + 1}</td>
                <td className="px-2 py-4">
                  <p className="font-medium">{c.blogTitle}</p>
                  <p className="text-gray-500 text-xs">{c.comment}</p>
                </td>
                <td className="px-2 py-4">{c.date}</td>
                <td className="px-2 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      c.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-2 py-4 flex gap-2">
                  <button
                    onClick={() => toggleStatus(c.id)}
                    className="px-3 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Toggle
                  </button>
                  <button className="px-3 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
