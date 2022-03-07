import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
//*Components
import { findArticle } from "../../selectors/articles"
import Header from "./Header"

//*Style
import './style.css';


function DetailArticle ()  {
    const  { id }  = useParams();

    const article = useSelector((state) => {
        return findArticle(state.list, id );
        
    })
    //*Component starts here
    return(
        <div className="wrapper-detail">
            {/* <h1>{article.title}</h1> */}
        </div>
    )
}

export default DetailArticle;
