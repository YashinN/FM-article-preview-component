import { motion } from "framer-motion";
import styles from "./ArticleCard.module.css";
const { btnVariants } = require("./Animation");

const ShareButton = ({ openShare, setOpenShare, buttonRef }) => {
  return (
    <motion.button
      ref={buttonRef}
      aria-label="share menu"
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
  );
};

export default ShareButton;
