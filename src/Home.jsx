import React from 'react'
import './Home.css'
import Header from './Header'
import ExploreMenu from './ExploreMenu'
import {useState} from 'react'
import FoodDisplay from './FoodDisplay'


const Home = () => {
    const[category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
