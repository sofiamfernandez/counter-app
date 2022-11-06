import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import "../setupTest";

// import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    // test('debe retornar el mensaje Hola soy Goku', () => {
    //     const saludo ='Hola, soy Goku';
    //     const wrapper = render( <PrimeraApp saludo = {saludo}/>);

    //     expect( getByText(saludo)).toBeInTheDocument();
    // })88
    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo ='Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Goku';
        const subtitulo ='Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo= {saludo}
                subtitulo={subtitulo}
            />
        );
        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe(subtitulo);
    })
    
       
})
