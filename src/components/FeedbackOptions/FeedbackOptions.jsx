import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css"

function FeedbackOptions({ options, onLeaveFeedback }) {
    return <>
        <ul className={s.feedbackList}>
            {Object.keys(options).map(option => {
                return <li key={option}><button className={s.button} onClick={onLeaveFeedback}>{option}</button></li>
            })}
        </ul>
    </>
}
 
FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        bad: PropTypes.number,
        good: PropTypes.number,
        neutral: PropTypes.number
    }),
    onLeaveFeedback: PropTypes.func
}

export default FeedbackOptions;