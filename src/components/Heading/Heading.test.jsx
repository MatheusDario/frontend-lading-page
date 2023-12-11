/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.blue,
      'font-size': theme.font.sizes.huge,
      'text-transform': 'uppercase',
    });
  });

  it('should render white color', () => {
    renderTheme(<Heading $colordark={false}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render small heading size', () => {
    renderTheme(<Heading size="small">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.small,
    });
  });

  it('should render medium heading size', () => {
    renderTheme(<Heading size="medium">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render big heading size', () => {
    renderTheme(<Heading size="big">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });

  it('should render huge heading size', () => {
    renderTheme(<Heading size="huge">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.huge,
    });
  });
  /*
  it('should correct font-size when using mobile', () => {
    const { debug } = renderTheme(
      <Heading as="h2" size="huge">
        Texto
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'Texto' });
    debug();

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.huge,
      {
        media: theme.breakpoints.mobile,
      },
    );
  });
  */
  it('should render uppercase letters', () => {
    renderTheme(<Heading $uppercase>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct elemente', () => {
    const { container } = renderTheme(<Heading as="h4">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    const h6 = container.querySelector('h4');

    expect(h6.tagName.toLowerCase()).toBe('h4');
  });
});