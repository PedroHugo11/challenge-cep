import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #F7F7F9;
        
        --border-white: #E5E5E5;
        --text-font: #4B5563;

        --white: #ffffff;
        --gray: #4B5563;
        --light-gray: #CDCFD7

        --text-head: #111827;
        --text-table: #6B7280;
        
        --button: #F3F7FA;
        --text-button: #6B7280;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: var(--background);
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .Toastify__toast {
        border-radius: 4px;
        border: solid 2px #FFC961;
        background-color: #FFF4DF;
        padding: 0px;
    }
    .Toastify__progress-bar {
        background-color: #FFC961;
    }

    .toastify-font{ 
        font-size: 0.9rem;
        font-weight: 400;
        color: #9B7224;
    }


`