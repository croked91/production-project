import { classNames } from '.';

describe('classNames', () => {
	test('Only with first param', () => {
		expect(classNames('someClass')).toBe('someClass');
	});

	test('With additional classes', () => {
		const expecting = 'someClass class1 class2 class3';
		expect(classNames('someClass', {}, ['class1', 'class2', 'class3']))
			.toBe(expecting);
	});

	test('With additional modes', () => {
		const expecting = 'someClass class1 class2 class3 hovered';
		expect(classNames(
			'someClass',
			{ hovered: true, active: false },
			['class1', 'class2', 'class3']
		))
			.toBe(expecting);
	});

	test('With mode undefined', () => {
		const expecting = 'someClass class1 class2 class3 hovered';
		expect(classNames(
			'someClass',
			{ hovered: true, active: undefined },
			['class1', 'class2', 'class3']
		))
			.toBe(expecting);
	});
});
