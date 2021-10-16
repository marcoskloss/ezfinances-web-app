import styled from 'styled-components';

interface ISmallProps {
    hasAcceentColor?: boolean;
    hasHover?: boolean;
}

export const RegistrationButton = styled.button`
    width: 100%;
    padding: 0.7rem 0;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    color: var(--gray50);
    background: var(--blue400);
    transition: background 0.2s;

    &:hover {
        background: var(--blue400-hover);
    }
`;

export const RegistrationForm = styled.form`
    width: 100%;

    .form-group {
        input {
            width: 100%;
        }
    }

    .form-group + .form-group {
        margin-top: 2.25rem;
    }

    .submit-box {
        margin-top: 2.25rem;
        text-align: right;
    }
`;

export const Small = styled.small<ISmallProps>`
    display: inline-block;
    margin-top: 0.8rem;
    cursor: pointer;
    color: ${(props) => (props.hasAcceentColor ? 'var(--blue400)' : 'inherit')};

    &:hover {
        color: ${(props) => (props.hasHover ? 'var(--blue400)' : '')};
    }
`;
