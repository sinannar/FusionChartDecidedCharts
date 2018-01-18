import { FusionChartDecidedChartsPage } from './app.po';

describe('fusion-chart-decided-charts App', function() {
  let page: FusionChartDecidedChartsPage;

  beforeEach(() => {
    page = new FusionChartDecidedChartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
