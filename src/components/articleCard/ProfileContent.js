import styles from "./ArticleCard.module.css";
import profielImg from "../../images/avatar-michelle.jpg";

const ProfileContent = ({ children }) => {
  return (
    <div className={styles.profileContent}>
      <div className={styles.profileWrapper}>
        <img src={profielImg} alt="profile image" />

        <div>
          <h3>Michelle Appleton</h3>
          <p>28 Jun 2020</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProfileContent;
