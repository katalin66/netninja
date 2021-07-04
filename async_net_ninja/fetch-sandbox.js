const getTodos = async () => { //async returns a Promise
  const response = await fetch('todos/luigi.json');
  if (response.status !== 200) {
    throw new Error('cannot fetch the data')
  }
  const data = await response.json();
  return data
}
console.log(1);
console.log(2);

getTodos()
  .then(data => console.log('resolved: ', data))
  .catch(err => console.log('rejected', err.message));

console.log(3);
console.log(4)
// fetch('todos/luigi.json').then((response) => {
//   console.log('resolved ', response)
//   return response.json()  //that returned a promise
// }).then((data) => {
//   console.log(data)
// }).catch((err) => {
//   console.log('rejected ', err)
// })