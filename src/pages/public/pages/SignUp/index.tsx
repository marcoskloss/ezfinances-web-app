import { RegistrationContainer } from '../../components/RegistrationContainer';
import { RegistrationInput } from '../../components/RegistrationInput';
import { Link } from 'react-router-dom';
import * as S from '../../styles/registration';
import { useAuth } from '../../../../context/AuthContext';
import { useState } from 'react';

export function SignUp() {
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const { signUp } = useAuth();

    async function handleSubmit(
        ev: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
        ev.preventDefault();

        await signUp({
            email,
            name,
            password,
        });
    }

    return (
        <RegistrationContainer>
            <S.RegistrationForm onSubmit={handleSubmit}>
                <div className="form-group">
                    <RegistrationInput
                        placeholder="nome"
                        label="nome"
                        name="name"
                        autoComplete="off"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                    />
                </div>

                <div className="form-group">
                    <RegistrationInput
                        placeholder="email"
                        name="email"
                        label="email"
                        type="email"
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
