Feature(' Check element is visible after page content loaded');

 Scenario('test that element is shown', ({ I }) => {
     I.amOnPage('https://xuanzhaopeng.github.io/delayed-page-load.html');
     I.see('Me','#assertion');
 });




