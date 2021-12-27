import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';



describe('Pruebas en el componente <AddCategory />', () => {

    const setCategory = jest.fn(); 
    let wrapper = shallow(<AddCategory setCategories={ setCategory } />);
    

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategory } />);
    })

    test('debe cargar correctamente el componente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const inputValue = 'hola mundo';

        input.simulate('change', { target: { inputValue } });
        
    });

    test('NO debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategory).not.toHaveBeenCalled();

    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'hola mundo';

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategory).toHaveBeenCalledTimes(1);

        expect(setCategory).toHaveBeenCalledWith(expect.any(Function));

        expect( wrapper.find('input').prop('value') ).toBe('');

    })
    
    
    
    
    
})
