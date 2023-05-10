import { Link } from "react-router-dom";
const EpisodeItem = (props) => {
    
    const {id, episode, name} = props;

    return (
        (<li className="collection-item"><div>{episode} : {name} <Link to={`/episode/${id}`} className="secondary-content"><i className="material-icons">visibility</i></Link></div></li>)
    )
}
export {EpisodeItem}