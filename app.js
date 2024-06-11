const names = [
  '구하림',
  '김보미',
  '김수현',
  '김정수',
  '문혜림',
  '배성빈',
  '백지원',
  '송이현',
  '신지윤',
  '유으뜸',
  '유호영',
  '이연승',
  '이재영',
  '이종수',
  '임유진',
  '정호연',
  '조우식',
  '조자연',
  '최유진',
  '황재민',
];

let arr = [];

for (let i = 0; i < names.length; i++) {
  if (names[i] === '정호연') {
    arr.push(`<h1>${names[i]}</h1>`);
  } else {
    arr.push(`<div>${names[i]}</div>`);
  }
}

const app = () => {
  return `${tagComponent('div', `${arr.join('')}`)}`;
};
