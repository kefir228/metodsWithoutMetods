// 1.
// const Push = (arr, ...el) => {
//     for(elem of el){
//         arr[arr.length] = elem
//     }
//     return arr
//     }
// console.log(Push([4,3,2], 1, 2));
// 2.
// const Join = (arr, divider) => {
//     let str = ''
//     for(let i = 0; i < arr.length; i++){
//         if(i === arr.length - 1){
//             str+=arr[i]
//         }else{
//             str += arr[i] + divider
//         }
//     }
//     return str
// }
// console.log(Join(['oleg','21','football'], ' '));
// 3.
// const Pop = (arr) => {
//     const lastElement = arr[arr.length - 1]
//     arr.length = arr.length - 1
//     return lastElement
// }
// console.log(Pop([4,3,2,1]));
// 4.
// const Unshift = (arr, ...el) => {
//     for (let i = arr.length + el.length - 1; i >= el.length; i--) {
//         arr[i] = arr[i - el.length];
//     }
//     for (let i = 0; i < el.length; i++) {
//         arr[i] = el[i];
//     }
// return arr
// }
// console.log(Unshift([2,3,4],1,2));
// 5.
// const Shift = (arr) => {
//     const firstEl = arr[(arr.length - arr.length)]
//     return firstEl
// }
// console.log(Shift([1,2,3,4]));
// 6.
// const IndexOf = (arr , el, index) => {
//     for(let i = index; i < arr.length; i++){
//         if(arr[i]===el){
//             return i
//         }
//     }
//     return -1
// }
// console.log(IndexOf([1,2,3,4], 3, 1));
// 7.
// const Includes = (arr , el, index) => {
//     for(let i = index; i < arr.length; i++){
//         if(arr[i]===el){
//             return true
//         }
//     }
//     return false
// }
// console.log(Includes([1,2,3,4],1,2));
// 8.
// const Reverse = (arr) => { недороблене
//     const length = arr.length
//     for(let i = 0; i < length; i ++){
//         arr[length - i - 1] = arr[i]
//     }
//     return [...arr]
// }
// console.log(Reverse([1,2,3,4]));
// 9.
// const Slice = (num) => { недороблене
//     const newArr = ['oleg', 2, 'moon', 'sun', 5]
//     const arr = []
//     for(let i = num; i < newArr.length; i++){
//         arr[arr.length] = newArr[i] 
//     }
//     if(num < 0){
//         arr[arr.length] = newArr[newArr.length - num]
//     }
//     return arr
// }
// console.log(Slice(-1));
// 10.
// const LastIndexOf = (arr,el,index ) => {
//     for(let i = index; i < arr.length; i++){
//         if(arr[i]===el){
//             return i
//         }
//     }
//     return -1
// }
// console.log(LastIndexOf([1,2,3,4,1,2],1,1));
