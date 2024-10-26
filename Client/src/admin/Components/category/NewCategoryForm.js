import React, { useState } from "react";
import { isAuthenticated } from "../../../auth/index";
import { createCategory } from "../../apiAdmin";

export const NewCategoryForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setSuccess(true);
        setName(""); // Reset the category name input
      }
    });
  };

  // Show success message
  const showSuccess = () => {
    return success && <h5 className="text-success">Category is created successfully</h5>;
  };

  // Show error message
  const showError = () => {
    return error && <h5 className="text-danger">Category name should be unique</h5>;
  };

  return (
    <div>
      <form onSubmit={clickSubmit}>
        <div className="border p-3 ">
          <div>
            <label className="text-muted me-2">Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              autoFocus // Automatically focus this input when the component mounts
            />
          </div>
          <button className="my-3 btn btn-success">Create Category</button>
        </div>
      </form>
      {showSuccess()} {/* Call to show success */}
      {showError()} {/* Call to show error */}
    </div>
  );
};
