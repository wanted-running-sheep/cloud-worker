import React, { useState, useEffect } from 'react';
import { Checkbox, RoundButton, RegionModal } from '@/components';
import { useNavigate } from 'react-router-dom';

import { ChangeEventType } from '@/@types/react';

import { useRecoilState } from 'recoil';
import {
  applicantInfoState,
  applicantValidationState,
  modalTriggerState,
} from '@/recoil/atoms';

import styled from 'styled-components';
import useApplicant from '@/hooks/useApplicant';
import SelectButton from '@/components/SelectButton';
import { CHECKBOX_LABEL_TEXT } from '@/constants';
import { UserInterface } from 'request';
import formatDate from '@/utils/formatDate';
import useApplyUserModel from '@/api/models/useApplyUserModel';
import { ContentType, ContentTypeEnum, InputNameEnum } from '@/@types/enum';
import moveScroll from '@/utils/moveScroll';
import Agreement from '@/components/Modal/Agreement';

const ApplyPage = () => {
  const { postUser } = useApplyUserModel();
  const [isAgreement, setIsAgreement] = useState(false);
  const [contentType, setContentType] = useState<ContentType>('privacy');

  const [showModal, setShowModal] = useRecoilState<boolean>(modalTriggerState);
  const [applicantInfo, setApplicantInfo] = useRecoilState(applicantInfoState);
  const [applicantValidation, setApplicantValidation] = useRecoilState(
    applicantValidationState
  );
  const { city, district } = applicantInfo.region;
  const [isAgreements, setIsAgreements] = useState<boolean[]>([false, false]);
  const [isAllPassValidation, setIsAllPassValidation] =
    useState<boolean>(false);

  const { inputAttrs } = useApplicant();

  const handleClickedRegion = () => {
    setShowModal(true);
    moveScroll();
  };

  const handleClickedApplyButton = async () => {
    const data: UserInterface = {
      ...applicantInfo,
      applyDate: formatDate(new Date()),
      birth: applicantInfo.birth.replaceAll('.', '-'),
    };

    await postUser(data);
    window.location.replace('/landing');
  };

  const handleChangeAgreement = (event: ChangeEventType<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsAgreements((prev) => {
      return prev.map(() => checked);
    });
  };

  const handleChangeGender = (event: ChangeEventType<HTMLInputElement>) => {
    const { name, value } = event.target;
    setApplicantInfo({ ...applicantInfo, [name]: value });
    !applicantValidation[name] &&
      setApplicantValidation({ ...applicantValidation, [name]: true });
  };

  const handleChangeEachAgreement = (
    event: ChangeEventType<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    setIsAgreements((prev) => {
      const temp = [...prev];
      temp[Number(name)] = checked;
      return [...temp];
    });
  };

  const openAgreementModal = (index: number) => {
    const type: ContentType[] = ['privacy', 'thirdParty'];
    setContentType(type[index]);
    setIsAgreement(true);
  };
  const closeAgreementModal = () => {
    setIsAgreement(false);
  };

  useEffect(() => {
    if (
      Object.keys(InputNameEnum).length !==
      Object.keys(applicantValidation).length
    )
      return;

    const isValidation = Object.values(applicantValidation).every(
      (validation) => validation === true
    );

    const isAgreement = isAgreements.every((agreement) => agreement === true);

    setIsAllPassValidation(isValidation && isAgreement);
  }, [applicantValidation, isAgreements]);

  return (
    <div>
      {inputAttrs.map(
        ({
          name,
          title,
          description,
          placeholder,
          reg,
          maxLength,
          regWhiteList,
          validationBorder,
          Component,
          GenderComponent,
          TransportationComponent,
        }) => {
          if (name === 'gender' && GenderComponent) {
            return (
              <GenderComponent
                key={name}
                title={title}
                onChange={handleChangeGender}
              />
            );
          }

          if (name === 'transportation' && TransportationComponent) {
            return (
              <TransportationComponent
                key={name}
                title={title}
                description={description}
                name={name}
              />
            );
          }
          return (
            Component && (
              <Component
                key={name}
                title={title}
                name={name}
                placeholder={placeholder}
                reg={reg}
                maxLength={maxLength}
                {...(name === 'email' && { regWhiteList, validationBorder })}
                {...(name === 'region' && {
                  readOnly: true,
                  onClick: handleClickedRegion,
                  value: district && !showModal ? `${city} ${district}` : '',
                })}
              />
            )
          );
        }
      )}

      <AllAgreeRadio
        name="agreement"
        labels={['이용약관 모두 동의']}
        values={['yes']}
        type="checkbox"
        onChange={handleChangeAgreement}
        checked={
          isAgreements.filter((prev) => prev === true).length ===
          CHECKBOX_LABEL_TEXT.length
        }
      />
      <Hr />
      {CHECKBOX_LABEL_TEXT.map((label, index) => {
        return (
          <Checkbox
            key={label}
            labelText={label}
            name={index.toString()}
            checked={isAgreements[index]}
            onChange={handleChangeEachAgreement}
            openAgreementModal={openAgreementModal}
          />
        );
      })}

      <ApplyButton
        showText="지원하기"
        width="100%"
        borderRadius="8px"
        padding="15px 13px"
        disabled={!isAllPassValidation}
        onClick={handleClickedApplyButton}
      />
      {showModal && <RegionModal />}
      {isAgreement && (
        <Agreement close={closeAgreementModal} contentType={contentType} />
      )}
    </div>
  );
};

export default ApplyPage;

const Hr = styled.hr`
  border: 1px solid black;
`;

const AllAgreeRadio = styled(SelectButton)`
  padding-left: 0px;
`;

const ApplyButton = styled(RoundButton)<{ disabled: boolean }>`
  margin-top: 30px;
  background-color: ${({ theme, disabled }) =>
    !disabled && theme.color.button.darkbrown};
  color: ${({ theme, disabled }) => !disabled && theme.color.font.white};
`;
