// testcafe chrome tests/hooksTest.js

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/")
    .before(async ctx => {
        ctx.someProp = 123;
    })
    .after(async ctx => {
        console.log(ctx.someProp); // 654321
        console.log(ctx.newProp); // 'abc'
    });

test("First Test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
    console.log(t.fixtureCtx.someProp); // > 123
});

test("Second Test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
    t.fixtureCtx.newProp = 'abc';
    t.fixtureCtx.someProp = 654321;

});

test("Third Test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
    console.log(t.fixtureCtx.newProp);
    console.log(t.fixtureCtx.someProp); ///654321
});

/*
 Running tests in:
 - Chrome 93.0.4577.63 / Windows 10

 First Fixture
123
 √ First Test
abc
 √ Second Test
*/