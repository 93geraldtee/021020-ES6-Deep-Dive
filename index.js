//  place = "outside"
// function hello(){
//     debugger
//     place = "inside"
//     if (true){
//          place = "in true"
        
//     }
//     console.log("hello from", place)
// }
// hello()
// console.log("hello from", place)




// const person = {
//     name:"Alex",
//     age: 21,
//     intro: function(){
//         console.log(`Hello my name is ${this.name}`)
//     },
//     introWithArrow: () => {
//         console.log(`Hello my name is ${this.name}`)
//     },
//     charles:{
//         name:"charles",
//         intro: function(){
//             console.log(`Hello my name is ${this.name}`)
//         }
//     }
// }

// this.name = "Global / Window"
// person.introWithArrow.call(person)
// this.num = 0

// // person.charles.intro.call(this)
// // const pedroHi = person.charles.intro.bind({name:"Pedro"})

// function sum(a,b,c){
//     console.log( this.num + a + b + c)
// }

// // sum.call({num:2}, 1,2,3)
// sum.apply({num:2}, [1,2,3])

// const sumBase3 = sum.bind({num:3})


// class Car {
//     constructor(brand){
//         debugger
//         this.brand = brand
//     }
// }

// new Car("Ford")

// const cardTemplate = `
//     <div>
//         <h2>${someValue}</h2>
//     </div>
// `

const person = {
    name:"Alex",
    age: 21,
    intro: function(){
        console.log(`Hello my name is ${this.name}`)
    },
    introWithArrow: () => {
        console.log(`Hello my name is ${this.name}`)
    },
    charles:{
        name:"charles",
        intro: function(){
            console.log(`Hello my name is ${this.name}`)
        }
    }
}

const colors = ["red","green","blue"]

// const {name,age, intro} = person
// const { name, charles: { otherName=name }} = person


const [red, ,blue] = colors

function intro({name, age}){
    console.log(`Hello my name is ${name}, and I'm ${age} yrs old`)
}

for (key in person){
    console.log(person[key])
}


