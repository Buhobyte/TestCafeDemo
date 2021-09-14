fixture("Navigate Example")
    .page("https://devexpress.github.io/testcafe/example/")

test('First Test', async t => {
    await t
        .navigateTo("https://google.com")
})
