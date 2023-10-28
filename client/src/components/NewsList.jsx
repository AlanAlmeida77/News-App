
import NewsCard from './NewsCard';
import styles from './NewsList.module.css'; // Importa el archivo CSS Module

const NewsList = ({ news }) => {
  return (
    <div className={styles['news-list']}>
      {news.map((article, index) => (
        <NewsCard
          key={index}
          title={article.title}
          description={article.description}
          imageUrl={article.urlToImage}
          url={article.url}
          className={styles['news-card']} // Aplica la clase al componente NewsCard
        />
      ))}
    </div>
  );
};

export default NewsList;
