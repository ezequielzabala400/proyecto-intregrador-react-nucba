import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        /* Colors */
        --Black: #131415;
        --LightBlack: #3F4952;
        --Green: #CFFEDE;
        --Beige: #E9E9E9;
        --White: #FFFFFF;
        --Gray: #333333;
        --Violet: #561E77;
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
        list-style: none;
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
        background-color: var(--Green);
    }

    html{
        font-size: 62.5%;
    }

    body{
        background-color: var(--Black);
        color: var(--White);
    }
`