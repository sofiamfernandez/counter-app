import'@testing-library/jest-dom';
import { getUser,getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de rertonar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
     //Para comparar si dos objetos tienen las mismas propiedades no usamos tobe, usamos toequal
        const user = getUser();
        expect( user ).toEqual( userTest);
    })

    //getUsuarioActivo debe retornar un objeto
     test('getUsuarioActivo debe retornar un objeto', () => {
     
        const nombre = 'Juan';
        const user = getUsuarioActivo( nombre );

        expect( user ).toEqual({
            uid:'ABC567',
            username: nombre
        });
     })
     

})
