import styled from "styled-components";

export const ContainerMain = styled.main`
    width: 1000px;
    margin: 0 auto;

`

export const ContainerInput = styled.section`
    background-color: ${({theme}) => theme.colors["light-neutrals-2"]};
    padding: 24px;
    margin-bottom: 40px;

    & p {
        font-size: 32px;
        margin-bottom: 16px;
    }

`

export const ContainerForm = styled.form`
    display: flex;
    gap: 24px;
`

export const InputFilter = styled.input`
    width: 100%;
    padding: 14px;
    border-radius: 5px;
`

export const ButtonFilter = styled.button`
    background-color: ${({theme}) => theme.colors["primary-2"]};
    color: ${({theme}) => theme.colors.white};
    padding: 8px 24px;
    border-radius: 5px;
    border: none;

    &:hover {
        background-color: ${({theme}) => theme.colors["primary-3"]};
    }

`

export const Title = styled.h2`
    font-size: 32px;
    margin-bottom: 32px;
    line-height: 40px;
    font-weight: 400;
`

export const ContainerDestination = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 317.33px);
    gap: 24px;
    
`

export const ContainerDestinationCard = styled.div`
    background-color: ${({theme}) => theme.colors["primary-4"]};
    margin-bottom: 32px;
`

export const ContainerDestinationContent = styled.div`
    text-align: center;
    padding: 16px;
`

export const City = styled.p`
    font-size: 32px;
    line-height: 36px;
`

export const Price = styled.p`
    font-size: 32px;
    line-height: 40px;
    margin: 24px;
    font-weight: 300;
`

export const ButtonDetails = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.colors["primary-2"]};
    color: ${({theme}) => theme.colors.white};
    padding: 8px 24px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors["primary-3"]};
    }
`

export const ContainerBrief = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 317.33px);
    gap: 24px;
`

export const ContainerBriefCard = styled.div`
    display: flex;
    gap: 16px;
    background-color: ${({theme}) => theme.colors["primary-4"]};
    padding: 12px 16px;

    & img {
        width: 56px;
        height: 56px;
    }

    
`

export const BriefDescription = styled.p`
    font-weight: 400;
    line-height: 24px;
`

export const BriefName = styled.p`
    font-weight: 500;
    line-height: 24px;
`


