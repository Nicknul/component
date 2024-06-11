function a(name, age, job) {
  return {
    name: name,
    age: age,
    job: job,
  };
}

// console.log(a());

const b = a('정호연', 27, '학생');
console.log('첫번째 b:', b);
b.address = '대전';
console.log('두번째 b:', b);
