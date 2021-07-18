import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async() => {
        
        // el render se desestructura para obtener un objeto llamado result
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('One Punch'));
        // result contiene la estructura del hook
        const {data, loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('debe retornar un arreglo de imagenes y loading false', async () => {
        
        // 
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
                

    });
    
});
