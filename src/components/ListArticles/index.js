import { useSelector } from 'react-redux'
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import { NavLink } from 'react-router-dom';

import './style.css';

const ListArticles = () => {

    const articles = useSelector((state) => state.list);
    console.log(articles)
        return (
        <div className="wrapper">
            <div className="wrapper-list">
                <h1>Actualités</h1>
                <div className="list">
                    {articles.map((currentArticle) => (
                    <NavLink 
                        key={currentArticle.id}   
                        to={`/list-articles/${currentArticle.id}`}
                    > 
                    <div className="article" id={currentArticle.id} style={{
                        backgroundImage: "url(" + currentArticle.image + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}>
                        <div className="wrapper-date">
                            <h3 className="article-date"><SimpleDateTime format="DMY" dateSeparator="/" showTime="0">{currentArticle.date}</SimpleDateTime></h3>
                        </div>
                        <div className="wrapper-title">
                            <h3 className="article-title">{currentArticle.title}</h3>
                        </div>
                    </div>
                    </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default ListArticles;
