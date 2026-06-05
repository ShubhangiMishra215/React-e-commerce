import React from 'react'
import VideoPlayer from '../Components/VideoPlayer'
import Products from '../Components/Products'
import { useParams } from 'react-router-dom'
import { Videos } from '../context/Data'
import { items } from '../context/Data'

const ProductByCategory = () => {
  const {cat} = useParams();
  const videoByCategory = Videos.find(vid=>vid.category.toLowerCase() === cat.toLocaleLowerCase());
  const productsByCategory = items.filter(item=>item.category.toLowerCase() === cat.toLocaleLowerCase());
  return (
    <div>
      <VideoPlayer src={videoByCategory.url}/>
      <Products products={productsByCategory}/>
    </div>
  )
}

export default ProductByCategory
