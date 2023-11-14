import { useState } from 'react';
import * as S from './FeedCardStyle';
import { createReaction } from 'api/api.questions';
import { timeForToday } from 'date';

import AnswerStateTag from 'components/AnswerStateTag';
import handleExtractVideoId from 'utils/ExtractYoutubeId';
import YoutubePlayer from 'components/Youtube';

export default function FeedCardItem({ questionData }) {
  const { content, createdAt, like, dislike, answer } = questionData;
  console.log(answer); // 삭제예정

  const [likeCount, setLikeCount] = useState(like);
  const [disLikeCount, setDisLikeCount] = useState(dislike);

  const [reaction, setReaction] = useState({
    like: false,
    dislike: false,
  });

  const YOUTUBE_BASE = 'https://www.youtube.com/watch?v=';
  const key = handleExtractVideoId(answer?.content);

  const handleReactionChange = (name, value) => {
    setReaction((preValues) => ({
      ...preValues,
      [name]: !value,
    }));
  };

  const handleReactionToggle = async (e) => {
    const name = e.currentTarget.getAttribute('name');
    const value = JSON.parse(e.currentTarget.getAttribute('value'));

    if (value === false) {
      try {
        const result = await createReaction(questionData.id, name);
        name === 'like' ? setLikeCount(result.like) : setDisLikeCount(result.dislike);
      } catch (error) {
        console.log(error);
      }
    }
    handleReactionChange(name, value);
  };

  const isAnswerCompleted = answer !== null;
  const isAnswerRejected = isAnswerCompleted && answer.isRejected;

  return (
    <S.Wrapper>
      <AnswerStateTag state={isAnswerCompleted} />
      <S.Description>
        <S.Info>
          <span>질문 · {timeForToday(createdAt)}</span>
        </S.Info>
        <S.Title>{content}</S.Title>
      </S.Description>
      {answer && (
        <S.Contents>
          <S.Profile />
          <S.Content>
            <S.ContentInfo>
              <S.InfoTitle>아초는고양이</S.InfoTitle>
              <S.InfoTimeDiff>{timeForToday(answer.createdAt)}</S.InfoTimeDiff>
            </S.ContentInfo>
            <S.ContentDescription $state={isAnswerRejected}>
              {isAnswerRejected ? '답변 거절' : answer.content}
              {!isAnswerRejected && answer.content.includes(YOUTUBE_BASE) && (
                <YoutubePlayer videoId={key} />
              )}
            </S.ContentDescription>
          </S.Content>
        </S.Contents>
      )}
      <S.Reaction>
        <S.Option
          onClick={handleReactionToggle}
          name="like"
          value={reaction.like}
          disabled={reaction.dislike}
        >
          <S.IconLike $isActive={reaction.like} />
          <S.LikeText $isActive={reaction.like}>좋아요 {like === 0 ? '' : likeCount}</S.LikeText>
        </S.Option>
        <S.Option
          onClick={handleReactionToggle}
          name="dislike"
          value={reaction.dislike}
          disabled={reaction.like}
        >
          <S.IconDisLike $isActive={reaction.dislike} />
          <S.DislikeText $isActive={reaction.dislike}>
            싫어요 {dislike === 0 ? '' : disLikeCount}
          </S.DislikeText>
        </S.Option>
      </S.Reaction>
    </S.Wrapper>
  );
}
