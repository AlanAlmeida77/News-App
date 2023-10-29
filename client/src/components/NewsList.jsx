import NewsCard from './NewsCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const NewsList = ({ news }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {news.map((article, index) => (
          <div key={index}>
            <NewsCard
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage || 'URL_IMAGEN_MARCADOR_DE_POSICION'}
              url={article.url}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsList;
