import React from 'react'
import { GifGridItem }  from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe('Pruebas en GifGridItem', () => {

    const title = "Titulo";
    const url = "http://localhost.jpg"

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

   
    test('mostrar el componente', ()=> {
        expect(wrapper).toMatchSnapshot();
    });

    test('el titulo debe estar en un parrafo html', () => {
       
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });

    test('debe tener imagen igual a url y alt de los props', () => {
        
        const img = wrapper.find('img');

        expect(img.props().src).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('debe tener animate__fadeIn', () => {
       
        const div = wrapper.find('div');
        // console.log(div.props());
        // expect(div).toHaveClas
        // expect(div).toHaveClass('animate__fadeIn');
        const className = div.prop('className');
        expect(className.includes('animate__bounce')).toBe(true);
    });
    
    
    

});
