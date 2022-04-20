import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
const RecipeDetail = () => {
  const navigate = useNavigate;
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    // get token local storage
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    // kondisi cek token sama user ada gak
    if (!token || !user) {
      navigate("/login");
    }

    axios
      .get(`${process.env.REACT_APP_MY_BACKEND}/recipe/${id}`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setData(res.data.data);
        // console.log(typeof res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(id);
  return (
    <>
      <div>ini halaman detailnyaaa</div>
      <div>{data.title}</div>
      <div>{data.ingredients}</div>
    </>
  );
};

export default RecipeDetail;
