axios.get('https://jsonplaceholder.typicode.com/users')
.then(response => {
    console.log(response);
}, err => {
    console.log(err);
})