import Container from "./styles";
import PropTypes from "prop-types";

function ContainerStyle({ children, ...props }) {

    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

ContainerStyle.propTypes = {
    children: PropTypes.node.isRequired
};

export default ContainerStyle;