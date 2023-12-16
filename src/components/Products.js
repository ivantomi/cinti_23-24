"use client";

import React, { useState } from "react";
const AddProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    setIsAdding(true);

    try {
      const response = await fetch(
        `https://6561a305dcd355c0832401ab.mockapi.io/demo/PC`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            description: description,
            price: price,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      setName("");
      setDescription("");
      setPrice("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
    setIsAdding(false);
  };

  return (
    <div>
      <form
        className="flex justify-center flex-col items-center gap-4 w-1/2 mx-auto mt-10"
        onSubmit={handleAddProduct}
      >
        <h1 className="text-4xl">Add Product</h1>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-red-500"
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="text-red-500"
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="text-red-500"
          />
        </div>
        <button
          type="submit"
          disabled={isAdding}
          className="bg-gray-400 rounded-md p-4"
        >
          {isAdding ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
