import { RegistrationContainer } from '../../components/RegistrationContainer';
import { RegistrationInput } from '../../components/RegistrationInput';
import { Link } from 'react-router-dom';
import * as S from '../../styles/registration';
import { useAuth } from '../../../../context/AuthContext';
import { useState } from 'react';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    async function handleSubmit(
        ev: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
        ev.preventDefault();

        await login({ email, password });
    }

    return (
        <RegistrationContainer>
            <S.RegistrationForm onSubmit={handleSubmit}>
                <div className="form-group">
                    <RegistrationInput
                        placeholder="email"
                        name="email"
                        label="email"
                        type="email"
                        className="form-group"
                        autoComplete="off"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                </div>

                <div className="form-group">
                    <RegistrationInput
                        placeholder="senha"
                        label="senha"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                </div>

                <div className="submit-box">
                    <S.RegistrationButton type="submit">
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
