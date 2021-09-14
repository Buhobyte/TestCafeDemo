import { Selector } from 'testcafe';

// testcafe chrome tests/e2e/modelPageTestBasic.js

fixture`My fixture`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Text typing basics', async t => {
    await t
        .setTestSpeed(0.1)
        .typeText('#developer-name', 'Peter')
        .typeText('#developer-name', 'Paker', { replace: true })
        .typeText('#developer-name', 'r', { caretPos: 2 })
        .expect((Selector('#developer-name')).value).eql('Parker');
});

test('Click check boxes and then verify their state', async t => {
    await t
        .click('input[id=remote-testing]')
        .expect(Selector('input[id=remote-testing]').checked).ok()
        .click('input[id=reusing-js-code]')
        .expect(Selector('input[id=reusing-js-code]').checked).ok()
        .click('input[id=continuous-integration-embedding]')
        .expect(Selector('input[id=continuous-integration-embedding]').checked).ok();
});