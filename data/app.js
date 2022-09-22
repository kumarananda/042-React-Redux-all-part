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

// // 07   update subtitle-key value under settings key 
// let data = {
//     user: [],
//     settings: {
//         title : "Sorobindu",
//         subtitle: 'This is the Sorobindu',
//         reg_no: 002
//     },
//     food : ['alu', 'potol', 'lau']
// };
// //add on food key
//     data = {
//         ...data, 
//         food : [...data.food, 'dundol', 'payara'],
//         settings : { 
//             ...data.settings,
//             subtitle : "Wealcom to Sorobindu"
//         }
//     }
//     console.log(data);
// //result >>
// {
//     user: [],
//     settings: { title: 'Sorobindu', subtitle: 'Wealcom to Sorobindu', reg_no: 2 },
//     food: [ 'alu', 'potol', 'lau', 'dundol', 'payara' ]
//   }



// // 08 (not advence) data.settings.devs[1] selected value update
// let data = {
//     user: [],
//     settings: {
//         title : "Sorobindu",
//         subtitle: 'This is the Sorobindu',
//         reg_no: 002,
//         devs : [
//             {
//                 name : "Ananda",
//                 age : 30,
//                 skill : "MERN",
//                 location : "Panthapath",
//             },
//             {
//                 name : "Achem",
//                 age : 31,
//                 skill : "NestJS",
//                 location : "Mirpur",
//             },
//             {
//                 name : "Adnan",
//                 age : 32,
//                 skill : "Wordpress",
//                 location : "Dhanmondi",
//             },
//         ]
//     },
//     food : ['alu', 'potol', 'lau']
// };
// //add on food key
//     data = {
//         ...data, 
//         settings : { 
//             ...data.settings,
//             devs : [
//                 data.settings.devs[0],
//                 data.settings.devs[1] = {
//                     ...data.settings.devs[1],
//                     name : "Nur Amin",
//                     age : 310,
//                     // skill : "Angular",
//                     // location : "Mirpur",
//                 },
//                 data.settings.devs[2],
//             ]
            
//         }
//     }
//     console.log(data.settings.devs); //selected ==
// //result >>
// [
//     { name: 'Ananda', age: 30, skill: 'MERN', location: 'Panthapath' },
//     { name: 'Nur Amin', age: 310, skill: 'NestJS', location: 'Mirpur' },
//     { name: 'Adnan', age: 32, skill: 'Wordpress', location: 'Dhanmondi' }
//   ]
    

// // 09 (not advence)  data.settings.devs[1] // full replace on selected index (pattrn 01 complex)
// let data = {
//     user: [],
//     settings: {
//         title : "Sorobindu",
//         subtitle: 'This is the Sorobindu',
//         reg_no: 002,
//         devs : [
//             {
//                 name : "Ananda",
//                 age : 30,
//                 skill : "MERN",
//                 location : "Panthapath",
//             },
//             {
//                 name : "Achem",
//                 age : 31,
//                 skill : "NestJS",
//                 location : "Mirpur",
//             },
//             {
//                 name : "Adnan",
//                 age : 32,
//                 skill : "Wordpress",
//                 location : "Dhanmondi",
//             },
//         ]
//     },
//     food : ['alu', 'potol', 'lau']
// };

//     data = {
//         ...data, 
//         settings : { 
//             ...data.settings,
//             devs : [
//                 data.settings.devs[0],
//                 data.settings.devs[1] = {   // full replace on selected index
//                     name : "Nur Amin",
//                     age : 310,
//                     skill : "Angular",
//                 },
//                 data.settings.devs[2],
//             ]
            
//         }
//     }
//     console.log(data.settings.devs); //selected
// //result >>
//     [
//     { name: 'Ananda', age: 30, skill: 'MERN', location: 'Panthapath' },
//     { name: 'Nur Amin', age: 310, skill: 'Angular' },
//     { name: 'Adnan', age: 32, skill: 'Wordpress', location: 'Dhanmondi' }
//   ]

