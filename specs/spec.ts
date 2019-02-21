const {Test, Suite, BeforeEach, AfterEach} = require('toundra');
const {Browser, have, be} = require('selenidejs');
const {Builder, Capabilities} = require('selenium-webdriver');

BeforeEach(async () => {
  Browser.configuration.webdriver = await new Builder().withCapabilities(Capabilities.chrome()).build();
  Browser.configuration.timeout = 2000;
});
AfterEach(async () => {
  await Browser.quit();
});

Test('test', async () => {
  await Browser.open('http://the-internet.herokuapp.com/');
  await Browser.element('h2').should(have.text('hello world'))
});


