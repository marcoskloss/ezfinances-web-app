import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
    --blue400: #0265C1;
        --gray50: #F9FAFB;
        --gray200: #E6E6E6;
        --gray300: #B7C3CC;
        --gray400: #46535C;
        --gray500: #2C3135;
        --purple600: #2C2154;
        --black: #1B1D1F;
        --red-warning: #C10202;

        @media screen and (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media screen and (max-with: 720px) {
            font-size: 87.5%;
        }
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body, input, textarea, button, p, span, small {
        font-family: 'Nunito', sans-serif;
        color: var(--gray500);
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Arimo', sans-serif;
        font-weight: 700;
    }

    strong {
        font-weight: 700;
    } 
`;
