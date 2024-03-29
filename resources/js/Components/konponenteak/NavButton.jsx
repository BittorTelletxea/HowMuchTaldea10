import PropTypes from "prop-types";
import "@/Components/style/estiloa.css"

export const NavButton = ({value}) => {

    return (
        <input href={value} id="navButton" type="button" value={value}/>
    )
}


NavButton.propTypes = {
    value: PropTypes.string.isRequired, 
}