import { RegistrationContainer } from '../../components/RegistrationContainer';
import { RegistrationInput } from '../../components/RegistrationInput';
import { Link } from 'react-router-dom';
import * as S from '../../styles/registration';

export function Login() {
    return (
        <RegistrationContainer>
            <S.RegistrationForm>
                <div className="form-group">
                    <RegistrationInput
                        placeholder="email"
                        name="email"
                        label="email"
                        type="email"
                        className="form-group"
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
                        Entrar
                    </S.RegistrationButton>
                    <Link to="/forgot-password">
                        <S.Small hasAcceentColor={false} hasHover>
                            esqueceu sua senha?
                        </S.Small>
                    </Link>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/sign-up">
                            <S.Small hasAcceentColor>
                                Ainda não possui uma conta?
                            </S.Small>
                        </Link>
                    </div>
                </div>
            </S.RegistrationForm>
        </RegistrationContainer>
    );
}
