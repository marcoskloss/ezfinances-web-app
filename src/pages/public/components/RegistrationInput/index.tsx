import React from 'react';
import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

interface RegistrationInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    error?: string;
}

export function RegistrationInput({
    name,
    label,
    onChange,
    error,
    placeholder,
    ...rest
}: RegistrationInputProps) {
    const [hasFocus, setHasFocus] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleChange(ev: React.ChangeEvent<HTMLInputElement>): void {
        if (ev.target.value) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
    }

    return (
        <S.RegistrationInputContainer
            label={label}
            hasFocus={hasFocus}
            isFilled={isFilled}
        >
            <S.RegistrationInput
                name={name}
                error={!!error}
                placeholder={error || placeholder}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                onChange={(ev) => {
                    handleChange(ev);
                    onChange && onChange(ev);
                }}
                {...rest}
            />
        </S.RegistrationInputContainer>
    );
}
