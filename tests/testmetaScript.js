import { Selector } from "testcafe";

// testcafe chrome tests/testmetaScript.js --test-meta env=production

fixture.meta('version', '1')("First fixture").page("https://google.com")

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

test.meta('env', 'production')
    .page("https://devexpress.github.io/testcafe/example/")
    ('First Test', async t => {
        await t
            .typeText(developerName, 'TAU')
            .click(osOption)
            .click(submitButton);
    })

test
    .page("https://devexpress.github.io/testcafe/example/")
    ('Second Test without metadata', async t => {
        await t
            .typeText(developerName, 'TAU')
            .click(osOption)
            .click(submitButton);
    })

