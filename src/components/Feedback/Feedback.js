import { Statistic } from './Statistic';

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
    <>
      <h2>Please leave feedback</h2>
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
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
    </>
  );
};
