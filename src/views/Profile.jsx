import React, { useEffect, useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardText,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../assets/styles/profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const users = localStorage.getItem("user");
    // kondisi cek token sama user ada gak
    if (!token || !users) {
      return navigate("/login");
    }
    //fetch api my recipe
    axios
      .get(`${process.env.REACT_APP_MY_BACKEND}/recipe/users/my_recipe`, {
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
    axios.get();
  }, []);
  //for get user
  const dataUser = localStorage.getItem("user");
  const user = JSON.parse(dataUser);
  const photo =
    user === null ? "" : `${process.env.REACT_APP_MY_BACKEND}/${user.photo}`;
  const name = user === null ? "" : `${user.name}`;
  //for bootstrap
  const [activeTabs, setActiveTabs] = useState("1");
  const logout = () => {
    localStorage.clear();
    alert("Logout berhasil");
    return navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.containerIntro}>
          <div className={styles.containerIntroJumbotron}>
            <div className={styles.containerIntroJumbotronProfile}>
              <img src={photo} alt="" />
              <h1>{name}</h1>

              <button
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            </div>
            <div className="col-lg-10 d-flex flex-column justify-content-center align-content-center ms-5">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={activeTabs === "1" ? "active" : ""}
                    onClick={() => setActiveTabs("1")}
                  >
                    My Recipe
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTabs === "2" ? "active" : ""}
                    onClick={() => setActiveTabs("2")}
                  >
                    Saved Recipe
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTabs === "3" ? "active" : ""}
                    onClick={() => setActiveTabs("3")}
                  >
                    Liked Recipe
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTabs}>
                <TabPane tabId="1">
                  <div className="row">
                    {data.map((item, i) => (
                      <Link
                        to={`/recipe/${item.id}`}
                        className="col-4 d-flex justify-content-center position-relative m-auto pt-5"
                        key={i}
                      >
                        <img
                          src={`${process.env.REACT_APP_MY_BACKEND}/${item.photo}`}
                          alt=""
                          style={{
                            borderRadius: "30px",
                            width: "300px",
                            height: "300px",
                          }}
                        />
                        <Link
                          to={`/recipe/edit/${item.id}`}
                          style={{
                            color: "#EFC81A",
                            fontSize: "30px",
                            position: "absolute",
                            marginLeft: "250px",
                          }}
                        >
                          <div className="fa fa-edit"></div>
                        </Link>
                        <Link
                          to={`/recipe/delete/${item.id}`}
                          style={{
                            color: "#EFC81A",
                            fontSize: "30px",
                            position: "absolute",
                            marginLeft: "150px",
                          }}
                        >
                          <div className="fa fa-trash"></div>
                        </Link>

                        <div className={styles.titleRecipe}>{item.title}</div>
                      </Link>
                    ))}
                  </div>
                </TabPane>
                <TabPane tabId="2" className="h-100"></TabPane>
                <TabPane tabId="3" className="h-100"></TabPane>
              </TabContent>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Profile;
