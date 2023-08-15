import { StyledList } from "./StyledFeedBack";

export const Statistic = ({ good, bad, neutral, countFeed, countPerc }) => {
  return (
    <>
      <StyledList>
        <li>Good:{good}</li>
        <li>Bad:{bad}</li>
        <li>Neutral:{neutral}</li>
        <li>Total:{countFeed()}</li>
        <li>Positive Feedback:{countPerc()}%</li>
      </StyledList>
    </>
  );
};
