// 1.
// const Push = (arr , el) => {
//     arr[arr.length] = el
//     return arr
//     }
// console.log(Push([4,3,2], 1));
// 2.
// const Join = (arr) => {
//     let str = ''
//     for(let i = 0; i < arr.length; i++){
//         str+=arr[i]
//     }
//     return str
// }
// console.log(Join(['oleg','21','football']));
// 3.
// const Pop = (arr) => {
//     const lastElement = arr[arr.length - 1]
//     arr.length = arr.length - 1
//     return lastElement
// }
// console.log(Pop([4,3,2,1]));
// 4.
// const Unshift = (arr, el) => {
//     for(let i = arr.length; i > 0; i --){
//         arr[i] = arr[i-1]
//     }
//     arr[0] = el
// return arr
// }
// console.log(Unshift([2,3,4],1));
// 5.
// const Shift = (arr) => {
//     const firstEl = arr[(arr.length - arr.length)]
//     arr.length = arr.length - 1
//     return firstEl
// }
// console.log(Shift([1,2,3,4]));
// 6.
// const IndexOf = (arr , el) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]===el){
//             return i
//         }
//     }
//     return -1
// }
// console.log(IndexOf([1,2,3,4],3));
// 7.
// const Includes = (arr , el) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]===el){
//             return true
//         }
//     }
//     return false
// }
// console.log(Includes([1,2,3,4],5));
// 8.
// const Reverse = (arr) => {
//     const revArr = []
//     const length = arr.length
//     for(let i = 0; i < length; i ++){
//         revArr[length - i - 1] = arr[i]
//     }
//     return revArr
// }
// console.log(Reverse([1,2,3,4]));
// 9.
// const Slice = (num) => {
//     const newArr = ['oleg', 2, 'moon', 'sun', 5]
//     const arr = []
//     for(let i = num; i < newArr.length; i++){
//         arr[arr.length] = newArr[i] 
//     }
//     return arr
// }
// console.log(Slice(1));
// 10.
// const LastIndexOf = (arr,el) => {
//     for(let i = arr.length; i >= 0; i--){
//         if(arr[i]===el){
//             return i
//         }
//     }
//     return -1
// }
// console.log(LastIndexOf([1,2,3,4,1,2],2));
