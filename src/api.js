import { API_URL } from "./config";

const getPage = async(page) => {
    const response = await fetch(`${API_URL}?page=${page}`)
        return await response.json();
}

const getCharacterById = async(id) => {
    const response = await fetch(`${API_URL}${id}`)
        return await response.json();
}

const getEpisode = async(array) => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${array}`)
    return await response.json();
}

const getCountPages = (pages) =>{
    const array =[];
    for (let i=0;i<pages;i++)
    {
        array[i] = i+1;
    }
    return array;
}

export {getPage, getCountPages, getCharacterById, getEpisode}