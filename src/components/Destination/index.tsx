import { ButtonFilter, ContainerForm, ContainerInput, ContainerMain, InputFilter } from "./styled";
import Deserto from '../../assets/deserto.png'

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
                <h2>Destino</h2>

                <div>
                    <img src={Deserto} alt="" />
                    <p>Atacama</p>
                    <p>$ 500</p>
                    <button>Ver detalhes</button>
                </div>

                <div>
                    <img src={Deserto} alt="" />
                    <p>Atacama</p>
                    <p>$ 500</p>
                    <button>Ver detalhes</button>
                </div>

                <div>
                    <img src={Deserto} alt="" />
                    <p>Atacama</p>
                    <p>$ 500</p>
                    <button>Ver detalhes</button>
                </div>
            </section>
        </ContainerMain>
    )
}