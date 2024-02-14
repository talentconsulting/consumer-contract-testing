'use strict';

const apickli = require('@talentconsulting/engineering.apickli');
const {defineSupportCode} = require('@cucumber/cucumber');

const host = process.env.SERVICE_UNDER_TEST_HOSTNAME || "localhost:9000";
const protocol = process.env.SERVICE_UNDER_TEST_PROTOCOL || "http";

defineSupportCode(function({Before}) {
    Before(function() {
        console.log(`Testing host is ${protocol}://${host}`);

        this.apickli = new apickli.Apickli(protocol, host);
    });
});