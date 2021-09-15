import { Selector } from 'testcafe';

export default class DevHomePage {

    constructor() {
        this.aboutLink = Selector('#sidebar-wrapper-left > aside > nav.mb-6.mt-4 > ul > li:nth-child(10) > a').withText('About');
        this.discussTag = Selector('a').withText('#discuss');
    }

}