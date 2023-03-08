import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Simple Button Test', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Toogle sidebar test', () => {
    componentRender(<Sidebar />);
    const toogleBtn = screen.getByTestId('sidebar-toogle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
