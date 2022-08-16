import './MyActions.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import CardMesDonsEspece from '../../components/cardMesDons/CardMesDonsEspece';
import CardMesDonsNature from '../../components/cardMesDons/CardMesDonsNature';



const infoDons = [
  {Numero:'123456790',type:1,Montant:'250 000',Date:'12 Janvier 2021',Statut:'Distribué'},
  {Numero:'123456791',type:1,Montant:'200 000',Date:'17 Janvier 2021',Statut:'Distribué'},
  {Numero:'123456792',type:1,Montant:'50 000',Date:'18 Janvier 2021',Statut:'Distribué'},
  {Numero:'123456794',type:1,Montant:'350 000',Date:'20 Janvier 2021',Statut:'En attente'},
  {Numero:'123456795',type:1,Montant:'210 000',Date:'21 Janvier 2021',Statut:'En attente'},
  {Numero:'123456796',type:1,Montant:'300 000',Date:'30 Janvier 2021',Statut:'En attente'},
  {Numero:'123456797',type:2,libelle:'Don Nature 1',Montant:'250 000',Date:'12 Janvier 2021',Statut:'Distribué'},
  {Numero:'123456798',type:2,libelle:'Don Nature 2',Montant:'200 000',Date:'17 Janvier 2021',Statut:'Distribué'},
  {Numero:'123456799',type:2,libelle:'Don Nature 3',Montant:'50 000',Date:'18 Janvier 2021',Statut:'Distribué'},
  {Numero:'1234567920',type:2,libelle:'Don Nature 4',Montant:'350 000',Date:'20 Janvier 2021',Statut:'Distribué'},
  {Numero:'1234567921',type:2,libelle:'Don Nature 5',Montant:'210 000',Date:'21 Janvier 2021',Statut:'Distribué'},
  {Numero:'1234567922',type:2,libelle:'Don Nature 6',Montant:'300 000',Date:'30 Janvier 2021',Statut:'En attente'},
 ]

 

function MyActions() {

  return (
    
    <div className="my-actions-container">

       <div className='container '>

      <h3>Mes Actions</h3><br></br>

      <div className="card"><br></br>
                
                <h5> <p className='m-2'>  Mes Dons </p></h5>
               
                <TabView className="tabview-header-icon">

                    <TabPanel header="_En_Espèces" leftIcon="pi pi-wallet ">
                       
                      <div className='d-flex justify-content-around flex-wrap ' >

                          {infoDons.map((item,index) =>  <CardMesDonsEspece  key={index} {...item} /> )}

                      </div>
            
                                            
                    </TabPanel>

                    <TabPanel header="_En_Nature" leftIcon="pi pi-th-large">
                      
                      <div className='d-flex justify-content-around flex-wrap ' >

                        {infoDons.map((item,index) =>  <CardMesDonsNature key={index} {...item} /> )}

                      </div>
                    </TabPanel>
                    
                </TabView>
            </div>
      
      </div>
     
    </div>
  );
}

export default MyActions;
