const Promise = require('promise')

function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Bijin K')
    }, 3000)
  })
}
function getMobileNo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('9876543210')
    }, 2000)
  })
}


// Promise.all([getName(), getMobileNo()]).then((res) => {
//   console.log(res);
// })


async function getUser() {
  // getName().then(name => {
  //   console.log(name);
  // })
  
  let name = await getName()
  console.log(name);
  let mobileNo = await getMobileNo()
  console.log(mobileNo);
}
getUser()