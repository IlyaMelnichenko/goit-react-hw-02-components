export const Statistic = ({ good, bad, neutral, countFeed, countPerc }) => {
  return (
    <>
      <ul>
        <li>Good:{good}</li>
        <li>Bad:{bad}</li>
        <li>Neutral:{neutral}</li>
        <li>Total:{countFeed()}</li>
        <li>Positive Feedback:{countPerc()}%</li>
      </ul>
    </>
  );
};
