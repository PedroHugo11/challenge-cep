import { Container } from "./style";

import logo from "../../assets/logo.svg";

export function Navbar() {
    return(
        <>
        <Container>
            <img src={logo} alt="Logo"/>
        </Container>
        </>
    )
}