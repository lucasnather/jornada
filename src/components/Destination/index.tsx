import { ButtonDetails, ButtonFilter, City, ContainerDestination, ContainerDestinationCard, ContainerDestinationContent, ContainerForm, ContainerInput, ContainerMain, InputFilter, Price, Title } from "./styled";
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

                <div>
                    <div>
                        <img src={Thumb} alt="" />
                        <div>
                            <p>A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa.</p>
                            <p>Lauro Matos</p>
                        </div>
                    </div>
                    <div>
                        <img src={Thumb} alt="" />
                        <div>
                            <p>Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço personalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem.</p>
                            <p>Lauro Matos</p>
                        </div>
                    </div>
                    <div>
                        <img src={Thumb} alt="" />
                        <div>
                            <p>Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência emocionante e personalizada a partir das nossas necessidades.</p>
                            <p>Lauro Matos</p>
                        </div>
                    </div>
                </div>
            </section>
        </ContainerMain>
    )
}