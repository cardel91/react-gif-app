import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    });
   
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        
        
        const input = wrapper.find('input');
        const value = 'Ola k ase';
        // definir el evento de la simulacion
        input.simulate('change', {target: {value}});

        // console.log(wrapper.find('p').html());
        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('no debe hacer post con submit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe llamar setCategories y limpiar input', () => {
        
        // simular inputchange
        const input = wrapper.find('input');
        const value = 'Ola k ase';
        // // definir el evento de la simulacion
        input.simulate('change', {target: {value}});
        
        // simular submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        // set categories debe haberse llamado
        // expect(setCategories).toHaveBeenCalled();
        /**
         * Indica que se espera que dentro de la prop se llame una función
         */
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); 

        // inputvalue debe ser ''
        const newInput = wrapper.find('input').prop('value').trim();
        expect(newInput).toBe('');   

    });
    
    
    
    
});
