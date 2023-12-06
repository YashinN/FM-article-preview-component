import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ArticleCard.module.css";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";

const { iconVariants, shareVariants } = require("./Animation");

const ShareMenu = ({ handleMouseEnter, handleMouseLeave, openShare }) => {
  const shareMenuRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(e.target)) {
        handleMouseLeave();
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  });

  return (
    <>
      {openShare && (
        <motion.aside
          className={styles.shareMenu}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          variants={shareVariants}
          initial="hidden"
          animate="visible"
          ref={shareMenuRef}
        >
          <motion.h2 variants={iconVariants}>share</motion.h2>

          <motion.a href="#" variants={iconVariants} whileHover={{ y: -4 }}>
            <img src={facebookIcon} alt="Facebook logo" />
          </motion.a>

          <motion.a href="#" variants={iconVariants} whileHover={{ y: -4 }}>
            <img src={twitterIcon} alt="Twitter logo" />
          </motion.a>

          <motion.a href="#" variants={iconVariants} whileHover={{ y: -4 }}>
            <img src={pinterestIcon} alt="Pinterest logo" />
          </motion.a>
        </motion.aside>
      )}
    </>
  );
};

export default ShareMenu;
