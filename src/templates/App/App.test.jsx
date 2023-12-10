import { screen } from '@testing-library/react';
import { App } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

it('should test', () => {
  renderTheme(<App>Hello World</App>);
  const headingContainer = screen.getByRole('heading', { name: 'Hello World' });
  expect(headingContainer).toHaveStyle({
    // eslint-disable-next-line no-undef
    background: theme.colors.blue,
  });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background-color', '#023059');
});
