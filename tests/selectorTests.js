import { Selector } from 'testcafe';

fixture`Example page`
    .page`http://devexpress.github.io/testcafe/example/`;

test('My test', async t => {
    const osCount = Selector('.column.col-2 label').count;
    const submitButtonExists = Selector('#submit-button').exists;

    await t
        .setTestSpeed(0.1)
        .expect(osCount).eql(3)
        .expect(submitButtonExists).ok();
});

test('DOM Node State', async t => {
    const sliderHandle = Selector('#slider').child('span');
    const sliderHandleSnapshot = await sliderHandle();

    console.log(sliderHandleSnapshot.hasClass('ui-slider-handle'));    // => true
    console.log(sliderHandleSnapshot.childElementCount);               // => 0
});