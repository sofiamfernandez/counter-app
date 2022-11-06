import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de héroes', () => {
    test('debe de retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect(heroe).toEqual(heroeData);
    });

    test('debe de retornar un undefined si héroe no existe ', () => {

        const id= 10;
        const heroe = getHeroeById (id);

        expect( heroe ).toBe( undefined );
        
    });
    //debe retornar un arreglo con los héroes de dc

    test('debe retornar un arreglo con los héroes de dc', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner (owner);

        const heroeOwner = heroes.filter(hdc => hdc.owner === owner);

        expect( heroe ).toEqual(heroeOwner);
    });
    
    //toEqual al arreglo filtrado
    //debe de retornar un arreglo con los héroes de marvel
    //lenght = 2 // toBe - El length lo que me dice es que saque 2 de ese tipo de owner
    
    test('debe de retornar un array con los héroes de marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        expect(heroe.length).toBe(2);
        
    })
    
})
