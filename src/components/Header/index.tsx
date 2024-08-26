import Logo from '../../assets/logo-transparente.png'
import { ContainerHeader } from './styled'

export function Header() {
    return (
        <ContainerHeader>
            <img src={Logo} alt="logo com uma bússula e ao lado escrito Jornada" />

            <div>
                <button>Cadastre-se</button>
                <button>Login</button>
            </div>
        </ContainerHeader>
    )
}