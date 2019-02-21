const {Test, Suite, BeforeEach} = require('toundra');
const {Browser, have, be} = require('selenidejs');
const {Builder, Capabilities} = require('selenium-webdriver');

BeforeEach(async () => {
  Browser.configuration.webdriver = await new Builder().withCapabilities(Capabilities.chrome()).build();
});
AfterEach(async () => {
  await Browser.quit();
});

Test('test', async () => {
  await Browser.open('http://the-internet.herokuapp.com/');
  await Browser.element('h2').should(have.text('hello world'))
});


