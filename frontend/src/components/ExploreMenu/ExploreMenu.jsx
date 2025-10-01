import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets.js'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">Take a look at our menu and discover your next favorite meal! Every dish is carefully crafted with the freshest ingredients and bold, exciting flavors to make every bite truly unforgettable. From savory starters to indulgent desserts, there’s something to satisfy every craving and delight every palate.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=> {
            return(
                <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index} className="explore-menu-list-item">
                   <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                   <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
