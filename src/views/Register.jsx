import React from "react";
import Decoration from "../components/Decoration";
import { Link } from "react-router-dom";
import styles from "../assets/styles/register.module.css";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  //to catch input
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      form.name === "" ||
      form.email === "" ||
      form.phone === "" ||
      form.password === "" ||
      form.confirmPassword === ""
    ) {
      alert("semua field input wajib diisi");
    }
    if (form.password !== form.confirmPassword) {
      alert("field create password dan new password harus sama");
    } else {
      const body = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      };
      axios
        .post(`${process.env.REACT_APP_MY_BACKEND}/register`, body)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className={styles.container}>
        <Decoration />
        <div className={styles.main}>
          <div className={styles.mainContainer}>
            <div className={styles.regard}>
              <div className={styles.greeting}>Let's Get Started</div>
              <div className={styles.subGreeting}>
                Create new account to access all features
              </div>
            </div>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.formInput}>
              <form action="" onSubmit={(e) => onSubmit(e)}>
                <div className={styles.textType}>
                  <div className="">
                    <input type="file" accept=".png, .jpg" />
                  </div>
                  <div className={styles.a}>Name</div>
                  <div className={styles.b}>
                    <input
                      type="text "
                      id="name "
                      name="name "
                      placeholder="Name"
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.c}>Email Address</div>
                  <div className={styles.d}>
                    <input
                      type="text "
                      id="email"
                      name="email"
                      placeholder="Enter Email Address"
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.e}>Phone Number</div>
                  <div className={styles.f}>
                    <input
                      type="text "
                      id="phone "
                      name="phone"
                      placeholder="08xxxxxxxxxx"
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.g}>Create New Password</div>
                  <div className={styles.h}>
                    <input
                      type="password "
                      id="password "
                      name="password "
                      placeholder="Create New Password"
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.i}>New Password</div>
                  <div className={styles.j}>
                    <input
                      type="password "
                      id="newpassword "
                      name="newpassword "
                      placeholder="New Password "
                      onChange={(e) =>
                        setForm({ ...form, confirmPassword: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxInput}>
                    <input type="checkbox" name="aggrement" id="" />
                  </div>
                  <div>I aggre to terms & conditions</div>
                </div>
                <div className={styles.submitButton}>
                  <button type="submit ">Register Account</button>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.loginDialog}>
            <div className={styles.dialog1}>Already have Account?</div>
            <div className={styles.dialog2}>
              <Link className={styles.dialog2Link} to="/login">
                Log in Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
