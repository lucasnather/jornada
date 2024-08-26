import styled from "styled-components";

export const ContainerFooter = styled.footer`
    background-color: ${({theme}) => theme.colors["dark-neutrals-1"]};
    margin-top: -10px;

`

export const ContainerContentFooter = styled.section`
    width: 1000px;
    margin: 0 auto;
    padding: 60px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &  p {
        color: white;
    }
`

export const ContainerSocialMedia = styled.div`
    text-align: center;
`

export const ImagesSocialMedia = styled.data`
    display: flex;
    gap: 5px;
    margin: 5px;
`