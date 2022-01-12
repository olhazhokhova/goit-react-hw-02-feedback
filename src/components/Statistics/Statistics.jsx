import s from "./Statistics.module.css"

export default function Statistics({good, neutral, bad, total, positivePercentage}) {
    return <>
        <ul className={s.statistics}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
    </>
 }