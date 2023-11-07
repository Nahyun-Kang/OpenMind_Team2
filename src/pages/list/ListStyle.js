import styled from 'styled-components';
import { breakPoints } from '../../components/common/media';

export const ListContainerBox = styled.div`
  width: 100%;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1004px;
  padding: 0 3.2rem;
  margin: 0 auto;
  @media screen and (${breakPoints.mobile}) {
    max-width: 500px;
    padding: 0 2.4rem;
  }
`;

export const ListUpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (${breakPoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.8rem;
    width: 100%;
  }
`;
export const ListTitle = styled.h2`
  margin-bottom: 1.2rem;
  font-size: 4rem;
  color: var(--gray60);
  text-align: center;
  @media screen and (${breakPoints.mobile}) {
    margin-bottom: 0px;
    font-size: 2.4rem;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  margin-bottom: 3rem;
  cursor: pointer;
  @media screen and (${breakPoints.mobile}) {
    margin-bottom: 0px;
  }
`;

export const DropdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(${({ $isDropdownView }) => ($isDropdownView ? '--gray60' : '--gray40')});
  border-radius: 8px;
  background: var(--gray10);
  span {
    color: var(${({ $isDropdownView }) => ($isDropdownView ? '--gray60' : '--gray40')});
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 500;
  }
  img {
    width: 14px;
    height: 14px;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: var(--gray10);
`;

export const DropdownListItme = styled.li`
  padding: 5px;
  color: var(--gray50);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  padding: 6px 0;
  &:hover {
    color: var(--blue50);
  }
`;

export const ListPagination = styled.ul`
  display: flex;
  margin-top: 4rem;
  @media screen and (${breakPoints.mobile}) {
    margin-top: 3rem;
  }
`;

export const ListPaginationNumber = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: var(--gray40);
  font-size: 2rem;
  font-family: Actor;
  font-weight: 400;
`;
