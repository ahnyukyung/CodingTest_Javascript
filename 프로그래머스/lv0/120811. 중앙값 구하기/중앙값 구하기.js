function solution(array) {
//1. sort() 함수로 오름차로 정렬 
    array.sort(function(a,b){
        return a-b
    });
//2. 중앙값(array.length/2)에 해당하는 인덱스값(parseInt) 찾기
 return array[parseInt(array.length/2)]
}