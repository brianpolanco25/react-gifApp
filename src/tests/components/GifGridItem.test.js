
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el componente <GifGridItem />', () => {

    const title = 'Is a title';
    const url = 'https://localhost.jpg';

    test('Debe cargar correctamente el componente', () => {
        
        const wrapper = shallow(<GifGridItem title = { title } url={ url } />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
