import { Form } from "formik";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LoginWrapper = styled.section`
    padding: 36px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const LoginForm = styled(Form)`
    display: flex;
    flex-direction: column;
    padding: 30px 16px;
    border: 4px solid var(--White);
    width: 90%;
    border-radius: 10px;
    gap: 20px;
    max-width: 500px;
    animation: fade 0.4s;

    h3{
        padding-left: 16px;
        font-size: 1.8rem;
        font-family: var(--Poppins);
    }

    @media (min-width: 768px) {

        gap: 30px;

        h3{
            font-size: 2.4rem;
        }
    }
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    @media (min-width: 768px){
        gap: 20px;
    }
`

export const ButtonLogin = styled.button`
    background-color: transparent;
    border: 4px solid var(--White);
    border-radius: 10px;
    color: var(--White);
    font-family: var(--Poppins);
    padding: 10px;
    width: 160px;
    margin: auto;
    font-size: 1.6rem;
    cursor: pointer;
    @media (min-width: 425px){
        width: 300px;
    }

`

export const Divider = styled.div`
    width: 100%;
    height: 3px;
    margin: auto;
    background-color: var(--LightBlack);
`

export const LoginBtns = styled.div`
    display: flex;
    @media (min-width: 425px) {
        flex-direction: column;
        gap: 16px;
    }
`

export const LoginBtn = styled(motion.div)`
    position: relative;
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: ${({type}) => type === 'playstation' ? '#0066CC' : '#037D00'};
    border-radius: 10px;
    font-family: var(--Poppins);
    padding: 20px;
    width: 80px;
    cursor: pointer;

    img{
        height: 30px;
    }

    p{
        text-align: center;
        display: none;
    }
    @media (min-width: 425px) {
        width: 300px;

        p{
            display: flex;
            font-size: 1.6rem;
            font-weight: 600;
        }

        img{
            position: absolute;
            left: 20px;
            top: 12px;
        }
    }
`

export const RegisterText = styled.h4`
    font-family: var(--Poppins);
    margin: auto;
    font-weight: 400;
    @media (min-width: 768px) {
        font-size: 1.4rem;
    }
`

export const RegisterLink = styled(Link)`
    color: var(--Green);
    font-weight: 700;
    
`
