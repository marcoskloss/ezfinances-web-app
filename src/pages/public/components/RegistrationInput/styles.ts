import styled from 'styled-components';

interface RegistrationInputContainerProps {
    hasFocus: boolean;
    isFilled: boolean;
    label: string;
}

interface RegistrationInputProps {
    error?: boolean;
}

export const RegistrationInput = styled.input<RegistrationInputProps>`
    padding: 0.7rem;
    border-radius: 4px;

    ${(props) =>
        props.error
            ? 'border: 1px solid var(--red-warning)'
            : 'border: 1px solid var(--gray300)'};

    ${(props) =>
        props.error ? `&::placeholder { color: var(--red-warning); }` : ''};

    font-size: 1rem;
    background: var(--gray50);

    &:focus {
        outline-width: 0;
        border: 1px solid var(--purple600);
        &::placeholder {
            color: transparent;
        }
    }
`;

export const RegistrationInputContainer = styled.div<RegistrationInputContainerProps>`
    position: relative;

    &::before {
        content: '${({ label }) => label}';
        position: absolute;
        top: -10px;
        left: 15px;
        font-size: 0.85rem;
        background: var(--gray50);
        padding: 0 8px;
        transition: opacity 0.1s;
        opacity: ${(props) => (props.hasFocus || props.isFilled ? 1 : 0)};
    }
`;
