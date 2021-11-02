import { api } from '../../services/api';

interface CreateUserData {
    email: string;
    name: string;
    password: string;
}
export async function createUser(userData: CreateUserData): Promise<void> {
    api.post('/users/create', {
        ...userData,
    });
}

interface AuthenticateUserData {
    password: string;
    email: string;
}

export async function authenticateUser(
    authenticateUserData: AuthenticateUserData
): Promise<string> {
    const response = await api.post<{ token: string }>('/users/authenticate', {
        ...authenticateUserData,
    });

    return response.data.token;
}
