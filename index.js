const { MAX: MAXENV, MAX_LENGTH: MAX_LENGTH_ENV, SEQUENCES: SEQUENCES_ENV } = process.env;


const MAX = MAXENV || 25
const MAX_LENGTH = MAX_LENGTH_ENV || 15
const SEQUENCES = SEQUENCES_ENV || 12
const MIN = 1;

const sequenceList = {};

const bsortAsc = (inpArr) => {
  for(let i = MAX_LENGTH - 1; i >= 0; --i) {
    for(let j = 1; j <= i; ++j) {
      if (inpArr[j-1] > inpArr[j]) {
        const temp = inpArr[j-1];
        inpArr[j-1] = inpArr[j];
        inpArr[j] = temp;
      }
    }
  }
  return inpArr;
}

const generateSequence = () => {
  const range = (MAX + 1) - MIN;
  const num = [];
  
  for(let i = 0 ; i < MAX_LENGTH; i++) {
    num[i] = ((Math.random() * 1000) % range);
    num[i] = num[i] + MIN;
    num[i] = Math.floor(num[i]);
    for (let j = 0 ; j < i; ++j) {
      if(num[i] === num[j]) {
        --i;
        break;
      }
    }
  }
  
  //Sort ascending
  bsortAsc(num);

  let str = "";
  for(let i = 0; i < MAX_LENGTH; ++i) {
    str = `${str}${num[i]} `;
  }

  return str
}

while (Object.keys(sequenceList).length < SEQUENCES) {
  const seq = generateSequence()
  console.log(seq)
  sequenceList[seq] = 1
}
