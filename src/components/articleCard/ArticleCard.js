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
    // opacity: 0,
    // top: "-8rem",
  },
  visible: {
    // opacity: 1,
    // top: "-8.3rem",
    // transition: {
    //   type: "spring",
    //   duration: 0.3,
    //   staggerChildren: 0.05,
    // },
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
};

const btnVariants = {
  hidden: {
    fill: "#48556a",
  },

  visible: {
    fill: "#fff",
  },

  bgOpen: {
    backgroundColor: "#6E8098",
  },

  bgClosed: {
    backgroundColor: "#ecf2f8",
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

          <motion.button
            className={styles.btnShare}
            onClick={() => setOpenShare((prev) => !prev)}
            variants={btnVariants}
            initial="bgClosed"
            animate={openShare ? "bgOpen" : "bgClosed"}
            whileHover={{ scale: 1.2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <motion.path
                fill="#6E8098"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                variants={btnVariants}
                initial="hidden"
                animate={openShare ? "visible" : "hidden"}
              />
            </svg>
          </motion.button>

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

              <motion.a href="#" variants={iconVariants} whileHover={{ y: -4 }}>
                <img src={facebookIcon} alt="Facebook logo" />
              </motion.a>

              <motion.a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate"
                variants={iconVariants}
                whileHover={{ y: -4 }}
              >
                <img src={twitterIcon} alt="Twitter logo" />
              </motion.a>

              <motion.a href="" variants={iconVariants} whileHover={{ y: -4 }}>
                <img src={pinterestIcon} alt="Pinterest logo" />
              </motion.a>
            </motion.aside>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticleCard;
