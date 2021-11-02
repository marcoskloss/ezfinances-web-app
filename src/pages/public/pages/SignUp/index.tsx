import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../styles/registration';
import { RegistrationContainer } from '../../components/RegistrationContainer';
import { RegistrationInput } from '../../components/RegistrationInput';
import { useAuth } from '../../../../context/AuthContext';
import { validations, Error } from './validations';

export function SignUp() {
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState<Error | null>(null);

    const { signUp } = useAuth();

    async function handleSubmit(
        ev: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
        ev.preventDefault();

        const errors = validations.inputs({ email, password, name });
        setError(errors);

        if (errors) {
            return;
        }

        await signUp({
            email,
            name,
            password,
        });
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
                        placeholder="nome"
                        label="nome"
                        name="name"
                        autoComplete="off"
                        value={name}
                        error={error?.['name']}
                        onClick={() => clearInputError('name')}
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
