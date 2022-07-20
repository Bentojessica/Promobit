import {HeaderLog, Image} from "./styled"
import logo from "../../asserts/Img/logo.png"
import { goToHome } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

export const HeaderLogo = () => {
    const navigate = useNavigate()

    const onClickImgLogo = () => {
        goToHome(navigate)
    }
    return(
        <HeaderLog>
            <Image src={logo} onClick={() => onClickImgLogo()}/>
        </HeaderLog>
    )
}