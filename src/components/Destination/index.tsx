import { BriefDescription, BriefName, ButtonDetails, ButtonFilter, City, ContainerBrief, ContainerBriefCard, ContainerDestination, ContainerDestinationCard, ContainerDestinationContent, ContainerForm, ContainerInput, ContainerMain, InputFilter, Price, Title } from "./styled";
import Deserto from '../../assets/deserto.png'
import Thumb from '../../assets/thumbnail.png'

export function Destination() {
    return(
        <ContainerMain>
            <ContainerInput>
                <p>Encontre seu próximo destino</p>

                <ContainerForm action="#">
                    <InputFilter type="search" name="orign" id="origin" placeholder="Origem"/>
                    <ButtonFilter>Buscar</ButtonFilter>
                </ContainerForm>
            </ContainerInput>

            <section>
                <Title>Destinos</Title>

                <ContainerDestination>
                    <ContainerDestinationCard>
                        <img src={Deserto} alt="" />
                        <ContainerDestinationContent>
                            <City>Atacama</City>
                            <Price>$ 500</Price>
                            <ButtonDetails>Ver detalhes</ButtonDetails>
                        </ContainerDestinationContent>
                    </ContainerDestinationCard>

                    <ContainerDestinationCard>
                        <img src={Deserto} alt="" />
                        <ContainerDestinationContent>
                            <City>Atacama</City>
                            <Price>$ 500</Price>
                            <ButtonDetails>Ver detalhes</ButtonDetails>
                        </ContainerDestinationContent>
                    </ContainerDestinationCard>

                    <ContainerDestinationCard>
                        <img src={Deserto} alt="" />
                        <ContainerDestinationContent>
                            <City>Atacama</City>
                            <Price>$ 500</Price>
                            <ButtonDetails>Ver detalhes</ButtonDetails>
                        </ContainerDestinationContent>
                    </ContainerDestinationCard>
                </ContainerDestination>
            </section>

            <section>
                <Title>Depoimentos</Title>

                <ContainerBrief>
                    <ContainerBriefCard>
                        <img src={Thumb} alt="" />
                        <div>
                            <BriefDescription>A Jornada foi uma das melhores agências de viagens que eu já exBriefDescriptionerimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa.</BriefDescription>
                            <BriefName>Lauro Matos</BriefName>
                        </div>
                    </ContainerBriefCard>
                    <ContainerBriefCard>
                        <img src={Thumb} alt="" />
                        <div>
                            <BriefDescription>Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço BriefDescriptionersonalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem.</BriefDescription>
                            <BriefName>Lauro Matos</BriefName>
                        </div>
                    </ContainerBriefCard>
                    <ContainerBriefCard>
                        <img src={Thumb} alt="" />
                        <div>
                            <BriefDescription>Minha viagem com a Jornada foi incrível! Recomendo muito a agência BriefDescriptionara quem busca uma experiência emocionante e personalizada a partir das nossas necessidades.</BriefDescription>
                            <BriefName>Lauro Matos</BriefName>
                        </div>
                    </ContainerBriefCard>
                </ContainerBrief>
            </section>
        </ContainerMain>
    )
}