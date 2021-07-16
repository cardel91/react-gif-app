import React/*,{ useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);


    
    // enviar category como prop
    // alias: images para propiedad data
    const {data: images, loading} = useFetchGifs(category);
    // console.log(state);
    return (

        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">'Cargando...'</p>}
            <div className='card-grid'>
                {/* <ol> */}
                    {
                        images.map(img =>{
                        // desestructurar el objeto img
                        // images.map(({id, title, url}) =>{

                            return(
                                <GifGridItem key={img.id} 
                                // 
                                {...img}
                                />
                            );
                        })
                    }
                {/* </ol> */}
            </div>
        </>
    )
}
