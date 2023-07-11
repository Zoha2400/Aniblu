import React, { useState } from 'react';
import './Header.scss'

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const wordsArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const results = wordsArray.filter((word) =>
      word.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };
  let classes;

  if(searchTerm.length != 0){
    classes = 'results visible'
  }else{
    classes = 'results'
  }

  return (
    <div className='search-anime'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a word"
      />
      {searchResults.length > 0 && (
        <div className={classes}>
          <p>Search results</p>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
