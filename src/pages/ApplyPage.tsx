import React, { useState } from 'react';
import {
  Input,
  Label,
  TransportationList,
  Radio,
  Checkbox,
  RoundButton,
  RegionModal,
} from '@/components';

import { REGEX_FOR_VALIDATION } from '@/constants/validation';
import { ClickEventType } from '@/@types/react';

import styled from 'styled-components';

const ApplyPage = () => {
  const [isClickRegionField, setIsClickRegionField] = useState<boolean>(false);
  const [isAllPassValidation, setIsAllPassValidation] =
    useState<boolean>(false);

  const handleClickedRegion = (event: ClickEventType<HTMLInputElement>) => {
    event.currentTarget.blur();
    setIsClickRegionField((prevState) => !prevState);
  };

  const handleClickedApplyButton = () => {};

  return (
    <div>
      <Label title="이름" />
      <InputField
        name="name"
        placeholder="홍길동 (한글만 입력 가능)"
        reg={REGEX_FOR_VALIDATION.NAME}
      />
      <Label title="성별" />
      <GenderRadio
        name="gender"
        labels={['남자', '여자']}
        values={['M', 'F']}
      />
      <Label title="생년월일" />
      <InputField
        name="birth"
        placeholder="YYYY.MM.DD (숫자만 입력 가능)"
        maxLength={10}
        reg={REGEX_FOR_VALIDATION.BIRTH}
      />
      <Label title="거주지역" />
      <InputField
        name="region"
        placeholder="거주지역 선택"
        onClick={handleClickedRegion}
      />
      <Label title="연락처" />
      <InputField
        name="phone"
        placeholder="'-'없이 입력해 주세요 (숫자만 입력 가능)"
        maxLength={13}
        reg={REGEX_FOR_VALIDATION.PHONE}
      />
      <Label title="이메일" />
      <InputField
        name="email"
        placeholder="MYD@snplab.com"
        reg={REGEX_FOR_VALIDATION.EMAIL}
        regWhiteList={true}
        validationBorder={true}
      />
      <Label
        title="주로 이용하는 교통수단"
        description="주로 이용하는 교통수단을 모두 선택해 주세요"
      />
      <StyledTransportationList />
      <AllAgreeRadio
        name="agreement"
        labels={['이용약관 모두 동의']}
        values={['yes']}
      />
      <Hr />
      <Checkbox labelText="개인정보 처리방침 고지 (필수)" />
      <Checkbox labelText="제3자 정보제공 동의 (필수)" />
      <ApplyButton
        showText="지원하기"
        width="100%"
        borderRadius="8px"
        padding="15px 13px"
        disabled={!isAllPassValidation}
        onClick={handleClickedApplyButton}
      />
      {isClickRegionField && <RegionModal />}
    </div>
  );
};

export default ApplyPage;

const InputField = styled(Input)`
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 10px;
`;

const GenderRadio = styled(Radio)`
  padding-left: 0px;
  margin-bottom: 20px;
`;

const StyledTransportationList = styled(TransportationList)`
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Hr = styled.hr`
  border: 1px solid black;
`;

const AllAgreeRadio = styled(Radio)`
  padding-left: 0px;
`;

const ApplyButton = styled(RoundButton)<{ disabled: boolean }>`
  margin-top: 30px;
  background-color: ${({ theme, disabled }) =>
    !disabled && theme.color.button.darkbrown};
  color: ${({ theme, disabled }) => !disabled && theme.color.font.white};
`;
