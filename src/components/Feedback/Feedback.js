import { Statistic } from './Statistic';
import { StyledButton, StyledFeedBack } from './StyledFeedBack';

export const Feedback = ({
  onGood,
  onBad,
  onNeutral,
  good,
  bad,
  neutral,
  countFeed,
  countPerc,
}) => {
  return (
    <StyledFeedBack>
      <h2>Please leave feedback</h2>
      <StyledButton type="button" onClick={onGood}>
        Good
      </StyledButton>
      <StyledButton onClick={onNeutral}>Neutral</StyledButton>
      <StyledButton onClick={onBad}>Bad</StyledButton>
      <h2>Statistics</h2>
      {countFeed() === 0 && <p>Please leave feedback</p>}
      {countFeed() !== 0 && (
        <Statistic
          good={good}
          bad={bad}
          neutral={neutral}
          countFeed={countFeed}
          countPerc={countPerc}
        />
      )}
    </StyledFeedBack>
  );
};
