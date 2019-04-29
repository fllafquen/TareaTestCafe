const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;
const linkedinPage = require('../support/pages/linkedin-page');

Given('I am open Linkedin\'s index page to create user', async function() {
    await testController.navigateTo(linkedinPage.linkedin.url());
});

When('I am typing my Name test {string} on Name input', async function(text) {
    var input = Selector(linkedinPage.linkedin.regFistName());
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

When('I am typing my lastName test {string} on lastName input', async function(text) {
    var input = Selector(linkedinPage.linkedin.regLastName());
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

When('I am typing my mail test {string} on mail reg input', async function(text) {
    var input = Selector(linkedinPage.linkedin.regEmail());
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

When('I am typing my pass test {string} on pass reg input', async function(text) {
    var input = Selector(linkedinPage.linkedin.regPassword());
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

Then('I am click on resgistration button', async function() {
  var button = Selector(linkedinPage.linkedin.btnRegistration());
  await this.addScreenshotToReport();
  await testController.click(button);
});
