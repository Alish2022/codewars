function solution(str){
    let arr=[...str];
    let arr1=arr;
    let newArr=[];
    for(let i=0;i<str.length;i++){
      let first=arr.pop();
      newArr.push(first)
    }
    return newArr.join('')
  }