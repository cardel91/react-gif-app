import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{

    // const categories = [
    //     'One Punch',
    //     'Samurai X',
    //     'Dragon Ball'
    // ];

    const [categories, setCategories] = useState([
        'One Punch',
        // 'Samurai X',
        // 'Dragon Ball'
    ]);

    // const handleAdd = () => {

    //     // categories.push('HunterXHunter');

    //     // soluciones para agregar elementos a un arreglo
    //     // 1. agregar un nuevo elemento con operador spread
    //     // setCategories(['HunterXHunter', ...categories]);

    //     // 2. hacer lo mismo dentro del callback 
    //     setCategories(categories=>
    //         [...categories, 'HunterXHunter']
    //     );

    // };



    return(
        <>
            <h2>GifExpertApp</h2>

            {/* pasar referencia de setcategories como prop al componente */}
            <AddCategory setCategories={setCategories}/>
            <hr/>


            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
            {
                // categories.map((element, i) =>{
                //     return(

                //         <GifGrid category={element}/>
                //     );
                // })

                // simplificado
                categories.map((element, id) =>(<GifGrid key={element} category={element}/>))
            }
            </ol>
        </>
    );
}

export default GifExpertApp;