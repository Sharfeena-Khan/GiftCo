import React, { useState } from "react";
import Layout from "../core/Layout";
import { useHistory } from "react-router-dom";
import { isAuthenticated, signout } from "../auth";
import SideBar from "../core/sideBar";
import { createCategory } from "./apiAdmin";

import { NewCategoryForm } from "./Components/category/NewCategoryForm";
import { NewSub_CategoryForm } from "./Components/category/NewSubCategoryForm";

const CreateCategory = () => {
  // const [name, setName] = useState("");
  // const [subCat, setSubCat] = useState("")
  // const [error, setError] = useState(false);
  // const [success, setSuccuss] = useState(false);

  // const { user, token } = isAuthenticated();

  // const clickSubmit = (e) => {
  //   e.preventDefault();
  //   setError('')
  //   setSuccuss(false)
  //   createCategory(user._id, token, {name})
  //   .then(data =>{
  //     if(data.error){
  //       setError(data.error)
  //     } else{
  //       setError("")
  //       setSuccuss(true)
  //     }
  //   })
  // };

  // const NewCategoryForm = () => (
  //   <form onSubmit={clickSubmit}>
  //       <div className="border p-3 ">
  //       <div>
  //       <label className="text-muted me-2">Name</label>
  //       <input
  //         type="text"
  //         onChange={(e) => setName(e.target.value)}
  //         value={name}
  //         required
  //         autoFocus
  //       />
  //     </div>
  //     <button className="my-3 btn btn-success">Create Category</button>
  
  //       </div>
  //      </form>
  // );

  // const NewSub_CategoryForm = () => (
  //   <form onSubmit={clickSubmit}>
  //    <div className="border p-3 mt-5">
  //    <div className=" mt-4">
  //       <label className="text-muted ">
  //         Main Category:
  //         <select className="ms-5">
  //           <option value="1">Frame</option>
  //           <option value="2">Haampers</option>
  //           <option value="3">Save the date video</option>
  //         </select>
  //       </label>
  //     </div>
  //     <div>
  //       <label className="text-muted mt-4 me-3">Sub-Category Name</label>
  //       <input
  //         type="text"
  //         onChange={(e) => setSubCat(e.target.value)}
  //         value={subCat}
          
  //       />
  //     </div>
  //     <button className="mt-3 btn btn-success">Create Sub-Category</button>
  //    </div>
  //   </form>
  // );


  // const showSuccess =  ()=>{
  //   if(success){
  //     return <h3 className="text-success">{name} is created successfully</h3>
  //   }
  // }

  // const showError =  ()=>{
  //   if(error){
  //     return <h3 className="text-danger">Category name should be unique </h3>
  //   }}
  

  return (
    <Layout title="Category Management" description="" className="container">
      <div className="row">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-9">
          {/* <showError/>
          <showSuccess/> */}
          <NewCategoryForm />
          <NewSub_CategoryForm/>
          {/* <NewSub_CategoryForm/> */}
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
