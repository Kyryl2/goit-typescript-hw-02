function getPromise(): Promise<Array<string | number>> {
  const promise: Promise<Array<string | number>> = new Promise((resolve) => {
    resolve(["Text", 50]);
  });
  return promise;
}

getPromise().then((data) => {
  console.log(data);
});

export {};
