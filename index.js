// 1 st problem is solve the caching problem and handle the private state each questions.

// function parent(num){
//     const a =num;
//     const b =5;
//     console.log(b)
//     function child(){
//         console.log(a,b,num)
//     }
//     return child
// }

// const childFunc= parent(1)
// const childFunc1= parent(2)

// console.dir(childFunc)
// console.dir(childFunc1)


// function gp(){
//     const a =10;
//     function parnt(){
//         const b =5;
//         function child(){
//             console.log(a,b)
//         }
//         return child;
//     }
//     const response = parnt();
//     console.dir(response)
// }
// gp();

function parent(){
    let a=0;
    function child(){
        a++
    }
    return child
}

const response = parent();
const response1 = parent();
console.dir(response)
console.dir(response1)
