function solution(arr) {
    let answer = 0;
// arr.length 4    arr[0]+arr[1]+arr[2]+arr[3]/2
// arr.length 5    arr[0]+arr[1]+arr[2]+arr[3]+arr[4]/2   
    for(let i=0;i<arr.length;i++){
    // arr[0]+=arr[1]+arr[2]+...arr[i]
       answer=arr.reduce((a,b)=>(a+b)) / (arr.length)
       return answer
    }
}