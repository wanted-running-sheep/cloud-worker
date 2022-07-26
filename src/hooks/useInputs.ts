import Label from '@/components/Label';
import { REGEX_FOR_VALIDATION } from '@/constants/validation';
import { useState } from 'react';

const useInputs = () => {
  const [inputVal, setInputVal] = useState<{ [key: string]: string }>({});

  const INPUT_ATTRS = [
    {
      title: '이름',
      name: 'name',
      placeholder: '홍길동 (한글만 입력 가능)',
      reg: REGEX_FOR_VALIDATION.NAME,
      titleComponent: true,
    },
    {
      title: '성별',
      name: 'gender',
      titleComponent: true,
      type: 'radio',
      labels: ['남자', '여자'],
      values: ['M', 'F'],
    },
    {
      title: '생년월일',
      name: 'birth',
      placeholder: 'YYYY.MM.DD (숫자만 입력 가능)',
      reg: REGEX_FOR_VALIDATION.BIRTH,
      titleComponent: true,
    },
    {
      title: '거주지역',
      name: 'region',
      placeholder: '거주지역 선택',
      titleComponent: true,
    },
    {
      title: '연락처',
      name: 'phone',
      placeholder: "'-'없이 입력해 주세요 (숫자만 입력 가능)",
      reg: REGEX_FOR_VALIDATION.PHONE,
      titleComponent: true,
    },
    {
      title: '이메일',
      name: 'email',
      placeholder: 'MYD@snplab.com',
      reg: REGEX_FOR_VALIDATION.EMAIL,
      regWhiteList: true,
      validationBorder: true,
      titleComponent: true,
    },
    {
      title: '주로 이용하는 교통수단',
      description: '주로 이용하는 교통수단을 모두 선택해 주세요',
      titleComponent: true,
    },
    {
      name: 'agreement',
      type: 'radio',
      titleComponent: false,
      labels: ['이용약관 모두 동의'],
      values: ['yes'],
    },
  ];

  return {
    inputs: INPUT_ATTRS,
    inputVal,
    setInputVal,
  };
};

export default useInputs;
