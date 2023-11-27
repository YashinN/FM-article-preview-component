import { useState } from "react";
import styles from "./ArticleCard.module.css";
import ArticleSection from "./ArticleSection";
import ProfileContent from "./ProfileContent";
import ShareButton from "./ShareButton";
import ShareMenu from "./ShareMenu";

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
      <figure className={styles.drawerImg}></figure>
      <section className={styles.articleWrapper}>
        <ArticleSection />
        <ProfileContent>
          <ShareButton openShare={openShare} setOpenShare={setOpenShare} />
          <ShareMenu
            openShare={openShare}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </ProfileContent>
      </section>
    </div>
  );
};

export default ArticleCard;
