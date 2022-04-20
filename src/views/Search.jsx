import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../assets/styles/search.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Alert } from "reactstrap";
const Search = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    axios
      .get(`${process.env.REACT_APP_MY_BACKEND}/recipe?search=${searchQuery}`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        if (res.data.data === null) {
          alert(`Kata pencarian ${searchQuery} tidak ditemukan`);
          return;
        }
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (!token || !user) {
      navigate("/login");
    }
    //fetch api
    axios
      .get(`${process.env.REACT_APP_MY_BACKEND}/recipe`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid pt-5">
        <div className="mt-5">
          <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Recipe at here"
            />
            <button className="fa fa-search"></button>
          </form>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <Link
              to={`/recipe/${item.id}`}
              className="col-md-4 d-flex position-relative pt-5 ps-5"
              key={i}
            >
              <img
                src={`${process.env.REACT_APP_MY_BACKEND}/${item.photo}`}
                alt=""
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "30px",
                }}
              />
              <div className={styles.titleRecipe}>{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Search;
