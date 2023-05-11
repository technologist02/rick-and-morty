import { useParams } from "react-router-dom";
import { Preloader } from "../components/Preloader";
import { getCharacterById } from "../api";
import { useState, useEffect } from "react";
import { EpisodeList } from "../components/EpisideList";

export function Character() {

    const {id} = useParams();
    const [loading, setLoad]=useState(true);
    const [char, setChar] = useState({});

    const { name, status, species, gender, image, episode, location} = char;

    
    useEffect(() => {
        getCharacterById(id).then(data=>{
            setChar(data);setLoad(false)})
    },[]);

return (<div>
    {
    loading ? (<Preloader/>) : 
        (<div className="char-info">
        <div className="char">
                <div className="image">
                    <img src={image} alt={name}></img>
                </div>
                <div className="properties-list">
                        <h5>{name}</h5>
                        <h6>{status} - {species}</h6>
                        <h6>{status}</h6>
                        <h6>{gender}</h6>
                        <h6>{location.name}</h6>
                </div> 
        </div> 
            <EpisodeList episode={episode}/>
    </div>)
    }
</div>
    )
}