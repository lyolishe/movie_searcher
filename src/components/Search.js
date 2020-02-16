import React, { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const hendleInpitChange = (e) =>  {
        setSearchValue(e.target.value)};

    const resetInputField = (e) => {setSearchValue('')};

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    };

    return(
        <form className='form-group w-100 mt-3'>
            <div className='input-group w-50 mx-auto'>
                <input className='form-control' value={searchValue} onChange={hendleInpitChange} type='text'/>
                <div className='input-group-append'>
                    <input type='submit' className='btn btn-primary' value='go ahead!' onClick={callSearchFunction}/>
                </div>
            </div>
        </form>
    )
};

export default Search;
