import { StyledButton } from "./StyledFeedBack"

export const FeedbackOptions= ({options,onClickAdd})=>{
    return(
<>
{options.map((option) => (
    <StyledButton
       key={option}
       onClick={() => onClickAdd(option)}
    >
       {option === "good" ? <p>good</p> : null}
       {option === "neutral" ? <p>neutral</p> : null}
       {option === "bad" ? <p>bad</p> : null}
    </StyledButton>
 ))}
</>
    )
}