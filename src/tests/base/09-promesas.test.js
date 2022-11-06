import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes';



describe('Pruebas con promesaas', () => {
    test('getHeroeByIdAsync debe de retornar un héroe async', (done) => {
        const id = 1;

        getHeroeByIdAsync( id )
          .then( heroe => {
              expect(heroe).toBe(heroes[0]);
              done();
          });
    });

    //En este caso lo que hacemos es en el caso de tener un error, que pase lo que queremos que pase. Done es de jest
    test('debe de obtener un error el héroe por id no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync( id )
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
    
    
})
