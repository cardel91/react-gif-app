import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs";


// 
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // // recibe una funcion y una lista de dependencias
    // // si la lista es vacia useEffect solo se lanza una vez
    // // similar a componentDidMount() de las clases
    // useEffect(()=>{
    //     // getGifs(category).then(imgs=>setImages(imgs));

    //     // se puede hacer referencia al metodo sin parentesis
    //     // si solo recibe el parametro que devuelve el callback
    //     getGifs(category).then(setImages);
    // /**
    //  * Para este error
    //  *   Line 18:8:  React Hook useEffect has a missing dependency: 'category'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
    //  * se debe agregar la categoria, ya que si la categoria cambia
    //  * deberá ejecutarse nuevamente
    //  */
    // }, [category]);

    // useEffect no puede ser async
    useEffect(()=>{
        getGifs(category).then(imgs => {
            // setTimeout(() => {
                console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                });
            // }, 2300);
        });
       
    }, [category]);

    return state;
}