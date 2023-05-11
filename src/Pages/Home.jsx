import { useState, useEffect } from "react"
import { Chars } from "../components/Chars";
import { Pagination } from "../components/Pagination";
//import { getPage } from "../api";
import { API_URL } from "../config";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

export function Home() {

    const [chars, setChars] = useState([]);
    const [pages, setPages] = useState([]);
    const [loading, setLoad] = useState(true);
    const [name, setName]=useState("");

    const searchChar = (name) => {
        setLoad(true);
        fetch(`https://rickandmortyapi.com/api/character/?page=1${name}`)
        .then(response=>response.json())
        .then(data=>{setChars(data.results); setPages(data.info.pages);setLoad(false)})
    }

    const getPage = async(page,name) => {
        const response = await fetch(`${API_URL}?page=${page}&name=${name}`)
            return await response.json();
    }
    
    const handlePage = (page,char) => {
        setLoad(true);
        getPage(page, char).then(data=>{setChars(data.results); setLoad(false)});
    }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=1&name=${name}`)
        .then(response=>response.json())
        .then(data=>{setChars(data.results);
        setPages(data.info.pages);setLoad(false)})
        }, []
    )
    
    return (
        <>
        <Search searchChar={searchChar} setName={setName}/>
        {
            name && (<h6 style={{color:"white"}}>Search results for : {name}</h6>)
        }
        <Pagination pages={pages} handlePage={handlePage} name={name}/>
            {
            loading ? (<Preloader />) : (<Chars chars={chars}/>)
            } 
        </>
    )
}