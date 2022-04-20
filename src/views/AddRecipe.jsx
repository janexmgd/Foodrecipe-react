import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../assets/styles/addrecipe.module.css";
import photo from "../assets/images/photo.svg";
const addRecipe = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.container}>
        <section>
          <div>
            <form action="">
              <div className={styles.jumbotron}>
                <div className={styles.formPhoto}>
                  <img src={photo} className={styles.formPhotoImg} alt="" />
                  <input className={styles.formPhotoInput} type="file" />
                </div>
                <div className={styles.formTitle}>
                  <h1 className={styles.formTitleH1}>Title</h1>
                  <input className={styles.formTitleInput} type="text" />
                </div>
                <div className={styles.formIngredients}>
                  <h1>Ingredients</h1>
                  <input type="text" />
                </div>
                <div className={styles.formVideo}>
                  <h1>Video</h1>
                  <input type="text" />
                </div>
                <button type="submit">Post</button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default addRecipe;
