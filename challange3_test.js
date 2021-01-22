Feature(' Check dynamic element');

 Scenario('test that element is shown in certain amount of time',async ({ I }) => {
     I.amOnPage('https://xuanzhaopeng.github.io/dynamic-element.html');
     I.waitForElement('#assertion',20);
     const interval=3;
     for(i=1;i<=4;i++){
         var result = await I.grabTextFrom('#assertion');
        if(result ==='check me'){
            break;           
        } 
    I.see('check me','#assertion');
     }
    });


    