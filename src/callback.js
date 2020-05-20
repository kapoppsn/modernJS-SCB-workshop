function cook() {
  setTimeout(() => {
    console.log("Finish");
  }, 1000);
}

function serve() {
  console.log("Serve");
}

// cook();
// serve();

// function cookCallback(callback) {
//   setTimeout(() => {
//     console.log("Finish");
//     callback();
//   }, 1000);
// }
// cookCallback(serve);

const cookPromise = () => {
  return new Promise(function(resolve, reject) {
    let finish = true;
    if (finish) {
      setTimeout(() => {
        console.log("Finish");
        resolve(serve);
      }, 1000);
    } else {
      reject("Can't serve");
    }
  });
};
const cookPromise1 = () => {
  return new Promise(function(resolve, reject) {
    let finish = false;
    if (finish) {
      setTimeout(() => {
        console.log("Finish");
        resolve(serve);
      }, 1000);
    } else {
      setTimeout(() => {
        reject("Can't serve");
      }, 1500);
    }
  });
};

cookPromise()
  .then(function(result) {
    result();
  })
  .catch(function(err) {
    console.log(err);
  });

async function cookAsync() {
  try {
    const result = await cookPromise1();
    result();
  } catch (err) {
    console.log(err);
  }
}

cookAsync();
