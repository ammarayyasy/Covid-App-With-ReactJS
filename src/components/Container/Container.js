import ContainerStyled from "./Container.module";

function Container(props) {
    return (
        <ContainerStyled>{props.children}</ContainerStyled>
    )
}

export default Container;