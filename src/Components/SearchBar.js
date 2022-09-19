import React,{useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder,data}) {
 
    const [filteredData,setFilteredData] = useState([]);

    const handleFilter = (e) =>
    {
        const searchWord=e.target.value;
        const newFilter=data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord==="")
        {
            setFilteredData([]);
        }
        else
        {
            setFilteredData(newFilter);
        }
    };
  return (
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} onChange={handleFilter}/>
            <div className="searchIcon">
               <SearchIcon />
            </div>
        </div>
       { filteredData.slice(0,15).length !==0 && (
        <div className="dataResult">
            {filteredData.map((value,key)=>{
                return <a className="dataItem" href={value.link} target="_blank" rel="noreferrer"><p>{value.title}</p></a>
            })}
        </div>)}
    </div>
  )
}

export default SearchBar