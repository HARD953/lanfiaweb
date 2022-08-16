import React, { useState } from 'react';
import { Steps,Notification,Button,Panel } from 'rsuite';


import './CardsTypeConnexion.css'

export default function CardsTypeConnexion({img,iconCard,typeConnexion,informations,onNextStep}) {

  return (
    <>
    <Panel shaded className="card-type-connexion bg-white my-3" >
        <div className="card-type-connexion-header" >
            <h3 className="h3 text-center" >
                {typeConnexion}
            </h3>
        </div>
        <div className="card-type-connexion-img-container mx-auto text-center p-3">
            <img className="card-type-connexion-img img-fluid"  src={img} alt=""/>
        </div>
        <div className="card-type-connexion-text-container">
            <div >
                <h5 className="h5" >
                  <i className="fa-solid fa-circle-exclamation me-3" style={{color:'blue'}}></i>
                    Informations
                </h5>
                <div className="mx-auto">
                    <ul className="list-inline ms-md-5">  
                        {
                            informations.map((item, index)=>{
                            return (<li key={index}> 
                            
                            <i className={"fa-solid fa-"+ iconCard.icon +" me-3"} style={{color:iconCard.color}}></i>

                            {item}
                            </li>)
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
        <div className="card-type-connexion-btn-container pb-3">
            <button onClick={onNextStep} className="btn btn-primary float-end mb-3" >
                Continuer 
             
                <i className="fa-solid fa-arrow-right ms-3"></i>
            </button>
        </div>
        
    </Panel>
    </>
  );
}