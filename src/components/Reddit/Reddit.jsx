import { requestArticles } from '../../reducers/redditReducer.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';

export default function Reddit() {
  const articles = useSelector((state) => state.reddit.articles); //getting articles from store specifying the hackerNews reducer
  const loading = useSelector((state) => state.reddit.loading); //getting loading from store specifying the hackerNews reducer
  const dispatch = useDispatch(); //Saving dispatch as a variable

  useEffect(() => {
    dispatch(requestArticles);
  }, []);

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  return (
    <div className="news-container">
      <img src="../../assets/redditLogo.png" alt="" className='logo' />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
