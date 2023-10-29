import styles from './NewsCard.module.css';

const NewsCard = ({ title, description, url}) => {
  return (
    <div className={styles['news-card']}>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Leer más</a>
    </div>
  );
};

export default NewsCard;
