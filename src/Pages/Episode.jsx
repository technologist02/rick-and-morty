import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Preloader } from "../components/Preloader";
import { EpisodeChars } from "../components/EpisodeInfo"; 


const Episode = () => {
    const {id} = useParams();

    const [info, setInfo] = useState({});
    const [loading, setLoad] = useState(true);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(response=>response.json())
        .then(data=>{setInfo(data);setLoad(false)})
        }, [id]);

    return (
        <div>
            {
             loading ? (<Preloader />) : (<EpisodeChars characters={info.characters} />)
            }   
        </div>
    )
}
export {Episode}