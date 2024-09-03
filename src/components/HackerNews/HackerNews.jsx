import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { requestArticles } from '../../reducers/hackerNewsReducer.js';

export default function HackerNews() {
  const articles = useSelector((state) => state.hackerNews.articles); //getting articles from store specifying the hackerNews reducer
  const loading = useSelector((state) => state.hackerNews.loading); //getting loading from store specifying the hackerNews reducer
  const dispatch = useDispatch(); //Saving dispatch as a variable

  //UseEffect to request articles when component mounts
  useEffect(() => {
    dispatch(requestArticles());
  }, []);

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);
  return (
    <div className="news-container">
      <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
