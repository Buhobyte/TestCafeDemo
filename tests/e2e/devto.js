import { Selector } from 'testcafe';
import DevAboutPage from './page/devaboutpage';
import DevDiscussTagPage from './page/devdiscusstagpage';
import DevHomePage from './page/DevHomePage';

// testcafe chrome tests/e2e/devto.js

const devaboutpage = new DevAboutPage();
const devhomepage = new DevHomePage();
const devdiscusstagpage = new DevDiscussTagPage();

fixture('DEV Tests')
    .page('http://dev.to/');

test("Check founder's names", async (t) => {

    await t
        .setTestSpeed(1)
        .click(devhomepage.aboutLink)
        .expect(devaboutpage.firstFounder.exists).ok()
        .expect(devaboutpage.secondFounder.exists).ok()
        .expect(devaboutpage.thirdFounder.exists).ok()

});

test("Search for posts about testing", async (t) => {
    const discussTitle = Selector('h1').withText('Discussion');

    await t
        .click(devhomepage.discussTag)
        .expect(devdiscusstagpage.discussTitle.exists).ok();
});