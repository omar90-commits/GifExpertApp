import React from 'react';
import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe('Pruebas en <AddCategory />', () => {
	
	const setCategories = jest.fn();
	let wrapper;

	beforeEach( () => {

		jest.clearAllMocks();
		wrapper = shallow( <AddCategory setCategories={setCategories} /> );
	} );

	test('Debe de mostrarse correctamente', () => {	

		expect( wrapper ).toMatchSnapshot();
	});

	test('Debe de cambiar la caja de texto', () => {
		
		const input = wrapper.find('input');
		const value = 'hola mundo';

		input.simulate('change', { target: { value } });
		const p = wrapper.find('p');

		expect( p.text().trim() ).toBe( value );
	});

	test('No debe de postear la informacion onSubmit', () => {
		
		wrapper.find('form').simulate('submit', { preventDefault(){} });

		expect( setCategories ).not.toHaveBeenCalled();
	});

	test('Debe de llamar el setCategories y limpiar la caja del texto', () => {
		
		const input = wrapper.find('input');
		const value = 'tarea a realizar';

		// 1. Simular el inputChange
		input.simulate('change', { target: { value } });

		// 2. Simular el submit
		wrapper.find('form').simulate('submit', { preventDefault(){} });

		// 3. setCategories se debe de haber llamado
		expect( setCategories ).toHaveBeenCalled();
		expect( setCategories ).toHaveBeenCalledTimes(1);
		expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

		// 4. El valor del input debe de estar ''
		expect( input.prop('value') ).toBe( '' );
	});
});