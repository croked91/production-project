import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/helpers/tests/renderWithTranslations';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('Simple Button Test', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('Toogle sidebar test', () => {
		renderWithTranslation(<Sidebar />);
		const toogleBtn = screen.getByTestId('sidebar-toogle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toogleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
