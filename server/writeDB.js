const fs = require('fs');

const db = './server/database/db.json';
const region = './server/database/region.json';

function dateFormat(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return date.getFullYear() + '-' + month + '-' + day;
}

const createData = () => {
  const data = {
    applyUser: [],
  };
  const genders = ['M', 'F'];
  const isWinnings = [true, false];
  const date = new Date().getTime();
  const randomTransports = (n) => {
    const arr = [];
    const transportations = [
      '버스',
      '지하철',
      '택시',
      'KTX/기차',
      '도보',
      '자전거',
      '전동킥보드',
      '자가용',
    ];

    if (n === 0) arr.push(transportations[n]);
    else {
      for (let i = 0; i < n; i++) {
        arr.push(transportations[i]);
      }
    }

    return arr;
  };

  const randomPhone = () => {
    let str = '';
    for (let i = 0; i < 4; i++) {
      str += Math.floor(Math.random() * 10);
    }
    return str;
  };

  for (let i = 1; i <= 100; i++) {
    data.applyUser.push({
      name: `홍길동${i}`,
      gender: genders[i % 2],
      applyDate: dateFormat(
        new Date(date - Math.floor(Math.random() * 20000000000))
      ),
      birth: dateFormat(
        new Date(date - Math.floor(Math.random() * 100000000000))
      ),
      region: {
        city: '서울',
        district: '강동구',
      },
      phone: `010${randomPhone()}${randomPhone()}`,
      email: `test${i}@gmail.com`,
      transportation: randomTransports(Math.floor(Math.random() * 8)),
      isWinning: isWinnings[i % 2],
    });
  }

  return data;
};

const regions = JSON.parse(fs.readFileSync(region, 'utf-8'));
const data = { ...regions, ...createData() };

fs.writeFileSync(db, JSON.stringify(data));
