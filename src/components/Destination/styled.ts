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
    border-radius: 8px;
`

export const ButtonFilter = styled.button`
    background-color: ${({theme}) => theme.colors["primary-2"]};
    color: ${({theme}) => theme.colors.white};
    padding: 8px 24px;
    border-radius: 8px;
    border: none;

    &:hover {
        background-color: ${({theme}) => theme.colors["primary-3"]};
    }

`