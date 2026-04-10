import React from 'react'
import { data } from '../restApi.json'

const Menu = () => {
  return (
    <section className='menu' id='menu'>
            <div className="container">
                        <div className="heading_section">
                                    <h1 className='heading'>POPULAR DISHES</h1>
                                    <p>At our restaurant, our popular dishes celebrate fresh ingredients, rich flavors, and time‑honored recipes. Each plate is thoughtfully crafted to bring comfort and delight — from signature curries simmered to perfection, to aromatic rice dishes and freshly baked breads, and tender grilled specialties that capture the essence of our kitchen.</p>
                        </div>

                        <div className="dishes_container">
                                    {
                                                data[0].dishes.map(element => {
                                                            return (
                                                                        <div className="card" key={element.id}>
                                                                                    <img src={element.image} alt={element.title} />
                                                                                    <h3>{element.title}</h3>
                                                                                    <button>{element.category}</button>
                                                                        </div>
                                                            )
                                                })
                                    }
                        </div>
            </div>
      
    </section>
  )
}

export default Menu
