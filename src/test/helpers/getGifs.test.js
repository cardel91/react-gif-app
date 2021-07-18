import { getGifs } from "../../helpers/GetGifs";

describe('Pruebas con getGifs fetch', () => {
   
    test('debe traer 10 elementos', async () => {
        
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);

    });

    test('ver que pasa si no se le pasa la categoria', async () => {
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    });


    
});
