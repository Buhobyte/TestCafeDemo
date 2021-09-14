import { Selector } from "testcafe";

fixture("First fixture")
    .page("https://google.com")

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");


test.page("https://devexpress.github.io/testcafe/example/")
    ('First Test', async t => {
        await t
            .typeText(developerName, 'TAU')
            .click(osOption)
            .click(submitButton);
    })
