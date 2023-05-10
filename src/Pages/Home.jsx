import { useState, useEffect } from "react"
import { Chars } from "../components/Chars";
import { Pagination } from "../components/Pagination";
import { getPage } from "../api";
import { Preloader } from "../components/Preloader";

export function Home() {

    const [chars, setChars] = useState([]);
    const [pages, setPages] = useState([]);
    const [loading, setLoad] = useState(true);

    const handlePage = (page) => {
        setLoad(true);
        getPage(page).then(data=>{setChars(data.results); setLoad(false)});
    }

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/?page=1')
        .then(response=>response.json())
        .then(data=>{setChars(data.results);
        setPages(data.info.pages);setLoad(false)})
        }, []
    )
    
    return (
        <>
        <Pagination pages={pages} handlePage={handlePage}/>
        <div className="container content">
            {
            loading ? (<Preloader />) : (<Chars chars={chars}/>)
            } 
        </div>
        </>
    )
}