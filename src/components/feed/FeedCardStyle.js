import styled from 'styled-components';
import { breakPoints } from 'components/common/Media';

import { ReactComponent as LikeIcon } from 'assets/images/thumbs-up.svg';
import { ReactComponent as DisLikeIcon } from 'assets/images/thumbs-down.svg';

/** 카드 리스트 */
export const FeedContainer = styled.li`
  width: 100%;
  padding: 3.2rem;
  border-radius: 1.6rem;
  background: var(--gray10);
  box-shadow: var(--shadow1pt);
  list-style: none;

  @media screen and (${breakPoints.mobile}) {
    padding: 2.4rem;
  }
`;

/** 카드 아이템 */
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 3.2rem;
  word-break: break-all;

  @media screen and (${breakPoints.mobile}) {
    gap: 2.4rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Info = styled.p`
  font: var(--caption1-regular);
  color: var(--gray40);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
`;

export const Title = styled.h3`
  font: var(--body2-bold);

  @media screen and (${breakPoints.mobile}) {
    font: var(--body3-bold);
  }
`;

export const Contents = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const Profile = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ContentInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const InfoTitle = styled.span`
  font: var(--body2-bold);
`;

export const InfoTimeDiff = styled.span`
  font: var(--caption1-regular);
  color: var(--gray40);
  font-size: 1.4rem;
`;

export const ContentDescription = styled.div`
  font: var(--body3-regular);
  color: ${({ $state }) => ($state ? 'var(--red50)' : 'var(--gray60)')};
  line-height: 2.2rem;
  border: none;
  resize: none;

  &:focus {
    outline-style: none;
  }
`;

export const Reaction = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  padding-top: 2.4rem;
  border-top: 1px solid var(--gray30);
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  pointer-events: ${({ disabled }) => disabled === true && 'none'};
`;

export const LikeText = styled.span`
  color: ${({ $isActive }) => ($isActive === true ? 'var(--blue50)' : 'var(--gray40)')};
  font: var(--caption1-regular);
`;

export const DislikeText = styled.span`
  color: ${({ $isActive }) => ($isActive === true ? 'var(--gray60)' : 'var(--gray40)')};
  font: var(--caption1-regular);
`;

export const IconLike = styled(LikeIcon)`
  & path {
    fill: ${({ $isActive }) => ($isActive === true ? 'var(--blue50)' : 'var(--gray40)')};
  }
`;

export const IconDisLike = styled(DisLikeIcon)`
  & path {
    fill: ${({ $isActive }) => ($isActive === true ? 'var(--gray60)' : 'var(--gray40)')};
  }
`;
