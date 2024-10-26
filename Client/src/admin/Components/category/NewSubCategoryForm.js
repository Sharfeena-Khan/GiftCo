import React, { useState, useEffect } from "react";
import { API } from "../../../config"; // Ensure API is defined correctly
import { isAuthenticated } from "../../../auth/index";

export const NewSub_CategoryForm = () => {
  const [categories, setCategories] = useState([]);
  const [subCategoryName, setSubCategoryName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API}/categories`);
        const data = await response.json();
        console.log("Fetched categories:", data);

        // Adjust this based on your API response structure
        if (Array.isArray(data.categories)) {
          setCategories(data.categories);
        } else {
          console.error("Fetched data is not an array:", data);
          setError("Failed to load categories.");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
      }
    };

    fetchCategories();
  }, []);

  const handleSubCategorySubmit = async (e) => {
    e.preventDefault();
    const subCategoryData = {
      name: subCategoryName,
      category: selectedCategory,
      userId: user._id // Added user ID
    };
    console.log("-----------------------------\n", subCategoryData);
    
    
    try {
      const response = await fetch(`${API}/category/create_Sub_cat/${user._id}`, { // Use user._id here
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Assuming your API needs this for auth
        },
        body: JSON.stringify(subCategoryData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(true);
        setSubCategoryName(""); // Clear input
        setSelectedCategory(""); // Reset selected category
      } else {
        setError(result.error || "Failed to create sub-category.");
      }
    } catch (error) {
      setError("Failed to create sub-category.");
      console.error("Error creating sub-category:", error);
    }
  };

  return (
    <form onSubmit={handleSubCategorySubmit}>
      <div className="border p-3 mt-5">
        <div className="mt-4">
          <label className="text-muted">
            Main Category:
            <select
              className="ms-5"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label className="text-muted mt-4 me-3">Sub-Category Name</label>
          <input
            type="text"
            onChange={(e) => setSubCategoryName(e.target.value)}
            value={subCategoryName}
            required
            autoFocus
          />
        </div>
        <button className="mt-3 btn btn-success">Create Sub-Category</button>
        {success && <h4 className="text-success">Sub-Category created successfully!</h4>}
        {error && <h4 className="text-danger">{error}</h4>}
      </div>
    </form>
  );
};
