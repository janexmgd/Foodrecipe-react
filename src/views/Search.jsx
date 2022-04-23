import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styles from "../assets/styles/search.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Search = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/recipe?search=" + searchQuery);
    //fetch api
    axios
      .get(`${process.env.REACT_APP_MY_BACKEND}/recipe?search=${searchQuery}`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        if (res.data.data === null) {
          setIsError(true);
          setLoading(false);
          return;
        }
        setData(res.data.data);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };
  useEffect(() => {
    if (!token || !user) {
      navigate("/login");
    }
    setLoading(true);
    let url = `${process.env.REACT_APP_MY_BACKEND}/recipe?`;
    if (queryParams.get("search")) {
      setSearchQuery(queryParams.get("search"));
      url += `&search=${queryParams.get("search")}`;
    }
    //fetch api
    axios
      .get(url, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        if (res.data.data === null) {
          setIsError(true);
          setLoading(false);
          return;
        }
        setData(res.data.data);
        setLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid pt-5" style={{ minHeight: "80vh" }}>
        <div className="mt-5">
          <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Recipe at here"
              value={searchQuery}
            />
            <button type="submit" className="fa fa-search"></button>
          </form>
        </div>
        <div className="row h-100">
          {loading ? (
            <div>Loading</div>
          ) : isError ? (
            <div className={styles.noRecipe}>No relevant results found</div>
          ) : (
            data.map((item, i) => (
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
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Search;
