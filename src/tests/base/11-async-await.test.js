import { getImagen } from "../../base/11-async-await";


describe('Pruebas con async await y fetch', () => {
    test('Debe returnar la url de la img', async () => {
       const url = await getImagen();
       expect( typeof url ).toBe('string');
    })
    
    
})
