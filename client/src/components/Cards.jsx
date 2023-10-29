
import styles from './Cards.module.css'; // Importa el archivo CSS Module para Cards

const Cards = ({ news }) => {
    return (
    <div className={styles['cards-container']}>
        {news.map((article, index) => (
        <div className={styles['news-card']} key={index}>
            <img src={article.urlToImage} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Leer más</a>
        </div>
    ))}
    </div>
    );
};

export default Cards;
