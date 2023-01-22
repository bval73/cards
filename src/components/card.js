import React from 'react';
import moment from 'moment/moment';
import {updateInfo} from '../shared/helpers/update';

const Card = (props) => {
  const items = props.items;
 
  const updateItem = ((event) => {
    const id = event.target.getAttribute("class");
    let children = [].slice.call(document.getElementById(id).getElementsByTagName('p'), 0);
    let name = [].slice.call(document.getElementById(id).getElementsByTagName('h4'), 0);

    const updatedInfo = updateInfo(children,name,id);

    items.map(el => (id === el.id.value ? Object.assign(el, updatedInfo) : el));
  });

  return(
    items.map((item,indx) => 
      <div className='card text-left col-md-4' id='MadMobileCard' key={indx}>
        <div id={item.id.value}>
          <div className='card-header text-center'>
            <h4 suppressContentEditableWarning={true} contentEditable="true" field='name'>{item.name.first} {item.name.last}</h4>
          </div>
          <div className='card-block row'>
            <div className="text-center">
              <img src={item.picture.large} alt={item.name.first} />
            </div>
            <p suppressContentEditableWarning={true} contentEditable="true" field='email'>
              Email: {item.email}
            </p>
            <div className='col-md-6'>
              <p suppressContentEditableWarning={true} className='card-text' contentEditable="true" field='date'>Dob: {moment(item.dob.date).format('MM/DD/YYYY')}</p>
              <p suppressContentEditableWarning={true} className='card-text' contentEditable="true" field='age'>Age: {item.dob.age}</p>
              <p suppressContentEditableWarning={true} className='card-text' contentEditable="true" field='city'>City: {item.location.city}</p>
              <p suppressContentEditableWarning={true} className='card-text' contentEditable="true" field='state'>State: {item.location.state}</p>
            </div>
            <div className='col-md-6'>
              <p suppressContentEditableWarning={true} className='card-text' contentEditable="true" field='phone'>Ph: {item.phone}</p>
              <p suppressContentEditableWarning={true} className='card-text' contentEditable="true" field='cell'>Cell: {item.cell}</p>
              <p suppressContentEditableWarning={true} className='card-text' contentEditable="true" field='nat'>Country: {item.nat}</p>
              <p suppressContentEditableWarning={true} className='card-text' contentEditable="true" field='gender'>Gender: {item.gender}</p>
            </div>          
          </div>
          <div className='card-footer'>
          <button onClick={updateItem} className={item.id.value}>Udate</button>
          </div>
        </div>
      </div>
    )
  )
}

export default Card;
