import nightmare from 'nightmare';

describe('homepage', () => {
  it('welcome', async () => {
    let page = nightmare().goto('http://localhost:3000');
    let text = await page.evaluate(() => (document.body.textContent)).end();
    expect(text).toContain('Thinknetica');
  });
});
