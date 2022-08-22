let a = 1
console.log(a)

let p = new Promise((resolve, reject) => {
    resolve(3)
})

p.then(valor => {
    console.log(valor)
})