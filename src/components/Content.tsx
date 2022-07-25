import React from 'react';
import styled from 'styled-components';
import { ContentTypeEnum, ContentType } from '@/@types/enum';

interface ContentProps {
  type: ContentType;
}

const Content = ({ type }: ContentProps) => {
  return (
    <Wrapper>
      {type === ContentTypeEnum.PRIVACY ? (
        <h1>
          <b>개인(신용)정보</b> <br />
          처리방침에 대한 동의안내
        </h1>
      ) : (
        <h1>
          <b>제 3자</b> <br />
          정보제공에 대한 동의안내
        </h1>
      )}
      <p>
        한국신용정보원은 회원가입 등을 위하여 「개인정보보호법」 및
        「신용정보의이용및보호에관한법률」에 따라 아래와 같이 개인(신용)정보를
        수집 이용하기 위하여 귀하의 동의가 필요합니다.
      </p>
      <p>
        제1조 개인(신용)정보의 수집 이용 목적
        <br />- 서비스 이용 및 회원 관리
        <br />- 고지사항 전달
      </p>
      <p>
        제2조 수집 · 이용할 개인정보
        <br />- 회원가입에 필요한 정보
        <br />· 아이디, 비밀번호, 성명, 생년월일, 성별, 전자우편주소(단,
        회원관리, 법령의무이행 등이 어려운 전자우편주소 제외)
        <br />- 서비스 이용과정에서 자동으로 생성 수집되는 정보 <br />· IP주소
        서비스이용기록
      </p>
      <p>
        제3조 개인(신용)정보의 보유 · 이용 기간
        <br />- 위 개인정보는 수집 · 이용에 관한 동의일(회원가입일)로부터 회원
        탈퇴 시 까지 위 이용목적을 위하여 보유 · 이용됩니다. 단, 회원 탈퇴
        후에는 민원처리 및 분쟁해결 법령상 의무이행을 위하여 3년간 보유 ·
        이용됩니다.
      </p>
      <p>
        제4조 동의를 거부할 권리 및 동의를 거부할 경우의 불이익
        <br /> 위 정보 중 선택적 정보의 수집․이용에 관한 동의는 거부하실 수
        있으며, 동의하지 않으시는 경우 불이익을 받을 수 있습니다. 단, ‘동의하지
        않음’을 선택한 후 본인이 기재․제출한 정보에 대해서는 수집․이용에 동의한
        것으로 간주합니다.
      </p>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  margin-bottom: 10px;
  h1 {
    font-size: 1.3rem;
    line-height: 1.7rem;
    font-weight: 400;
    margin-bottom: 20px;
  }
  b {
    font-weight: 700;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.2rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.color.font.darkgray};
    &:nth-child(2) {
      color: ${({ theme }) => theme.color.font.gray};
    }
  }
`;
