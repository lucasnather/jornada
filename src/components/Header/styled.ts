import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: ${({theme})=> theme.colors["dark-neutrals-1"]};
`

export const ContainerContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    margin: 0 auto;
    padding: 16px;
`

const Button = styled.button`
    border-radius: 8px;
    border: none;
    padding: 8px 24px;
    cursor: pointer;
`

export const ButtonRegister = styled(Button)`
    background-color: ${({theme}) => theme.colors["primary-2"]};
    color: ${({theme}) => theme.colors.white};
    margin-right: 16px;

    &:hover {
        background-color: ${({theme}) => theme.colors["primary-3"]};
    }
`

export const ButtonLogin = styled(Button)`
    background-color: transparent;
    color: ${({theme}) => theme.colors["primary-2"]};
    border: 1px solid white;

    &:hover {
        background-color: ${({theme}) => theme.colors["primary-3"]};
    }
`