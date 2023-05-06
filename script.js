window.promises = [];

const promises = [];

for (let i = 0; i < 5; i++) {
  promises.push(new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  }));
}

Promise.any(promises).then((result) => {
  document.getElementById("output").textContent = result;
});
