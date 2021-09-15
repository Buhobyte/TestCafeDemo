import { Selector } from 'testcafe';

export default class DevAboutPage {

    constructor() {
        this.firstFounder = Selector('a').withText('Ben Halpern');
        this.secondFounder = Selector('a').withText('Jess Lee');
        this.thirdFounder = Selector('a').withText('Peter Frank');
    }

}