// // 10 (not solved) It's make an extra object,  data.settings.devs[1]
// // full replace on selected index (pattrn 01 complex)
// let data = {
//     user: [],
//     settings: {
//         title : "Sorobindu",
//         subtitle: 'This is the Sorobindu',
//         reg_no: 002,
//         devs : [
//             {
//                 name : "Ananda",
//                 age : 30,
//                 skill : "MERN",
//                 location : "Panthapath",
//             },
//             {
//                 name : "Achem",
//                 age : 31,
//                 skill : "NestJS",
//                 location : "Mirpur",
//             },
//             {
//                 name : "Adnan",
//                 age : 32,
//                 skill : "Wordpress",
//                 location : "Dhanmondi",
//             },
//         ]
//     },
//     food : ['alu', 'potol', 'lau']
// };

//     data = {
//         ...data, 
//         settings : { 
//             ...data.settings,
//             devs : [
//                 ...data.settings.devs,
//                 data.settings.devs[1] = {   // full replace on selected index
//                     name : "Nur Amin",
//                     age : 310,
//                     skill : "Angular",
//                 },
//             ]
            
//         }
//     }
//     console.log(data.settings.devs); //selected
// //result >> not solved >>>>>> ERROR
// [
//     { name: 'Ananda', age: 30, skill: 'MERN', location: 'Panthapath' },
//     { name: 'Achem', age: 31, skill: 'NestJS', location: 'Mirpur' },
//     { name: 'Adnan', age: 32, skill: 'Wordpress', location: 'Dhanmondi' },
//     { name: 'Nur Amin', age: 310, skill: 'Angular' }      
//   ]
    
    

// // 11   data.settings.devs[1]  recomended
// let data = {
//     user: [],
//     settings: {
//         title : "Sorobindu",
//         subtitle: 'This is the Sorobindu',
//         reg_no: 002,
//         devs : [
//             {
//                 name : "Ananda",
//                 age : 30,
//                 skill : "MERN",
//                 location : "Panthapath",
//             },
//             {
//                 name : "Achem",
//                 age : 31,
//                 skill : "NestJS",
//                 location : "Mirpur",
//             },
//             {
//                 name : "Adnan",
//                 age : 32,
//                 skill : "Wordpress",
//                 location : "Dhanmondi",
//             },
//         ]
//     },
//     food : ['alu', 'potol', 'lau']
// };
// // 
// data.settings.devs[1] = {
//     ...data.settings.devs[1],
//     name: 'Nur Amin'
// }

// console.log(data.settings.devs); //selected
// //result >>
//     [
//         { name: 'Ananda', age: 30, skill: 'MERN', location: 'Panthapath' },
//         { name: 'Nur Amin', age: 31, skill: 'NestJS', location: 'Mirpur' },
//         { name: 'Adnan', age: 32, skill: 'Wordpress', location: 'Dhanmondi' }
//     ]
    



// 11   use splice & data.settings.devs[1]  recomended
let data = {
    user: [],
    settings: {
        title : "Sorobindu",
        subtitle: 'This is the Sorobindu',
        reg_no: 002,
        devs : [
            {
                name : "Ananda",
                age : 30,
                skill : "MERN",
                location : "Panthapath",
            },
            {
                name : "Achem",
                age : 31,
                skill : "NestJS",
                location : "Mirpur",
            },
            {
                name : "Adnan",
                age : 32,
                skill : "Wordpress",
                location : "Dhanmondi",
            },
        ]
    },
    food : ['alu', 'potol', 'lau', 'kumra', 'apple' ]
};
// update
data.settings.devs[1] = {
    ...data.settings.devs[1],
    name: 'Nur Amin'
}
    data.food.splice(2,1)

console.log(data); //selected
//result >> let for skip error
let testresult = 
 {
    user: [],
    settings: {
      title: 'Sorobindu',
      subtitle: 'This is the Sorobindu',
      reg_no: 2,
      devs: [ [Object], [Object], [Object] ]
    },
    food: [ 'alu', 'potol', 'kumra', 'apple' ]
  }