import PropTypes from "prop-types";
import s from "./Section.module.css"

function Section({title, children}) {
    return <section className={s.section}>
        <h2>{title}</h2>
        {children}
    </section>
}

Section.propTypes = {
    title: PropTypes.string
}
 
export default Section;