import { useState } from "react"

const Search = ({searchChar,setName}) => {
    
    const[search, setSearch] = useState("");

    return(
    <>
      <div className="row">
        <div className="input-field col s12">
          <input id="search"
          style={{color:"white"}}
           type="text"
           className="validate"
           placeholder="Search"
           value={search}
           onChange={(event) => setSearch(event.target.value)}
           onKeyDown={(event) => {
            if(event.key==="Enter"){
                searchChar(`&name=${search}`);
                setName(search);
                setSearch("");
                }
            }}  
           />
        </div>
      </div> 
    </>) 
    
}
export {Search}