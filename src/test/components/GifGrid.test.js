import { GifGrid } from "../../components/GifGrid";
import { shallow } from 'enzyme';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';

// hace un mock del hook useFetchGifs
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas GifGrid', () => {
   

    const category = 'Ola k ase';
    
    test('debe hacer match con el snapshot', () => {
        // falsa implementacion
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/> )

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar items cuando se carga imagenes con useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Ola k ase',
                url: 'https://localhost.gif'
            },
            {
                id: '245',
                title: 'Ola k ase',
                url: 'https://localhost.gif'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/> )

        // expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    
    
});
