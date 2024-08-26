import BannerImage from '../../assets/banner.png'
import { ContainerBanner } from './styled'

export function Banner() {
    return (
        <ContainerBanner>
            <img src={BannerImage} alt="" />
        </ContainerBanner>
    )
}