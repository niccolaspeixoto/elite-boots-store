import { Buttons } from "./styles";

function ButtonsStyle({ children, ...props }) {

    return(
        <Buttons {...props}>
            {children}
        </Buttons>
    )
}

export default ButtonsStyle;