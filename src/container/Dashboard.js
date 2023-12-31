import React from 'react'
import { ProductList } from '../data/ProductList'
import ProductCard from '../components/ProductCard'
export default function Dashboard() {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {ProductList.map((Product)=> <ProductCard {...Product} /> )}
    </div>
  )
}

