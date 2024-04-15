import { useState } from 'react';

import * as S from './FeedCardStyled';

import { createReaction } from 'api/api.questions';
import { timeForToday } from '../../date';

export function QuestionInfo({ question }) {
  return (
    <S.QuestionWrapper>
      <S.QuestionDate>
        질문
        <S.DisplayTime>{timeForToday(question.createdAt)}</S.DisplayTime>
      </S.QuestionDate>
      <S.QuestionContent>{question.content}</S.QuestionContent>
    </S.QuestionWrapper>
  );
}

export function AnswererImage({ answerer }) {
  if (!answerer) return;
  const { imageSource } = answerer;
  return (
    <S.ProfileWrapper>
      <S.Profile $url={imageSource} alt="프로필" />
    </S.ProfileWrapper>
  );
}

export function AnswererInfo({ answerer, question }) {
  if (!answerer) return;
  const { title } = answerer;

  return (
    <S.Answerer>
      {title}
      {question?.answer ? (
        <S.DisplayTime>{timeForToday(question.answer?.createdAt)}</S.DisplayTime>
      ) : null}
    </S.Answerer>
  );
}

export function FeedCardFooter({ question }) {
  const [reaction, setReaction] = useState({
    like: false,
    dislike: false,
    likeCount: question.like,
    dislikeCount: question.dislike,
  });

  const handleReactionChange = (name, value) => {
    setReaction((preValues) => ({
      ...preValues,
      [name]: !value,
    }));
  };

  //like와 dislike 함수 분리
  const handleLikeToggle = async () => {
    if (reaction.like === false) {
      try {
        const data = await createReaction(question.id, 'like');
        setReaction({
          ...reaction,
          likeCount: data.like,
        });
      } catch (error) {
        console.log(error);
      }
    }
    handleReactionChange('like', reaction.like);
  };

  const handleDislikeToggle = async () => {
    if (reaction.dislike === false) {
      try {
        const data = await createReaction(question.id, 'dislike');
        setReaction({
          ...reaction,
          dislikeCount: data.dislike,
        });
      } catch (error) {
        console.log(error);
      }
    }
    handleReactionChange('dislike', reaction.dislike);
  };

  //디바운싱 적용
  const debounce = (func, delay) => {
    let timer;
    return function () {
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const debouncedHandleLikeToggle = debounce(handleLikeToggle, 300);
  const debouncedHandleDislikeToggle = debounce(handleDislikeToggle, 300);

  return (
    <S.CardFooter>
      <S.FooterLine />
      <S.ReactionMarkWrapper>
        <S.Reaction
          onClick={debouncedHandleLikeToggle}
          name="like"
          value={reaction.like}
          disabled={reaction.dislike}
        >
          <S.IconLike $isActive={reaction.like} />
          <S.LikeText $isActive={reaction.like}>
            좋아요 {reaction.likeCount === 0 ? '' : reaction.likeCount}
          </S.LikeText>
        </S.Reaction>

        <S.Reaction
          onClick={debouncedHandleDislikeToggle}
          name="dislike"
          value={reaction.dislike}
          disabled={reaction.like}
        >
          <S.IconDisLike $isActive={reaction.dislike} />
          <S.DislikeText $isActive={reaction.dislike}>
            싫어요 {reaction.dislikeCount === 0 ? '' : reaction.dislikeCount}
          </S.DislikeText>
        </S.Reaction>
      </S.ReactionMarkWrapper>
    </S.CardFooter>
  );
}
