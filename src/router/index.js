import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipe from "../views/AddRecipe";
import Login from "../views/Login";
import Register from "../views/Register";
import Index from "../views/Index";
import DetailRecipe from "../views/DetailRecipe";
import Profile from "../views/Profile";
import Search from "../views/Search";
import RecipeDetail from "../views/RecipeDetail";
// test
// declaration router
const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="recipe" element={<Search />} />
          <Route path="recipe/:id" element={<DetailRecipe />} />
          <Route path="addrecipe" element={<AddRecipe />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="detailrecipe" element={<DetailRecipe />} /> */}
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default router;
