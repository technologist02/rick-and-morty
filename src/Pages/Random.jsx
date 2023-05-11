import { useState, useEffect } from "react"
import { Chars } from "../components/Chars";
import { Preloader } from "../components/Preloader";


export function Random() {

    const [chars, setChars] = useState([]);
    //const [random, setRandom] = useState([]);
    const [loading, setLoad] = useState(true);

    function getRandom() {
        const array = []
        // min = Math.ceil(min);
        // max = Math.floor(max);
        for (let i=1;i<=12;i++){
            array.push(Math.floor(Math.random() * 826 ) + 1)
        }
        return array;
    }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${getRandom()}`)
        .then(response=>response.json())
        .then(data=>{setChars(data);
        setLoad(false)})
        }, [])

    return (
        <>
            {
            loading ? (<Preloader />) : (<Chars chars={chars}/>)
            } 
        </>
    )
}