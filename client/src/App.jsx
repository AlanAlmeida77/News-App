import { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import Header from "./components/Header";
import "./app.css";

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/news/spanish-news') 
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles));
  }, []);

  return (
    <div className="app">
      <Header />
      <NewsList news={newsData} />
    </div>
  );
}

export default App;
