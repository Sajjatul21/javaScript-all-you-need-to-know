/*  
    কোন java script act like asynchronous কারন হলো javaScript is a single threaded language মানে হলো 
    javaScript  একট সময় একটা মাত্র task compete করে।
*/

/* 
    JavaScript uses two Data Structure To handle Variable and Function Call
        1. use Heap Data structure to manage Variable
        2.use  Stack data Structure to manage Function Call (কোন function কোন function  call হবে সেটা মেনেজ
            করাই হলো এই call stack এর কাজ।)
*/
/* 
    JavaScript (v8)engine একটা সুন্দর সিস্টেমের মাধ্যমে asynchronous programming টা ম্যানেজ করে । এই সিস্টেমের মধ্যে ৪ টা জিনিস থাকে।
    যথা-
         1.Call Stack   
         2.Web API
         3.Event Loop
         4.Callback Queue
*/