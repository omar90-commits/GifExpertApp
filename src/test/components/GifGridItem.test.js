import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en el <GifGridItem />', () => {
	
	const title = 'Titulo de la App';
	const url = 'https://www.npmjs.com/package/enzyme-to-json';
	const wrapper = shallow( <GifGridItem title={title} url={url} /> );

	test('Debe de mostrar el componente correctamente', () => {
		
		expect( wrapper ).toMatchSnapshot();
	});

	test('Debe de tener un parrafo cone el titulo', () => {
		
		const p = wrapper.find('p');
		expect( p.text().trim() ).toBe( title );
	});

	test('Debe de tener la imagen igual al url y alt de los props', () => {
		
		const img = wrapper.find('img');

		expect( img.prop('src') ).toBe( url );
		expect( img.prop('alt') ).toBe( title );
	});

	test('Debe de tener la clase animate__fadeIn', () => {
		
		const div = wrapper.find('div');

		expect( div.hasClass('animate__fadeIn') ).toBe( true );
	});
});