import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategoryType, setCategoryName } from '../redux/slices/filterSlice'

const Categories = ({type}) => {
  const dispatch = useDispatch();
  const categories = [
    {name: 'Partial', type:'partial'},
    {name: 'Full', type:'full'},
    {name: 'Free', type:'free-ebooks'},
    {name: 'Paid', type:'paid-ebooks'},
    {name: 'E-books', type:'ebooks'},
  ];

  const categoryInfo = ({type, name}) => {
    dispatch(setCategoryType(type));
    dispatch(setCategoryName(name))
  }
  return (
   <div className="categories">
    <ul>
     {categories.map( el => (
      <li
      key={el.type}
      onClick={() => categoryInfo(el)}
      className={type === el.name ? 'active' : ''}
      >
        {el.name}
      </li>
     ))}
    </ul>
   </div>
  )
}

export default Categories