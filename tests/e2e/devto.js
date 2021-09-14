import { Selector } from 'testcafe';

// testcafe chrome tests/e2e/DeviceMotionEvent.js

fixture('DEV Tests')
    .page('http://dev.to/');

test("Check founder's names", async (t) => {
    const aboutLink = Selector('#sidebar-wrapper-left > aside > nav.mb-6.mt-4 > ul > li:nth-child(10) > a')
    const firstFounder = Selector('a').withText('Ben Halpern');
    const secondFounder = Selector('a').withText('Jess Lee');
    const thirdFounder = Selector('a').withText('Peter Frank');

    await t
        .setTestSpeed(0.3)
        .click(aboutLink)
        .expect(firstFounder.exists).ok()
        .expect(secondFounder.exists).ok()
        .expect(thirdFounder.exists).ok()

});