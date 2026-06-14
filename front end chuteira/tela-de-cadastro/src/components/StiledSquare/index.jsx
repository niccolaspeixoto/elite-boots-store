import { Square } from "./styles";
import PropTypes from "prop-types";

function StiledSquare({ children, ...props }) {
    return(
        <Square {...props}>
            {children}
        </Square>
    )
}

StiledSquare.propTypes = {
    children: PropTypes.node.isRequired
};

export default StiledSquare;