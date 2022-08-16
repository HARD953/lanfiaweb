import React,{useState} from "react";
import {  Message, useToaster,Button, IconButton, ButtonGroup, ButtonToolbar,Panel } from 'rsuite';

import './Home.css';

import CardsCibles from "../../components/cardsCibles/CardsCibles";
import CarouselApp from "../../components/carousel/CarouselApp";
import CarouselActions from "../../components/carouselActions/CarouselActions";

import homeImage from "../../assets/images/home/home3.png"
import homeImageBg from "../../assets/images/home/bg.png"
import homeCardTitleImage from "../../assets/images/home/cible-card-img.png"


const imagesCible = [{image:"https://www.scidev.net/afrique-sub-saharienne/wp-content/uploads/sites/2/Items-distribution-for-disabled-people-main-996x567.jpg",titre:"VULNERABLE 1"},
{image:"https://aho.org/wp-content/uploads/2019/03/a-1-1000x563.jpg",titre:"VULNERABLE 2"},
{image:"https://img.lemde.fr/2020/05/04/464/0/3500/1750/1440/720/60/0/13e3861_GGG-SIB02_HEALTH-CORONAVIRUS-SAFRICA_0504_11.JPG",titre:"VULNERABLE 3"},
{image:"https://www.afrik21.africa/wp-content/uploads/2019/11/shutterstock_1015597768-800x400.jpg",titre:"VULNERABLE 4"},
{image:"https://santeactu.bf/wp-content/uploads/2016/12/header_paludisme_0.jpg",titre:"VULNERABLE 5"},
{image:"http://www.ivoirematin.com/content/news/images/02-2017/056691edaca56f18908dd601f8294a386f195e65.jpg",titre:"VULNERABLE 6"},]

function Home() {

  

  return (
    <div className="home-container">
     
      <div className="home-carousel-container bg-dark-1 ">
        <div className="row">
          <div className="col-md-6" >
            <div className="home-carousel-text-btn-container">
              <div className="home-carousel-text-container mx-auto text-center pt-5">
                <h1 className=" text-uppercase text-white" >
                  Faire un don pour sauver des vies
                </h1>
                <h1 className="text-white" >
                  Venez en aide aux personnes <span className="text-danger text-uppercase" >Vulnerables</span>
                </h1>
                <h5 className="mt-md-5 text-white" >Informons-nous sur les causes caritatives à travers toute l'Afrique</h5>

              </div>

              <div className="home-carousel-bouton-container">
                <button className="home-btn-don "  >
                  <span className="span-icon-heart" >
                    <i className="fa-solid fa-heart icon-heart"></i>
                  </span> 
                  Faites parler votre Générosité
                </button>
              </div>

            </div>
              
          </div>

          <div className="col-md-6 text-center mx-0">
         
          {/*  <CarouselApp/>*/}
          <img data-aos="zoom-in" src={homeImage}  className="img-fluid mx-auto home-carousel-img"/>
          </div>  
          
        </div>
      </div>

      <Panel shaded className="home-container-styled mx-md-3 bg-white">

        <div className="container-fluid home-card-cible-container mt-0 pt-3">
          <div className="mx-auto text-center">
            
            <img  src={homeCardTitleImage}  className="img-fluid mx-auto home-card-title-img"/>
         
          </div>
        
          <h2  className="text-center home-card-cible-title text-dark-2" >
          EXPRIMEZ VOTRE GÉNÉROSITÉ
          </h2>
          <p data-aos="zoom-in" className="text-center text-dark" >
            Contribuer à l'amelioration des conditions de vie des personnes vulnerables
          </p>
          <div className="home-card-list-cible m-auto text-center pt-5">

          {imagesCible.map((item,index) =>  <CardsCibles key={index} {...item} /> )}
      
          
          </div>
        </div>

      </Panel>
        <div className="home-actions-dons pt-5 px-5 bg-dark-1">
          <div className="">

        
            <h2 data-aos="zoom-in" className="text-white text-center pb-5" >
              LES FRUITS DE VOTRE GENEROSITE
            </h2>
            <CarouselActions/>
          </div>

        

        </div>
        <div className="home-contactus py-5 text-center ">
            <div className="home-contactus-container">
              <div className="">
                <p data-aos="zoom-in">
                Vous avez des questions ou preocupations ?
                </p>
              </div>
              <div className="">
                <button data-aos="zoom-in" className="home-contactus-btn">
                  Nous Contacter
                </button>
              </div>

            </div>
          </div>
    </div>
  );
}

export default Home;
