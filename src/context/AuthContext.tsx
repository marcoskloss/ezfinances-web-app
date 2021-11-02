import {
    createContext,
    useCallback,
    useContext,
    useState,
    useEffect,
} from 'react';
import { useHistory } from 'react-router';
import { errorHandler } from '../errors/handler';
import {
    setDefaultAuthorizationHeader,
    TOKEN_STORAGE_KEY,
} from '../services/api';
import { localStorage } from '../services/localStorage';
import * as request from '../http/requests';

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

            await request.createUser({
                email,
                name,
                password,
            });

            await login({ email, password });
        } catch (error) {
            errorHandler(error);
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

            const token = await request.authenticateUser({
                email,
                password,
            });

            setIsAuthenticated(true);

            setDefaultAuthorizationHeader(token);
            localStorage.set(TOKEN_STORAGE_KEY, token);

            history.push('/home');
        } catch (error) {
            errorHandler(error);
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
