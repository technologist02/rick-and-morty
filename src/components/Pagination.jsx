import { getCountPages } from "../api";
export function Pagination(props) {

    const {pages, handlePage} = props;
    const count = getCountPages(pages)

    return (
        <ul className="pagination">
           <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            {
                count.map(item => 
                    (<li className="waves-effect text-white" key={item}
                    onClick={() => handlePage(item)}><a href="#!">{item}</a></li>)            
                    )
            }
            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}