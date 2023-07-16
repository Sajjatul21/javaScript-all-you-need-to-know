/* 
    see this video again 
*/

/* 
    1. Call Stack
    2. Web API (setTimeout,http, https,local storage, dom etc যেগুরো javascrpt এর না বাট আমরা সেগুলোর  pasalities ভোগ
         করছি এগুলা আমাদের browser/ v8 engine দিচ্ছে সেগুলাই web api ) 
    3. callBack/ Task Queue -> এখানে আামদের call back funciton গুলা  queue আকারে থাকে যে কোন callback পর কোন callback
        ফাংশন কল হবে।

     4. Event loop -> event loop  callBack function এ কোনটা excecute করা দরকার সেটাকে call stack পাঠাই দেয় ।
*/