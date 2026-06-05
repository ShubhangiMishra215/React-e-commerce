import React from 'react'
import { items } from '../context/Data';
import Products from '../components/Products';

const SearchProduct = () => {
  const{term} = useParams();  

  const searchProducts = items.filter(pro=>
    pro.title.tolowerCase().includes(term.tolowerCase()));
  
  return (
    <div>
      <Products items={searchProducts}/>
    </div>
  )
}

export default SearchProduct
