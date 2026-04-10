import React from 'react'
import { data } from '../restApi.json'

const Team = () => {
  return (
    <section className='team' id='team'>
            <div className="container">
                        <div className="heading_section">
                                    <h1 className='heading'>OUR TEAM</h1>
                                    <p>Our team brings together years of experience and dedication to authentic Italian cuisine. From skilled chefs who honor time‑honored recipes to attentive staff who make every guest feel welcome, we share a commitment to quality, care</p>

                        </div>

                        <div className="team_container">
                                    {
                                                data[0].team.map((element) => {
                                                            return (
                                                                        <div className="card" key={element.id}>
                                                                                    <img src={element.image} alt={element.name} />
                                                                                    <h3>{element.name}</h3>
                                                                                    <p>{element.designation}</p>
                                                                        </div>
                                                            )
                                                })
                                    }
                        </div>
            </div>
      
    </section>
  )
}

export default Team
