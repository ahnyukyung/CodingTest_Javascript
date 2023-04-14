function solution(n) {
  const arr = Array.from(String(n)).map(Number);
  const newArr = arr.reverse();
  return newArr;
}