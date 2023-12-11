import { App } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<App />', () => {
  it('should redenr app', () => {
    renderTheme(<App />);
  });
});
