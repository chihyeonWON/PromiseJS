'use strict';

// Promise is a Javascript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000)
});

// 2. Consumers: then, catch, finally 
promise
    .then((value) => {
         console.log(value); // value -> ellie
    }) // then이 되고 promise가 다시 호출 된다음 catch가 실행되는 체인
    .catch(error => {
        console.log(error); 
    })