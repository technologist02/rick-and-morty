import { useEffect, useState } from "react";
import { getCharacterById } from "../api";
import { Chars } from "./Chars";
import { Preloader } from "./Preloader";

const EpisodeChars = (props) => {
    
    const {characters} = props;
    const [chars, setChars] = useState([]);
    const [loading, setLoad] = useState(true);

    function charsId (characters){
        const array = characters.map(el => el.replace('https://rickandmortyapi.com/api/character/',''))
        return array;
    }
    useEffect(() => {
        getCharacterById(charsId(characters)).then(data=>{setChars(data); setLoad(false);})
    },[]);
    
    return (
        <>
            <Chars chars={chars}/>
        </>
        )
}
export {EpisodeChars}
