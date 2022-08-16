import React from 'react'
import './compte.css'
import ProfilCard from '../../components/ProfilCard/ProfilCard';
import CardInfoUserActivite from '../../components/cardInfoUserActivite/CardInfoUserActivite';

const styles = {
  fontFamily: "sans-serif",
 
};

const Compte = () => {

  

  return (

    <div>


    <div className='container moncompte'>

      <div>
        <ProfilCard />
      </div>
      

      <div >
        <CardInfoUserActivite />
      </div>

    </div>

   

        
      
     
    </div>
  )
}

export default Compte
