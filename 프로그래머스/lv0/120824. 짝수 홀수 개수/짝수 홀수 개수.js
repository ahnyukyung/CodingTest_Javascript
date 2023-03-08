   function solution(num_list) {
        let answer = []; //임의의 정수배열 담을 변수 answer 선언
        let odd = []; //홀수만 담을 배열 선언
        for (let i = 0; i < num_list.length; i++) {//num_list 배열 끝까지 반복
          if (num_list[i] % 2 === 1) {//나머지 값으로 홀수인 것 찾기
            odd.push(i); //홀수이면 odd에 push
          }
        }
        answer = [num_list.length - odd.length, odd.length];
        return answer;
      }