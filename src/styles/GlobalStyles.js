import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        /* Colors */
        --Black: #131415;
        --LightBlack: #3F4952;
        --Green: #18FD68;
        --LightGreen: #CDFEDE;
        --Red: #DC1A22;
        --Beige: #E9E9E9;
        --White: #FFFFFF;
        --Gray: #333333;
        --Violet: #561E77;
        --LightViolet: #BF07FF;
        --Copyright: #9C9C9C;
        --Overlay: #474747;
        --Error: rgb(255,0,0);
        /* Fonts */
        --Dancing-Script: 'Dancing Script', cursive;
        --Lora: 'Lora', serif;
        --Poppins: 'Poppins', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        scroll-behavior: smooth;
    }

    *::-webkit-scrollbar{
        background-color: var(--Black);
    }

    *::-webkit-scrollbar-thumb{
        background-color: var(--Beige);
        border-radius: 30px;
    }

    *::-webkit-scrollbar-thumb:hover{
        background-color: var(--Red);
    }

    html{
        font-size: 62.5%;
    }

    body{
        background-color: var(--Black);
        color: var(--White);
    }

    .swal2-popup{
        background-color: var(--Black);
        border: 1px solid var(--White);
       
    }

    .swal2-title{
        color: var(--White);
        @media (min-width: 768px) {
            font-size: 2.2rem;
        }
    }

    .swal2-actions{
        font-size: 1.2rem;
        @media (min-width: 768px) {
            font-size: 1.3rem;
        }
    }


`