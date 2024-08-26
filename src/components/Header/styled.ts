import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme})=> theme.colors["dark-neutrals-1"]};
`