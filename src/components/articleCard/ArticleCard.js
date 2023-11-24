import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ArticleCard.module.css";
import drawerImg from "../../images/drawers.jpg";
import profielImg from "../../images/avatar-michelle.jpg";
import btnIcon from "../../images/icon-share.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";

const shareVariants = {
  hidden: {
    opacity: 0,
    top: "-6rem",
  },
  visible: {
    opacity: 1,
    top: "-8.3rem",
    transition: {
      type: "spring",
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    y: -4,
  },
};

const ArticleCard = () => {
  const [openShare, setOpenShare] = useState(false);

  const handleMouseEnter = () => {
    setOpenShare(true);
  };

  const handleMouseLeave = () => {
    setOpenShare(false);
  };

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
            <button
              className={styles.btnShare}
              onClick={() => setOpenShare((prev) => !prev)}
            >
              <img src={btnIcon} alt="" />
            </button>

            {openShare && (
              <motion.aside
                className={styles.shareMenu}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                variants={shareVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h3 variants={iconVariants}>share</motion.h3>

                <motion.a href="#" variants={iconVariants} whileHover={"hover"}>
                  <img src={facebookIcon} alt="Facebook logo" />
                </motion.a>

                <motion.a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate"
                  variants={iconVariants}
                  whileHover={"hover"}
                >
                  <img src={twitterIcon} alt="Twitter logo" />
                </motion.a>

                <motion.a href="" variants={iconVariants} whileHover={"hover"}>
                  <img src={pinterestIcon} alt="Pinterest logo" />
                </motion.a>
              </motion.aside>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleCard;
