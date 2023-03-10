function solution(sides) {
    // 1.배열을 오름차순으로 나열
    let newSides=sides.sort(function(a,b) {return a-b})
    // 2.sides[0]+sides[1] > side[2] return 1
    // 3.sides[0]+sides[1] < side[2] return 2
    if(newSides[0]+newSides[1]>newSides[2]){
        return 1
    }else{
        return 2
    }
}