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
    }) // promise의 성공 여부와 상관없이 호출되는 finally 함수
    .finally(() => {
        console.log('finally');
    });
    
//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000)
});

fetchNumber
    .then(num => num * 2) // 2
    .then(num => num * 3) // 6
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1)
            }, 1000)
        });
    })
    .then(num => console.log(num)); // 5 