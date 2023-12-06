import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ArticleCard.module.css";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import useClickOutside from "../../hooks/useClickOutside";

const { iconVariants, shareVariants } = require("./Animation");

const ShareMenu = ({ handleMouseEnter, handleMouseLeave, openShare }) => {
  const shareMenuRef = useRef(null);

  useClickOutside(handleMouseLeave, shareMenuRef, [openShare]);

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
