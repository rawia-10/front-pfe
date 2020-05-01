import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import image from './images/logo.png'
import image1 from "./images/info_1.jpg"
import image2 from "./images/info_2.jpg"
import image3 from "./images/info_2.jpg"
import image4 from "./images/icon_2.svg"
import image5 from "./images/icon_3.svg"
import image6 from "./images/icon_4.svg"
import image7 from "./images/icon_5.svg"
import image8 from "./images/icon_6.svg"
import image9 from "./images/dept_1.jpg"
import image10 from "./images/dept_2.jpg"
import image11 from "./images/dept_3.jpg"
import image12 from "./images/dept_4.jpg"
import image13 from "./images/latest_1.jpg"
import image14 from "./images/latest_2.jpg"
import image15 from "./images/latest_3.jpg"
import image16 from "./images/doc_5.jpg"


class Login extends Component {



  
  render() {
 

    return (
     <div>
  


      <div class="home">
      <div class="background_image bck" ></div>



      <header class="header" id="header">
        <div>
          <div class="header_top">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="header_top_content d-flex flex-row align-items-center justify-content-start">
                    <div class="logo">
                    <img  src={image} alt=""/>
                    </div>
                    <div class="header_top_extra d-flex flex-row align-items-center justify-content-start ml-auto">
                

<div className="p-3 d-flex bout">
            
              <Link to="loginpatient">
               <button type="button" class="btn btn-danger patient">
             <span>Patient</span>
               </button></Link>

               <Link to="loginmedecin">
               <button type="button" class="btn btn-danger med">
                 <span>Medecin</span>
               </button></Link>

               <Link to="loginsecretaire">
               <button type="button" class="btn btn-danger secreatire">
               <span>Secretaire</span>
               </button></Link>


              </div>
                    </div>
                    <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header_nav" id="header_nav_pin">
            <div class="header_nav_inner">
              <div class="header_nav_container">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="header_nav_content d-flex flex-row align-items-center justify-content-start">
                        <nav class="main_nav">
                          <ul class="d-flex flex-row align-items-center justify-content-start">
                            <li><a href="index.html"  id="ind">Accueil</a></li>
                            <li><a href="about.html">A Propos</a></li>
                            <li><a href="services.html">Services</a></li>
                            {/* <li><a href="news.html">News</a></li> */}
                            <li><a href="#contacter">Contact</a></li>
                            {/* <Link to="contact" class="wht"><li>Contact</li></Link> */}
                          </ul>
                        </nav>
                        <div class="search_content d-flex flex-row align-items-center justify-content-end ml-auto">
                          <form action="#" id="search_container_form" class="search_container_form">
                            <input type="text" class="search_container_input" placeholder="Search" required="required"/>
                            <button class="search_container_button"><i class="fa fa-search" aria-hidden="true"></i></button>
                          </form>
                        </div>

                        
   


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
     
      <div class="home_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content">
               
<section className="home-section section-hero overlay bg-image" style={{backgroundImage: 'url("img/banner/banner.png")'}} id="home-section">
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-12">
                      <div className="mb-5 textform-contro-center">
                        {/* fou9 search */}
                      </div>
                     
                      <form method="post" className="search-jobs-form">
                        <div className="row mb-5">
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <input type="text" className="form-control form-control-lg" placeholder="Nom de votre médecin " />
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <select className="form-control form-control-lg" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" placeholder="--Gouvernorat--">
                            <option>--Gouvernorat--</option>
                              <option>Tunis</option>
                              <option>Sousse</option>
                              <option>sfax</option>
                              <option>Nabeul</option>
                              <option>Kairouan</option>
                              <option>Ariana</option>
                              <option>Ben Arous</option>
                              <option>Manouba</option>
                              <option>Gafsa</option>
                              <option>Bizert</option>
                              <option>Beja</option>
                              <option>Gabes</option>
                              <option>Tozeur</option>
                              <option>Jandouba</option>
                              <option>Kasserine</option>
                              <option>Le Kef</option>
                              <option>Monastir</option>
                              <option>Sidi Bouzid</option>
                              <option>Siliana</option>
                              <option>Kébili</option>
                              <option>Mahdia</option>
                              <option>Zaghoun</option>
                              <option>Médnine</option>
                              <option>Tataouine</option>
                            </select>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <select className="form-control form-control-lg" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="--Spécialité--">
                            <option>--Spécialité--</option>
                              <option>généraliste</option>
                              <option>chirurgie</option>
                              <option>dermatologie</option>
                              <option>gynécologie</option>
                              <option>psychiatrie</option>
                              <option>radiologie</option>
                              <option>Médecine d'urgence</option>
                            </select>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                          <Link to="medecin">
                        <button type="submit" href="rendez-vous.html" className="btn btn-primary btn-lg btn-block text-white btn-search"><span className="icon-search icon mr-2" />Rechercher</button>
                        </Link>
                          </div>
                        </div>
                        <div className="row">
                          {/* ta7t search */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
       
                 </div>
            </div>
          </div>
        </div>
      </div>
   
   
    </div>
  
  
  
  
  	<div class="info">
		<div class="container">
			<div class="row row-eq-height">


				<div class="col-lg-4 info_box_col">
					<div class="info_box">
						<div class="info_image"><img  src={image1}  alt=""/></div>
						<div class="info_content">
							<div class="info_title">Vous êtes un professionnel de santé</div>
							<div> <span>  Informez vos patients durant l'épidémie
Adaptez l'organisation de vos consultations </span> </div>
						</div>
					</div>
				</div>


				<div class="col-lg-4 info_box_col">
					<div class="info_box">
						<div class="info_image"><img  src={image2}  alt=""/></div>
						<div class="info_content">
							<div class="info_title">Vous êtes une secrétaire</div>
							<div><span>prenez rendez-vous en ligne pour une consultation vidéo ou au cabinet.
Ne renoncez pas à vous soigner.</span></div>
						</div>
					</div>
				</div>


        <div class="col-lg-4 info_box_col">
					<div class="info_box">
						<div class="info_image"><img  src={image1}  alt=""/></div>
						<div class="info_content">
							<div class="info_title">Vous êtes un patient</div>
							<div><span>prenez rendez-vous en ligne pour une consultation vidéo ou au cabinet.
Ne renoncez pas à vous soigner.</span></div>
              

               {/* <Link to={`/patient${item.Id}`}>
                        <div name="col-xs-4 col-md-3 d-flex justify-content-end">
                            <i className="fa fa-info-circle t-green fa-lg" onClick={this.getPatient}></i>
                        </div>
                     </Link> */}
						</div>
             
					</div>
				</div>

{/* d */}
      </div>
		</div>
	</div>














  <footer>
        <div className="footer" id="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <h4> Brand Name </h4>
              </div>
              <div className="col-lg-3 col-sm-2 col-xs-3">
                <h3> Contact </h3>
                <ul>
                  <li><a className="email" href="#"> insert email here </a></li>
                  <br />
                  <li> <p> address line one </p> </li>
                  <li> <p> address line two </p> </li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-2 col-xs-3">
                <ul>
                  <li> <h5> <a href="#" style={{marginTop: '5em'}}> ABOUT US</a> </h5><h5 /></li>
                  <li> <h5><a href="#"> CURRENT SERIES </a> </h5><h5 /></li>
                  <li> <h5><a href="#"> THE HOUSE </a> </h5><h5 /></li>
                  <li> <h5><a href="#"> LOOKING BACK </a> </h5><h5 /></li>
                </ul>
              </div>
              {/*/.row*/} 
            </div>
            {/*/.container*/} 
          </div>
          {/*/.footer*/}
          <div className="footer-bottom">
            <div className="container">
              <p className="pull-left copyright"> Copyright © Footer 2014. All right reserved. </p>
            </div>
          </div>
          {/*/.footer-bottom*/} 
        </div></footer>

  </div>
  
    );
  }
}

export default Login;
