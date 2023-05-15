import Card from './Card.js'
import React, { useState, useEffect } from 'react';


export default function Body() {


    const [Pokemons, setPokemon] = useState([]);



  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/10')
      .then(response => response.json())
      .then(data => setPokemon(data));
     
  }, []);



  


  return (
<>

    
       

    <div   className="container  ">
        
         <div class="row my-3 mt-5 " >
           {Pokemons.map((poke,index) => (poke.q=1,
         

        <div   className="col-md-3 mb-3 mx-auto "key={index} >
          <Card  id= {index} Name ={poke.name} img={poke.image}  stats={poke.stats} Quantiti={poke.q} /> 
          
          </div> 
        ))}   
             
             </div>



   
    </div>

    <div   className="col-md-3 mb-3 mx-auto" >
    <div className="card-body Larger shadow
">
    <button type="button" class="btn  btn-lg left ">Précédent</button>
    <button type="button" class="btn  btn-lg  ">Suivant</button>
    </div>
 

    
   
    </div>
    </>
  );
}