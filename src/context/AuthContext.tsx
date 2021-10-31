import {
    createContext,
    useCallback,
    useContext,
    useState,
    useEffect,
} from 'react';
import { useHistory } from 'react-router';
import { Toast } from '../components/Toast';
import {
    api,
    setDefaultAuthorizationHeader,
    TOKEN_STORAGE_KEY,
} from '../services/api';
import { localStorage } from '../services/localStorage';

interface UserLoginCredentials {
    email: string;
    password: string;
}

interface UserSignUpCredentials extends UserLoginCredentials {
    name: string;
}

interface AuthContextProps {
    signUp: (params: UserSignUpCredentials) => Promise<void>;
    login: (params: UserLoginCredentials) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    loading: boolean;
}
const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProviderProps {
    children: React.ReactNode;
}
export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const history = useHistory();
    const [loading, setLoading] = useState(true);

    async function signUp({
        email,
        name,
        password,
    }: UserSignUpCredentials): Promise<void> {
        try {
            setLoading(true);

            await api.post('/users/create', {
                email,
                name,
                password,
            });

            await login({ email, password });
        } catch (error) {
            console.log(error);
            Toast('Erro ao cadastrar :(');
        } finally {
            setLoading(false);
        }
    }

    async function login({
        password,
        email,
    }: UserLoginCredentials): Promise<void> {
        try {
            setLoading(true);

            const {
                data: { token },
            } = await api.post<any>('/users/authenticate', {
                password,
                email,
            });

            setIsAuthenticated(true);

            setDefaultAuthorizationHeader(token);
            localStorage.set(TOKEN_STORAGE_KEY, token);

            history.push('/home');
        } catch (error) {
            console.log(error);
            Toast('Erro ao fazer login :<');
        } finally {
            setLoading(false);
        }
    }

    const logout = useCallback((): void => {
        setIsAuthenticated(false);
        localStorage.remove(TOKEN_STORAGE_KEY);
        setDefaultAuthorizationHeader(null);
        history.push('/login');
    }, [history]);

    useEffect(() => {
        const token = localStorage.get(TOKEN_STORAGE_KEY);

        if (token) {
            setDefaultAuthorizationHeader(token);
            setIsAuthenticated(true);
        }

        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signUp,
                login,
                isAuthenticated,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextProps {
    return useContext(AuthContext);
}
