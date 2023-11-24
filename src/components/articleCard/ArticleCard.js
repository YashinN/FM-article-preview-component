import styles from "./ArticleCard.module.css";

const ArticleCard = () => {
  return (
    <div className={styles.articleCard}>
      <img src="" alt="" />

      <section>
        <article>
          <h2>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>

          <p>
            ver been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </article>

        <div>
          <img src="" alt="" />
          <h3>Michelle Appleton</h3>
          <p>28 Jun 2020</p>
        </div>
      </section>
    </div>
  );
};

export default ArticleCard;
