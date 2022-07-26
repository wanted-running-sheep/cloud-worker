import React, { useState } from 'react';
import { UserInterface } from 'request';
import styled from 'styled-components';

import { Tooltip } from '@/components';
import { ChangeEventType } from '@/@types/react';
import { TransportationType } from '@/@types/enum';
import useApplyUserModel from '@/api/models/useApplyUserModel';

import { useNavigate } from 'react-router-dom';
interface TableProps {
  users: UserInterface[];
}

//상수는 나중에 따로 빼기
const tableHeads = [
  'Nums.',
  '지원날짜',
  '지원자명',
  '성별',
  '생년월일',
  '연락처',
  '이메일',
  '이용수단',
  '거주지',
  '당첨여부',
];

const Table = ({ users }: TableProps) => {
  const { patchUser } = useApplyUserModel();
  const navigate = useNavigate();

  const [isTrasportHover, setIsTransportHover] = useState<number>(0);

  const changeHandler = (
    event: ChangeEventType<HTMLInputElement>,
    id: number
  ) => {
    const { checked } = event.target;
    patchUser(id, { isWinning: checked });
  };

  const formatTransportationList = (transportations: TransportationType[]) => {
    const firstTrasportation = transportations[0];
    const transportationLength = transportations.length - 1; //첫번째 값 제외

    if (transportationLength <= 0) return firstTrasportation;
    return `${firstTrasportation} 외 ${transportationLength}건`;
  };

  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            {tableHeads.map((tableHead, index) => (
              <th key={index}>{tableHead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.applyDate}</td>
                <td>{user.name}</td>
                <td>{user.gender === 'M' ? '남' : '여'}</td>
                <td>{user.birth}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <TransportTd
                  onMouseOver={() => setIsTransportHover(user.id)}
                  onMouseOut={() => setIsTransportHover(0)}
                >
                  {formatTransportationList(user.transportation)}
                  {isTrasportHover === user.id &&
                    user.transportation.length > 1 && (
                      <Tooltip transportation={user.transportation} />
                    )}
                </TransportTd>
                <td>{user.region.city + ' ' + user.region.district}</td>

                <td>
                  <input
                    type="checkbox"
                    defaultChecked={user.isWinning}
                    onChange={(event) => changeHandler(event, user.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.background.lightgray};
  height: calc(100% - 115px);
  overflow-y: auto;
  padding: 20px 5px 50px 5px;
  border-radius: 0px 0px 15px 15px;
`;
const TransportTd = styled.td`
  position: relative;
  width: 200px;
  cursor: pointer;
`;
