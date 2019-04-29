const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;
const linkedinPage = require('../support/pages/linkedin-page');

Given('I am open Linkedin\'s index page to login', async function() {
    await testController.navigateTo(linkedinPage.linkedin.url());
});

When('I am typing my mail test {string} on mail login input', async function(text) {
    var input = Selector(linkedinPage.linkedin.loginMail());
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

When('I am typing my pass test {string} on pass login input', async function(text) {
    var input = Selector(linkedinPage.linkedin.loginPassword());
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

When('I am click on Login button', async function() {
  var button = Selector(linkedinPage.linkedin.loginSubmit());
  await this.addScreenshotToReport();
  await testController.click(button);
});

When('I am click on my contact network {string}', async function(text) {
    var input = Selector(linkedinPage.linkedin.myNetwork());
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

When('I am click on my profile', async function() {
  var button = Selector(linkedinPage.linkedin.myProfile());
  await this.addScreenshotToReport();
  await testController.click(button);
});

When('I am click on my add section', async function() {
  var button = Selector(linkedinPage.linkedin.addSection());
  await this.addScreenshotToReport();
  await testController.click(button);
});

When('I am click on work experience', async function() {
  var button = Selector(linkedinPage.linkedin.workExperience());
  await this.addScreenshotToReport();
  await testController.click(button);
});
