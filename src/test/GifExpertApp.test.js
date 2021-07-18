import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';


describe('Pruebas <GifExpertApp/>', () => {
   
    test('debe coincidir con el snapshot', () => {
        
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    
    });

    test('debe mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];

        const wrapper = shallow(<GifExpertApp defaultCategories = {categories}/>)
        expect(wrapper).toMatchSnapshot();
        
        // cuenta cuantas categorias se envian en las props
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
    
    

});
