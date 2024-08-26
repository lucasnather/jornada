import BannerImage from '../../assets/banner-footer.png'
import { ContainerBanner } from './styled'

export function BannerFooter() {
    return (
        <ContainerBanner>
            <img src={BannerImage} alt="" />
        </ContainerBanner>
    )
}