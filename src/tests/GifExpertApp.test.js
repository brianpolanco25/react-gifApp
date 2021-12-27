import React  from 'react'
import { shallow } from 'enzyme'
import { GifExpertApp } from '../GifExpertApp'
import { GifGrid } from '../components/GifGrid'


describe('Pruebas en <GifExpertApp />', () => {

    test('debe cargar correctamente el componente', () => {
        
        const wrapper = shallow( <GifExpertApp />)
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de mostrar una lista de categorias', () => {

        const categories = ['category1', 'category2'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/>);
        expect ( wrapper ).toMatchSnapshot();
        expect ( wrapper.find( GifGrid ).length).toBe(categories.length);

        
    })
    
    
    
})
