import styled from "styled-components";

export const Container = styled.div `

    padding: 1rem 1rem;
    text-align: left;

    div {
        color: var(--text-font);
        display: flex;
        text-align:center;
        

        p {
            font-weight: 600;
            display: inline;
            margin: 0.2rem 0;
        }
    
        input {
            margin-left:0.8rem;
            padding: 0 1rem;
            border-radius: 0.25rem;
            background: var(--white);
            border: 2px solid var(--gray);
            font-weight: 400;
            font-size: 1rem;
            width: 11rem;
            display: inline;
    
            &::placeholder {
                color: var(--text-font);
            }
    
            &:focus {
                outline: none !important;
                border-color: var(--gray);
                
            }
        }

        button {
            display: inline;
            margin-left: 0.5rem;
            padding: 0.2rem 0.5rem 0.2rem 0.5rem;
            background: var(--gray);
            color: #fff;
            border-radius: 0.25rem;
            border: 0;
            font-size: 0.9rem;

            &::hover {
                filter: brightness(0.9);
            }
        }

    }

    hr {
        margin-top: 1.5rem;
        border: 0.5px solid #CDCFD7;
    }

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {   
            color: var(--text-head);
            font-weight: 600;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            color: var(--text-table);

            button {
                background: var(--button);
                color: var(--text-button);
                padding: 0.4rem 0.6rem;
                border-radius: 0.3rem;
                border: 0;
                font-weight: 600;
            }
        }
    }
    
`;

export const ButtonToast = styled.button `
    border: 0px !important;
    background: transparent !important;
    color: #D0B176 !important;
    font-weight: 400 !important;
    font-size: 0.8rem !important;
`;