import styles from "./ArticleCard.module.css";

const ArticleSection = () => {
  return (
    <article className={styles.article}>
      <h2>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h2>

      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
    </article>
  );
};

export default ArticleSection;
