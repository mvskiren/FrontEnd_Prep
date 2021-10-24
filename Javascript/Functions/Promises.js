
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello');
  }, 3000);
});
myPromise.then(() => console.log('done')).catch((e)=> console.log(e+"hi"));
