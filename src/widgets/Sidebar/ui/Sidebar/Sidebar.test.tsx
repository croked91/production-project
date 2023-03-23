import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/config/tests/ComponentRender/ComponentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Simple Button Test', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Toogle sidebar test', () => {
    ComponentRender(<Sidebar />);
    const toogleBtn = screen.getByTestId('sidebar-toogle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
