import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../assets/styles/detailrecipe.module.css";
import videoImg from "../assets/images/video.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const DetailRecipe = () => {
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
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.containerIntro}>
          <div className={styles.containerIntroContent}>
            <div className={styles.containerIntroContentJumbotron}>
              <div className={styles.containerIntroContentJumbotronTopContent}>
                <h1>{data.title}</h1>
                <img
                  src={`${process.env.REACT_APP_MY_BACKEND}/${data.photo}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.container2}>
        <section className={styles.container2Intro}>
          <div className={styles.container2IntroJumbotron}>
            <div className={styles.container2IntroJumbotronMidContent}>
              <h1>Ingredients</h1>
              <ul>
                <li>{data.ingredients}</li>
              </ul>
              <div
                className={styles.container2IntroJumbotronMidContentVideoList}
              >
                <Link
                  className={
                    styles.container2IntroJumbotronMidContentVideoListLink
                  }
                  to="#"
                >
                  <button>
                    <img src={videoImg} alt="logo Video" />
                  </button>
                </Link>
                <Link
                  className={
                    styles.container2IntroJumbotronMidContentVideoListLink
                  }
                  to="#"
                >
                  <button>
                    <img src={videoImg} alt="logo Video" />
                  </button>
                </Link>
                <Link
                  className={
                    styles.container2IntroJumbotronMidContentVideoListLink
                  }
                  to="#"
                >
                  <button>
                    <img src={videoImg} alt="LogoVideo" />
                  </button>
                </Link>
                <Link
                  className={
                    styles.container2IntroJumbotronMidContentVideoListLink
                  }
                  to="#"
                >
                  <button>
                    <img src={videoImg} alt="Logo Video" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.container3}>
        <section className={styles.container3Intro}>
          <div className={styles.container3IntroJumbotron}>
            <div className={styles.container3IntroJumbotronBottomContent}>
              <div
                className={
                  styles.container3IntroJumbotronBottomContentCommentOnly
                }
              >
                <div
                  className={
                    styles.container3IntroJumbotronBottomContentCommentOnlyComment
                  }
                >
                  <div
                    className={
                      styles.container3IntroJumbotronBottomContentCommentOnlyCommentCommentText
                    }
                  >
                    Comment
                  </div>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div
                className={
                  styles.container3IntroJumbotronBottomContentButtonContainer
                }
              >
                <Link to="#">
                  <button>Send</button>
                </Link>
              </div>
              <div
                className={
                  styles.container3IntroJumbotronBottomContentCommentList
                }
              >
                <h1>Comment</h1>
                <div
                  className={
                    styles.container3IntroJumbotronBottomContentCommentListCommentProfile
                  }
                >
                  <img
                    src="https://s3-alpha-sig.figma.com/img/3d1d/4c1c/c08f710828e1d2aacf71af8c92583062?Expires=1650240000&Signature=bD-UAQkOsnaurh8mZQJ361d~IOzckb9qYFrEVT-CjHWoG2fc~01aX489JxOJOm-aBzK9kyGo3ebaJxoTmDBuutJbSILX8emUkTvDEvCYUQeZDdjeFcXRsykTYHXLxW5rwWT5q~tVKAFxUSeawwCE4VGTuoFZ05RRCQoyVeOfeyLVvYw7nZ9a2HTvlU2wF4QWPieLsTe8FbSl4Dwp7LGn2upsqDxahjJzQ--zgh9uNYBgMKBX7nMlsNyDhQL067h0KKWsI31YBeTssilTdnEHGMqmh-9dNnDhrLJQTH-EmzPfl6JfarbDKD7VxOcFeY-sGsvyfY86ghwLRokitDTJaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt=""
                  />
                  <div
                    className={
                      styles.container3IntroJumbotronBottomContentCommentListCommentProfileWhatComment
                    }
                  >
                    <div
                      className={
                        styles.container3IntroJumbotronBottomContentCommentListCommentProfileWhatCommentName
                      }
                    >
                      Ayudia
                    </div>
                    <div
                      className={
                        styles.container3IntroJumbotronBottomContentCommentListCommentProfileWhatCommentItsComment
                      }
                    >
                      Nice recipe. simple and delicious, thankyou
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default DetailRecipe;
