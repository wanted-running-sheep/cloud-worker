import React, { useState } from 'react';
import Input from '@/components/Input';
import Label from '@/components/Label';
import TransportationList from '@/components/TransportationList';
import Radio from '@/components/Radio';
import Checkbox from '@/components/Checkbox';
import RoundButton from '@/components/RoundButton';
import RegionModal from '@/components/RegionModal';

import { REGEX_FOR_VALIDATION } from '@/constants/validation';
import { ChangeEventType, ClickEventType } from '@/@types/react';

import styled from 'styled-components';
import useInputs from '@/hooks/useInputs';

const ApplyPage = () => {
  const { inputs, inputVal, setInputVal } = useInputs();

  const [isClickRegionField, setIsClickRegionField] = useState<boolean>(false);
  const [isAllPassValidation, setIsAllPassValidation] =
    useState<boolean>(false);

  const handleClickedRegion = (event: ClickEventType<HTMLInputElement>) => {
    event.currentTarget.blur();
    setIsClickRegionField((prevState) => !prevState);
  };

  const handleClickedApplyButton = () => {
    console.log(inputVal);
  };

  const onChangeInput = (
    event: ChangeEventType<HTMLInputElement>,
    reg?: RegExp
  ) => {
    const { name, value } = event.target;

    setInputVal((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {inputs.map((attr) => {
        if (attr.type === 'radio') {
          return (
            <>
              {attr.titleComponent && <Label title={attr.title} />}
              {attr.name === 'gender' ? (
                <GenderRadio
                  name="gender"
                  labels={attr.labels}
                  values={attr.values}
                  onChangeInput={onChangeInput}
                />
              ) : (
                <>
                  <AllAgreeRadio
                    name="agreement"
                    labels={['이용약관 모두 동의']}
                    values={['yes']}
                    onChangeInput={onChangeInput}
                  />
                  <Hr />
                </>
              )}
            </>
          );
        }
        return (
          <>
            <Label title={attr.title} />
            <InputField
              name={attr.name}
              placeholder={attr.placeholder}
              reg={attr.reg}
              width="100%"
              onChangeInput={onChangeInput}
            />
          </>
        );
      })}
      <Checkbox labelText="개인정보 처리방침 고지 (필수)" />
      <Checkbox labelText="제3자 정보제공 동의 (필수)" />
      <ApplyButton
        showText="지원하기"
        width="100%"
        borderRadius="8px"
        padding="15px 13px"
        /* disabled={!isAllPassValidation} */
        disabled={false}
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
