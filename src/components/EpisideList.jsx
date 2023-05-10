import { getEpisode } from "../api";
import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { EpisodeItem } from "./EpisodeItem";

const EpisodeList = (props) => {

    const [episodes, setEpisode] = useState([]);
    const [loading, setLoad] = useState(true)

    const {episode} = props;

    function episodeId (episode){
        const array = episode.map(el => el.replace('https://rickandmortyapi.com/api/episode/',''))
        return array;
    }

    useEffect(() => {
        getEpisode(episodeId(episode)).then(data=>{setEpisode(data);
        setLoad(false)})
    },[episode]);

    return(<div>
        {
            loading ? (<Preloader />) : (<div className="episode-list">
                <ul className="collection">
                    <li className="collection-item"><h6>Episodes</h6></li>
                    {
                    Array.isArray(episodes) ? (episodes.map(el=>(<EpisodeItem key={el.id} {...el} />))):
                        (<EpisodeItem key={episodes.id} {...episodes} />) 
                    }
                </ul></div>)
        }
        </div>
    )
}

export {EpisodeList}