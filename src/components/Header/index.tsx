import Logo from '../../assets/logo-branco.png'
import { ButtonLogin, ButtonRegister, ContainerContent, ContainerHeader } from './styled'

export function Header() {
    return (
        <ContainerHeader>
            <ContainerContent>
            <img src={Logo} alt="logo com uma bússula e ao lado escrito Jornada" />

                <div>
                    <ButtonRegister>Cadastre-se</ButtonRegister>
                    <ButtonLogin>Login</ButtonLogin>
                </div>
            </ContainerContent>
        </ContainerHeader>
    )
}