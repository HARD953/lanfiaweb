import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';


import './FirstStepDonation.css'
import CardsTypeConnexion from './CardsTypeConnexion';

import cryImage from '../../../assets/images/makeDonation/cry.jpg';
import happyImage from '../../../assets/images/makeDonation/happy.jpg';


const cardsTypesConnexionsData =[
  {
    img : cryImage,
    iconCard: {
      icon:'triangle-exclamation',
      color: 'orange'
    },
    typeConnexion :'Sans Authentification',
    informations:[
      "Suivre votre don",
      "Etre informer de l'etat du don",
      "Lorem ipsum dolor sit amet",
      "dolor Lorem ipsum  sit amet",
      "ipsum Lorem dolor sit amet",

    ]


  },
  {
    img : happyImage,
    iconCard: {
      icon:'circle-check',
      color: 'green'
    },
    typeConnexion :'Avec Authentification',
    informations:[
      "Suivre votre don",
      "Etre informer de l'etat du don",
      "Lorem ipsum dolor sit amet",
      "dolor Lorem ipsum  sit amet",
      "ipsum Lorem dolor sit amet",

    ]

  }
]

export default function FirstStepDonation({onNextStep, onPreviousStep}) {

  return (
    <>
    <div className="first-step-donation-container">
    {
      cardsTypesConnexionsData.map((item,index)=> <CardsTypeConnexion {...item} key={index} onNextStep={onNextStep} />) 
    }


    </div>


    
    </>
  );
}