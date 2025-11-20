

// let num = 5 // Number

// let str = 'Давид' // String

// let isStudent = true // Boolean





// Задание №1


// let hi = ('Скрипт запустился')

// console.log(hi)





// Задание №2


// const obj = {
//     name: 'Diana',
//     age: 17,
//     city: 'Moscow'
// }

// if ( obj.age >= 18 ) {
//   console.log( 'совершеннолетний.' )
// } 

// else {
//     console.log( 'не совершеннолетний.' )
// }




// Задание №3


// function summa(a,b) {
//   console.log (a+b);
// }

// summa(10, 5)

// summa(69,38)

// summa(73,298)





// Задание №4


// let userDataname = prompt("Введите имя: ") 
// let isAdult = confirm("Вам есть 18?") 
// let userDatacity = prompt('Из какого вы города?') 


// const person = {
//   name: userDataname,
//   age: isAdult,
//   city: userDatacity
// }

// console.log(person); 




// function greeting(obj) {

  
//   if (obj.age == true) {
//     // console.log("Здаствуйте, " + obj.name + ", тебе есть 18, и ты из города "  + obj.city);
//       alert("Здаствуйте, " + obj.name + ", тебе есть 18, и ты из города "  + obj.city)
//   } else {
//       // console.log("Здаствуйте, " + obj.name + ", тебе нет 18, и ты из города "  + obj.city);
//       alert("Здаствуйте, " + obj.name + ", тебе нет 18, и ты из города "  + obj.city)
//   }

//   console.log(obj)
// }



// greeting(person)







// Массивы

//                 0  1  2  3  4
// const massiv = [1, 2, 3, 4, 5]

// console.log(massiv[3])




// // Циклы

// //                    i = i +1
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 4; i++) {
//   const element = array[i];
// }



// let text = "Привет, Паша, как дела?"

// let textMassiv = text.split(" ")

// console.log(textMassiv.splice(1, 3))
// console.log(textMassiv);

// filter



// let num = [1, 2, 5, 1, 3, 5, 2, 5, 2, 5, 2, 5, 2, 8, 7, 0, 6, 3, 3, 5]



// const oddnum = num.filter(function(n) {
//   return n !== 5
// })

// const addnum = num.filter(function(k) {

//    return k === 5
  
// })


// let sumNum = addnum.length;


// console.log(num)
// console.log(oddnum)
// console.log("Всего найдено пятерок: " + sumNum)


// let people = [
//   {
//     name: "Iren",
//     age: 17,
//     isStudent: true
//   },
//   {
//     name: "Dasha",
//     age: 19,
//     isStudent: false
//   },
//   {
//     name: "Andrey",
//     age: 18,
//     isStudent: true
//   },
//   {
//     name: "Kira",
//     age: 15,
//     isStudent: false
//   },
//   {
//     name: "Igor",
//     age: 22,
//     isStudent: false
//   },
// ]


// const st = people
// .filter((s) => {
//     return s.isStudent == false
// })
// .map((s) => {
//   return s.age
// })



// console.log(st)


// [2, 3, 4]
// Всего найдено пятерок: 





// let num = ["Привет", "Паша", "Как", "Дела"];


// console.log(num[3])

// for (let i = 0; i < num.length; i = i + 1) {  
//   console.log("Индекс " + i + ": " + num[i])
// }






