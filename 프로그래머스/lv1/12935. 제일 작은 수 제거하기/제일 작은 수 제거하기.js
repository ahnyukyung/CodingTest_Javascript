function solution(arr) {
   arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
    if(arr.length===0){
        arr.push(-1)
        return arr
    }
 return arr;
}