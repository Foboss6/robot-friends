import React from 'react';

const SearchBox = ({inputChange}) => {
  return (
    <>
      <input 
        className='pa2 ba br2 b--green bg-lightest-blue' 
        type='search' 
        placeholder='Search robot'
        onChange={inputChange} 
      />
    </>
  )
}

export default SearchBox;