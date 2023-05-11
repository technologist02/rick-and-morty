import { Link } from "react-router-dom";
export const Char = (props) => {
    const {
        id, name, status, species, type, gender, image, location
    } = props;


    return (<div className="item card" id={id}>
        <div className="card-image">
            <img src={image} alt= {name} />
        </div>
        <div className="card-content">
            <span  className="card-title" style={{fontWeight:600}}>{name}</span>
            <p>{type} {species}</p>
            <p>{gender} {status}</p>
            <p>{location.name}</p>
        </div>
        <div className="card-action">
            <Link to={`/characters/${id}`} className="btn waves-effect waves-light">View
            <i className="material-icons right">send</i>
            </Link>
        </div>
        
    </div>);
}