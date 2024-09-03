import { useEffect } from 'react';
import { requestArticles } from '../../reducers/hackerNewsReducer.js';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';

export default function Medium() {
  const articles = useSelector((state) => state.medium.articles); //getting articles from store specifying the hackerNews reducer
  const loading = useSelector((state) => state.medium.loading); //getting loading from store specifying the hackerNews reducer
  const dispatch = useDispatch(); //Saving dispatch as a variable

  useEffect(() => {
    dispatch(requestArticles);
  }, []);

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  return (
    <div className="news-container">
      <img src="../../assets/mediumLogo.png" style={{ width: '250px' }} alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
