import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
           <div className='experience_content'>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon' />
            <div>
              <h4>HTML</h4>
              <small className='text_light'>Experienced</small>
              </div>

            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text_light'>Experienced</small>
              </div>

            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text_light'>Experienced</small>
            </div>

            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon'/>
            <div>
              <h4>React</h4>
              <small className='text_light'>Experienced</small>
            </div>

            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon'/>
            <div>
              <h4>Tailwind</h4>
              <small className='text_light'>Experienced</small>
            </div>

            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon'/>
            <div>
              <h4>Figma</h4>
              <small className='text_light'>Experienced</small>
              </div>

            </article>

            </div> 
            </div> 
            <div className='experience_backntend'>
            <h3>Backend Development</h3>
           <div className='experience_content'>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon'/>
            <div>
              <h4>Java</h4>
              <small className='text_light'>Experienced</small>
              </div>

            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon'/>
            <div>
              <h4>MySql</h4>
              <small className='text_light'>Experienced</small>
              </div>

            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon'/>
            <div>
              <h4>Spring</h4>
              <small className='text_light'>Experienced</small>
              </div>

            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon'/>
            <div>
              <h4>C++</h4>
              <small className='text_light'>Experienced</small>
              </div>

            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text_light'>Experienced</small>
              </div>

            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_icon'/>
            <div>
              <h4>Python</h4>
              <small className='text_light'>Experienced</small>
              </div>

            </article>

            
            
            </div> 
        
      </div>
      </div>
    
    </section>
  )
}

export default Experience