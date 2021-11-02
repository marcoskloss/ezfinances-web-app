import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../styles/registration';
import { RegistrationContainer } from '../../components/RegistrationContainer';
import { RegistrationInput } from '../../components/RegistrationInput';
import { useAuth } from '../../../../context/AuthContext';
import { Error, validations } from './validations';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState<Error | null>(null);

    const { login } = useAuth();

    async function handleSubmit(
        ev: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
        ev.preventDefault();

        const errors = validations.inputs({ password, email });
        setError(errors);

        if (errors) {
            return;
        }

        await login({ email, password });
    }

    function clearInputError(name: string): void {
        setError((prevState) => {
            return { ...prevState, [name]: '' };
        });
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
                        error={error?.['email']}
                        onClick={() => clearInputError('email')}
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
                        error={error?.['password']}
                        onClick={() => clearInputError('password')}
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
