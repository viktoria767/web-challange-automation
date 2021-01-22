Feature('Click the button and assert "You clicked" is displayed');

 Scenario('test click me button with wait', ({ I }) => {
     I.amOnPage('https://xuanzhaopeng.github.io/delayed-click.html');
     // I.waitForVisible('#menu-hoofdmenu .login-btn .login', 5);
     I.wait(20);
     I.click('#action');
     I.see('You clicked');
 });

Scenario('test click me button with For loop', async ({ I }) => {
    I.amOnPage('https://xuanzhaopeng.github.io/delayed-click.html');
    const interval = 3;//time between clicks 
    for (i = 0; i < 5; i++) {// i - amount of tries 
        I.click('#action');
        var result = await I.grabTextFrom('#assertion');//grabtext-get text from this element;
        console.log(result);
        if (result === 'You clicked') {
            break;
        }
        I.wait(interval);
    }
    I.see('You clicked');
});


