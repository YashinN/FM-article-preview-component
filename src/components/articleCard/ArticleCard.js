import { useState } from "react";
import styles from "./ArticleCard.module.css";
import drawerImg from "../../images/drawers.jpg";
import profielImg from "../../images/avatar-michelle.jpg";
import btnIcon from "../../images/icon-share.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";

const ArticleCard = () => {
  const [openShare, closeShare] = useState(false);

  return (
    <div className={styles.articleCard}>
      <img src={drawerImg} alt="drawers" className={styles.drawerImg} />
      <section className={styles.articleWrapper}>
        <article className={styles.article}>
          <h2>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>

          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </article>

        <div className={styles.profileContent}>
          <div className={styles.profileWrapper}>
            <img src={profielImg} alt="profile image" />

            <div>
              <h3>Michelle Appleton</h3>
              <p>28 Jun 2020</p>
            </div>
          </div>

          <div className={styles.shareWrapper}>
            <button className={styles.btnShare}>
              <img src={btnIcon} alt="" />
            </button>

            <aside className={styles.shareMenu}>
              <h3>share</h3>

              <a href="#">
                <img src={facebookIcon} alt="Facebook logo" />
              </a>

              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate">
                <img src={twitterIcon} alt="Twitter logo" />
              </a>

              <a href="">
                <img src={pinterestIcon} alt="Pinterest logo" />
              </a>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleCard;
