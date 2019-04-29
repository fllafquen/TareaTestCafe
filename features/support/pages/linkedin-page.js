const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.linkedin = {
    url: function() {
        return 'https://www.linkedin.com/';
    },
    regFistName: function() {
        return Selector('.reg-firstname');
    },
    regLastName: function() {
        return Selector('.reg-lastname');
    },
    regEmail: function() {
        return Selector('.reg-email');
    },
    regPassword: function() {
        return Selector('.reg-password');
    },
    btnRegistration: function() {
        return Selector('#registration-submit');
    },
    loginMail: function() {
        return Selector('.login-email');
    },
    loginPassword: function() {
        return Selector('.login-password');
    },
    loginSubmit: function() {
        return Selector('#login-submit');
    },
    myNetwork: function() {
        return Selector('#ember33 > input[type="text"]').with({boundTestRun: testController});
    },
    myProfile: function() {
        return Selector('.ember130 > span');
    },
    addSection: function() {
        return Selector('.ember274');
    },
    workExperience: function() {
        return Selector('#ember361 > li-icon > svg');
    },
    cargo: function() {
        return Selector('.position-title-typeahead');
    },
    empresa: function() {
        return Selector('.position-location-typeahead');
    },



};
