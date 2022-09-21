// // 01 replace value
// let data = 'Ananda Kumar';
// data = 'Ananda Kumar Saha'
// console.log(data);
// //result >> Ananda Kumar Saha

// // 02 // add new index data on main array
// let data = ['Ananda Kumar'];
// data = [...data,'Ananda Kumar Saha']
// console.log(data);
// //result >> [ 'Ananda Kumar', 'Ananda Kumar Saha' ]

// // 03  add cell key
// let data = {name : "Ananda", age: 30, location : 'Mirpure'};
// data = {...data, cell: '01913918163'} // add
// console.log(data);
// //result >> { name: 'Ananda', age: 30, location: 'Mirpure', cell: '01913918163' }

// // 04  // update age key value
// let data = {name : "Ananda", age: 30, location : 'Mirpure'};
// data = {...data, cell: '01913918163'} //add
// data = {...data, age: 130} // update
// console.log(data);
// //result >> { name: 'Ananda', age: 130, location: 'Mirpure', cell: '01913918163' }

// // 05 // add new object data
// let data = [{name : "Ananda", age: 30, location : 'Mirpure'}];
//     data = [...data, 
//         {name : 'Anamul', age: 32, location: 'Shaver'}
//     ] //add
//     console.log(data);
// //result >>
//     [
//        { name: 'Ananda', age: 30, location: 'Mirpure' },
//        { name: 'Anamul', age: 32, location: 'Shaver' }
//     ]

// // 06  //add on food key
// let data = {
//     user: [],
//     settings: {
//         title : "Sorobindu",
//         subtitle: 'This is the Sorobindu',
//         regno: 002
//     },
//     food : ['alu', 'potol', 'lau']
// };
// //add on food key
//     data = {...data, food : [...data.food, 'dundol', 'payara']}
//     console.log(data);
// //result >>
//     {
//     user: [],
//     settings: { title: 'Sorobindu', subtitle: 'This is the Sorobindu', regno: 2 },      
//     food: [ 'alu', 'potol', 'lau', 'dundol', 'payara' ]
//   }


// https://www.youtube.com/watch?v=nB-nup4ItWU&list=PLVAkv8bX85N-oaEI8jGJcmNKBd6yc9N-M&index=124&t=1s
    // time 93:48
// 07   update subtitle-key value under settings key (updating)
let data = {
    user: [],
    settings: {
        title : "Sorobindu",
        subtitle: 'This is the Sorobindu',
        regno: 002
    },
    food : ['alu', 'potol', 'lau']
};
//add on food key
    data = {...data, food : [...data.food, 'dundol', 'payara']}
    console.log(data);
//result >>
    