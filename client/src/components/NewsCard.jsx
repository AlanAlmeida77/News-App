import styles from './NewsCard.module.css';

const NewsCard = ({ title, description, imageUrl, url }) => {
  return (
    <div className={styles['news-card']}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Leer más</a>
    </div>
  );
};

export default NewsCard;
