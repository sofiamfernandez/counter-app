import React from 'react';

import { shallow } from 'enzyme';
import "../setupTest";

// import {render} from '@testing-library/react';
import CounterApp from '../CounterApp';




describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />)

    });

    test('Debe mostrar <CounterApp /> correctamente y hacer snapshots', () => {
       
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe retornar el valor por defecto 100', () => {
        
       
        const wrapper = shallow(
            <CounterApp 
                value = {100}
            />
        );
        const contador = wrapper.find('h2').text();

        expect( contador ).toBe('100');
    })
    test('debe incrementar el boton +1', () => {
        //en este punto simulamos que el usuario hizo click en +1
        wrapper.find('button').at(0).simulate('click');

        const contador = wrapper.find('h2').text();

        expect( contador ).toBe('11');
        
    })
    test('debe incrementar el boton -1', () => {
        //en este punto simulamos que el usuario hizo click en +1

        wrapper.find('button').at(2).simulate('click');

        const contador = wrapper.find('h2').text();

        expect( contador ).toBe('9');
        
    });

    test('debe de colocar el valor por defecto con el btn reset', () => {
        const wrapper = shallow(<CounterApp value={ 105 }/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const contador = wrapper.find('h2').text().trim();
        expect( contador ).toBe('105');
        
    })
    
    
       
})

