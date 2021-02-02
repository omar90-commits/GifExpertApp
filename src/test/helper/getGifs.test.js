import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con la funcion getGifs Fetch', () => {
	
	test('Debe de traer 10 elementos', async (done) => {
		
		const gifs = await getGifs('One Punch');

		console.log(gifs.length)
		expect( gifs.length ).toBe( 10 );
		done();
	});

	test('Debe de traer 10 elementos', async (done) => {
		
		const gifs = await getGifs('');

		expect( gifs.length ).toBe( 0 );
		done();
	});
});