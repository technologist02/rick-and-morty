import { useEffect, useState } from "react";
import { getCharacterById } from "../api";
import { Chars } from "./Chars";

const EpisodeChars = (props) => {
    
    const {characters} = props;
    const [chars, setChars] = useState([]);

    function charsId (characters){
        const array = characters.map(el => el.replace('https://rickandmortyapi.com/api/character/',''))
        return array;
    }
    useEffect(() => {
        getCharacterById(charsId(characters)).then(data=>{setChars(data);})
    },[]);
    
    return (
        <>
            <Chars chars={chars}/>
        </>
        )
}
export {EpisodeChars}
