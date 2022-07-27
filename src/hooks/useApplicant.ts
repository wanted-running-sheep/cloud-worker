import ApplyGenderRadio from '@/components/Apply/ApplyGenderRadio';
import ApplyInput from '@/components/Apply/ApplyInput';
import ApplyTransportation from '@/components/Apply/ApplyTransportation';
import { REGEX_FOR_VALIDATION } from '@/constants/validation';

const useApplicant = () => {
  const inputAttrs = [
    {
      name: 'name',
      title: '이름',
      placeholder: '홍길동 (한글만 입력 가능)',
      reg: REGEX_FOR_VALIDATION.NAME,
      Component: ApplyInput,
    },
    {
      name: 'gender',
      title: '성별',
      placeholder: null,
      reg: null,
      GenderComponent: ApplyGenderRadio,
    },
    {
      name: 'birth',
      title: '생년월일',
      placeholder: 'YYYY.MM.DD (숫자만 입력 가능)',
      maxLength: 10,
      reg: REGEX_FOR_VALIDATION.BIRTH,
      Component: ApplyInput,
    },
    {
      title: '거주지역',
      name: 'region',
      placeholder: '거주지역 선택',
      Component: ApplyInput,
    },
    {
      name: 'phone',
      title: '연락처',
      placeholder: "'-'없이 입력해 주세요 (숫자만 입력 가능)",
      maxLength: 13,
      reg: REGEX_FOR_VALIDATION.PHONE,
      Component: ApplyInput,
    },
    {
      name: 'email',
      title: '이메일',
      placeholder: 'MYD@snplab.com',
      reg: REGEX_FOR_VALIDATION.EMAIL,
      regWhiteList: true,
      validationBorder: true,
      Component: ApplyInput,
    },
    {
      name: 'transportation',
      title: '주로 이용하는 교통수단',
      description: '주로 이용하는 교통수단을 모두 선택해 주세요',
      TransportationComponent: ApplyTransportation,
    },
  ];
  return {
    inputAttrs,
  };
};

export default useApplicant;
