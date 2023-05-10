import { Link } from "react-router-dom";
export const Char = (props) => {
    const {
        id, name, status, species, type, gender, image, origin, location
    } = props;


    return (<div className="item card" id={id}>
        <div className="card-image">
            <img src={image} alt= {name} />
        </div>
        <div className="card-content">
            <span  className="card-title">{name}</span>
            <h6>{type} {species}</h6>
            <p>{gender} {status}</p>
            <h6>{location.name}</h6>
        </div>
        <div className="card-action">
            <Link to={`/characters/${id}`} className="btn waves-effect waves-light">View
            <i className="material-icons right">send</i>
            </Link>
        </div>
        
    </div>);
}