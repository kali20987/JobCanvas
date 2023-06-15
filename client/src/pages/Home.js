import React from 'react'
import planChalkboard from '../images/planChalkboard.jpeg'
import officeCubes from '../images/officeCubes.jpeg'
import programPic from '../images/program.png'
import typeLaptop from '../images/typeLaptop.jpeg'
import together from '../images/together.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';

//temp (restructure after done inputting bootstrap inputs)
// import {Button, Container, Row, Col} from 'react-bootstrap';

export default function Home() {
    return (
        <div className='home p-3 mb-2 bg-light text-dark'>
            <div className="container">
            <h1>JobCanvas</h1>
           

          
  

 

    <section className="whatWereAbout">
      <div className="section-content">
        <div className="container">
          <h5>What we are all about</h5>
          <p className="lead" >JobCanvas is the new age way to look for the ideal job! Come experince a better way to find a better future!</p>

          <div className="row">
            <div className="col-sm-12">
              <div className="card-group">
                <div className="card p-3 mb-2 bg-warning text-dark">
                  <div className="card-block">
                    <h4 className="card-title">Strategy &amp; Planning</h4>
                    <h6 className="card-subtitle">Put a plan in place</h6>
                  </div>
                  <img src={planChalkboard} alt="A chalkboard."/>
                  <div className="card-block">
                    <p className="card-text">Start with a rough draft and refine it with time.</p>
                    
                  </div>
                </div>
                <div className="card p-3 mb-2 bg-warning text-dark">
                    <div className="card-block ">
                      <h4 className="card-title">Creative &amp; Design</h4>
                      <h6 className="card-subtitle">Think outside the cubicle.</h6>
                    </div>
                    <img src={officeCubes} alt="Working on a laptop."/>
                    <div className="card-block">
                      <p className="card-text">Free your creativity. Do not let fear hamper what greatness may lay ahead of you.</p>
                     
                    </div>
                  </div>
                  <div className="card p-3 mb-2 bg-warning text-dark">
                  <div className="card-block">
                    <h4 className="card-title">Programming &amp; Technical</h4>
                    <h6 className="card-subtitle">Program yourself to be technically excellent.</h6>
                  </div>
                  <img src={programPic} alt="Fingers typing on a keyboard."/>
                  <div className="card-block">
                    <p className="card-text">Use your fingers to get results!</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="about">
      <div className="section-content">
        <div className="container">
         
             <h3>About JobCanvas</h3>
              <p className="lead">Have you been in search for a better life? Have you fallen short in the pursuit of happiness? Well let us help you start a new beginning! Here at JobCanvas we help you reach that potential that you may never have known was there!</p>
              
        </div>
      </div>
    </section>

    <section className="newsUpdates">
      <sectionb className="content">
        <div className="container">
          <h3>Latest news</h3>
          <p className="lead">With our powers combined, we came togther to deliver this JobCanvas website. Thank you to all the Group Members!</p>
          <br/>
          <div className="row">
            

              <div className="card-columns">
                  <div className="card bg-secondary">
                    <img className="card-img-top" src={typeLaptop} alt="Typing on laptop."/>
                    <div className="card-body">
                      <h4 className="card-title">Committed</h4>
                      <p className="card-text">We want to be just as committed as you are to starting a beautiful future.</p>
                    </div>
                  </div>
                  <div className="card p-3">
                  <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">We can delete these extra cards if we dont need them. </p>
                     
                    </div>
                  </div>
              
               
                
                  
                 
                  <div className="card-columns bg-secondary">
                  <img className="img-fluid img-thumbnail" src={together} alt="Typing on laptop."/>
                    <div className="card-body">
                      <h4 className="card-title">TOGETHER</h4>
                      <p className="card-text">Put some additional text here</p>
                      <p className="card-text"><small className="text-muted">Muted text for whatever purpose</small></p>
                    </div>
                  </div>
                </div>
                <br/>
                

            
          </div>
        </div>
      </sectionb>
    </section>

 
            </div>
        </div>
    )
}
