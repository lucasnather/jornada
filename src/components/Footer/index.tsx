import Logo from '../../assets/logo-branco.png'
import Instagram from '../../assets/instragam.png'
import Whatsapp from '../../assets/whatsapp.png'
import X from '../../assets/twiter.png'
import { ContainerContentFooter, ContainerFooter, ContainerSocialMedia, ImagesSocialMedia } from './styled'

export function Footer() {
    return (
        <ContainerFooter>
            <ContainerContentFooter>
                <div>
                    <img src={Logo} alt="" />
                    <p>Horário de atendimento: 08h - 20h (Segunda a Sábado)</p>
                    <p>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p>
                </div>

                <ContainerSocialMedia>
                    <p>Nossas rede sociais</p>

                    <ImagesSocialMedia>
                        <img src={Instagram} alt="" />
                        <img src={Whatsapp} alt="" />
                        <img src={X} alt="" />
                    </ImagesSocialMedia>
                </ContainerSocialMedia>
            </ContainerContentFooter>
        </ContainerFooter>
    )
}