function solution(nums) {
  return nums === null ? [] : nums.sort((a, b) => a - b)
}

console.log(solution(solution([1, 2, 3, 10, 5]))) // [1, 2, 3, 5, 10]
console.log(solution(solution(null))) // []
console.log(solution(solution([]))) // []
console.log(solution(solution([20, 2, 10]))) // [2, 10, 20]
console.log(solution(solution([2, 20, 10]))) // [2, 10, 20]
