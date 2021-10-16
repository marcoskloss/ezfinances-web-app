import { RegistrationButton, RegistrationContainer } from './styles';
import logo from '../../../assets/ezfinances-logo.svg';
import { RegistrationInput } from '../../components/RegistrationInput';

export function SignUp() {
    return (
        <RegistrationContainer>
            <div className="form-container">
                <div className="form-box">
                    <img className="logo" src={logo} alt="ez.finances" />
                    <form>
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
                            <RegistrationButton type="button">
                                Registrar
                            </RegistrationButton>
                            <a href="/">
                                <small>Já possui uma conta?</small>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="background-image" />
        </RegistrationContainer>
    );
}
