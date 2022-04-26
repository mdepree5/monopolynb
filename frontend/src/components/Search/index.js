import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProperties } from '../../store/property';

const Search = ({placeholderText}) => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const properties = useSelector(state => state.property.listOfProperties);
  console.log('all properties', properties);


  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  const handleChange = event => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
  }

  return (
    <>
      <div className='search-bar'>
        <label htmlFor='searchBar' />
        <input
          id='searchBar'
          type="text"
          placeholder={placeholderText}
          onChange={handleChange}
        />
      </div>
      <div className='search-results'>
        {properties.filter(property => {
          if (property.title.toLowerCase().includes('baltic')) {
            console.log('filtered', property);
            return property;
          }
        }).map(property => (
          <div key={property.id}>{property.title}</div>
        ))
        }
      </div>
    </>  
  )
}

export default Search;