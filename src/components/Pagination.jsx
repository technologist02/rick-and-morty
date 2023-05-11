
import { getCountPages } from "../api";

export function Pagination(props) {

    const {pages, handlePage, name} = props;
    const count = getCountPages(pages);

    return (
        <div className="pagipagi">
        <ul className="pagination">
           <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            {
                count.map(item => 
                    (<li className="waves-effect text-white" key={item}
                    onClick={() => handlePage(item, name)}><a href="#!">{item}</a></li>)            
                    )
            }
            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
        </div>
    )
}