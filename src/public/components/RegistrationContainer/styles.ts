import styled from 'styled-components';
import bgImage from '../../../assets/registration-bg.svg';

export const RegistrationContainer = styled.div`
    height: 100vh;

    .form-container {
        float: left;
        max-width: 34.35rem;
        width: 100%;
        height: 100%;
        transition: transform 0.4s ease;
        background: var(--gray50);
        padding: 5rem 0;
    }

    .form-box {
        margin: 0 auto;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .logo {
            margin: 0 auto 4rem;
        }
    }

    .background-image {
        height: 100vh;
        background: url(${bgImage}) no-repeat,
            linear-gradient(
                126deg,
                rgba(7, 8, 15, 1) 0%,
                rgba(7, 32, 73, 1) 49%,
                rgba(15, 49, 114, 1) 85%
            );
    }

    @media screen and (max-width: 960px) {
        .form-container {
            right: 50%;
            transform: translateX(50%);
            position: absolute;
            padding: 5rem 2rem;

            .form-box {
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 600px) {
        .form-container {
            max-width: 100%;
        }
    }

    @media screen and (max-width: 360px) {
        .form-container {
            padding: 5rem 1rem;
        }
    }
`;
