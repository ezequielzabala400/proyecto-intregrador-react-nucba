import { Form } from "formik";
import { styled } from "styled-components";


export const ContactContainer = styled.section`
    min-height: 100vh;
    width: 100%;
    padding: 50px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${({background}) => background});
    background-repeat: repeat-x;
    background-position: center;
    max-width: 1000px;
    animation: fade 0.4s;
    h2{
        align-self: start;
        font-size: 2.6rem;
        font-family: var(--Dancing-Script);
    }
`

export const ContactForm = styled(Form)`
    width: 100%;
    border: 4px solid var(--Green);
    background-color: var(--Black);
    padding: 26px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    max-width: 450px;
    @media (min-width: 768px) {
        max-width: 600px;
    }
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    @media (min-width: 768px) {
        flex-wrap: wrap;
        flex-direction: row;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`