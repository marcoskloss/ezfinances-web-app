import React from 'react';
import * as S from './styles';
import logo from '../../../../assets/ezfinances-logo.svg';

interface RegistrationContainerProps {
    children: React.ReactNode;
}

export function RegistrationContainer({
    children,
}: RegistrationContainerProps) {
    return (
        <S.RegistrationContainer>
            <div className="form-container">
                <div className="form-box">
                    <img className="logo" src={logo} alt="ez.finances" />
                    {children}
                </div>
            </div>
            <div className="background-image" />
        </S.RegistrationContainer>
    );
}
