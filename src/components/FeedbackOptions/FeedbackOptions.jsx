import s from "./FeedbackOptions.module.css"

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return <>
        <ul className={s.feedbackList}>
            {Object.keys(options).map(option => {
                return <li key={option}><button className={s.button} onClick={onLeaveFeedback}>{option}</button></li>
            })}
        </ul>
    </>
 }