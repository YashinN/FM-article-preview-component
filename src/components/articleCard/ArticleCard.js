import { useState, useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import styles from "./ArticleCard.module.css";
import ArticleSection from "./ArticleSection";
import ProfileContent from "./ProfileContent";
import ShareButton from "./ShareButton";
import ShareMenu from "./ShareMenu";

const ArticleCard = () => {
  const [openShare, setOpenShare] = useState(false);

  const shareMenuRef = useRef(null);
  const buttonRef = useRef(null);

  useClickOutside(setOpenShare, shareMenuRef, buttonRef, [openShare]);

  const handleMouseEnter = () => {
    setOpenShare(true);
  };

  const handleMouseLeave = () => {
    setOpenShare(false);
  };

  return (
    <div className={styles.articleCard}>
      <figure className={styles.drawerImg}></figure>
      <section className={styles.articleWrapper}>
        <ArticleSection />
        <ProfileContent>
          <ShareButton
            openShare={openShare}
            setOpenShare={setOpenShare}
            buttonRef={buttonRef}
          />
          <ShareMenu
            openShare={openShare}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            shareMenuRef={shareMenuRef}
          />
        </ProfileContent>
      </section>
    </div>
  );
};

export default ArticleCard;
