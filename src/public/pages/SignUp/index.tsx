import { RegistrationContainer } from '../../components/RegistrationContainer';
import { RegistrationInput } from '../../components/RegistrationInput';
import { Link } from 'react-router-dom';
import * as S from '../../styles/registration';

export function SignUp() {
    return (
        <RegistrationContainer>
            <S.RegistrationForm>
                <div className="form-group">
                    <RegistrationInput
                        placeholder="nome"
                        label="nome"
                        name="name"
                    />
                </div>

                <div className="form-group">
                    <RegistrationInput
                        placeholder="email"
                        name="email"
                        label="email"
                        type="email"
                    />
                </div>

                <div className="form-group">
                    <RegistrationInput
                        placeholder="senha"
                        label="senha"
                        name="password"
                        type="password"
                    />
                </div>

                <div className="submit-box">
                    <S.RegistrationButton type="button">
                        Registrar
                    </S.RegistrationButton>
                    <Link to="/login">
                        <S.Small hasAcceentColor>Já possui uma conta?</S.Small>
                    </Link>
                </div>
            </S.RegistrationForm>
        </RegistrationContainer>
    );
}
