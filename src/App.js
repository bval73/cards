import React, {useEffect,useState} from 'react';
import Card from './components/card';
import { sortAsc, sort2Level, sortNumeric,sortTele } from './shared/helpers/sort';
import {search} from './shared/helpers/search';

import './App.scss';

/*
  https://randomuser.me/api/?results=20&nat=us
*/

const App = () =>{
  const [items, setItems] = useState([]);
  const [tempItems, setTempItems] = useState();
  // const sortedItems = items; 
  const [isLoading,setLoading] = useState(true);

  useEffect(() => {
      fetch('https://randomuser.me/api/?results=21&nat=us')
      .then((res) => res.json())
      .then((res) => {
        setItems(res.results);
      })
  }, []);

  useEffect(() => {
    setTempItems(items);
    setLoading(false);
}, [items]);

  if(isLoading){
    return(
      <div>Loading .......</div>
    )
  }

  const getEventValue = ((event) => {
    return event.target.value;
  })
  

  const sort = ((event) => {
    const sortBy = getEventValue(event);
    let sortedItems;
    switch (sortBy) {
      case 'state':
        sortedItems = sort2Level(['location','state'],items);
        break;
      case 'city':
        sortedItems = sort2Level(['location','city'],items);
        break;
      case 'firstName':
        sortedItems = sort2Level(['name','first'],items);
        break;
      case 'lastName':
        sortedItems = sort2Level(['name','last'],items);
        break;
      case 'dob':
        sortedItems = sort2Level(['dob','date'],items);
        break;
      case 'age':
        sortedItems = sortNumeric(['dob','age'],items);
        break;
      default:
        sortedItems = sortAsc(sortBy,items);
        break;
    }

    setTempItems(sortedItems);
  });

  const searchItems = (() => {
    const value = document.getElementById('search').value;
    const searchResults = search(items,value);
    setTempItems(searchResults);
  })

  return (
    <div className="App ">
      <header className="row">
        <div className='col-md-6'>
          <select onChange={sort}>
            <option value=''>Choose Sort Order</option>
            <option value='nat'>Country</option>
            <option value='email'>Email</option>
            <option value='city'>City</option>
            <option value='state'>State</option>
            <option value='firstName'>First Name</option>
            <option value='lastName'>Last Name</option>
            <option value='gender'>Gender</option>
            <option value='age'>Age</option>
            <option value='dob'>Dob</option>
            <option value='phone'>Phone</option>
            <option value='cell'>Cell</option>
          </select>  
        </div>
        <div className='col-sm-6'>
          <input type="text" id="search" name="search" /> 
          <button onClick={searchItems}>Search </button>
        </div>
      </header>
      <div className='container'>
        <div className='row'>
        {tempItems.length === 0 && items.length > 0 && !isLoading &&
          <div className='alert alert-danger'>
            There were no records found..
          </div>
        }
          <Card items={tempItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
