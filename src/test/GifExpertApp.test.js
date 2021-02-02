import React from 'react';
import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en <GifExpertApp />', () => {
	
	let wrapper;

	beforeEach(() => {

		wrapper = shallow( <GifExpertApp /> );
	});

	test('Debe mostrarse correctamente', () => {
		
		expect( wrapper ).toMatchSnapshot();
	});

	test('Debe de mostrar una lista de categorias', () => {
		
		const categories = ['One Punch', 'Dragon Ball'];

		wrapper = shallow( <GifExpertApp defaultCategories={categories} />);
		expect( wrapper ).toMatchSnapshot();
		expect( wrapper.find('GifGrid').length ).toBe(categories.length);
	});
});