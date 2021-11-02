interface Inputs {
    password?: string;
    name?: string;
    email?: string;
}

export type Error = Record<any, string>;

function inputs({ email, name, password }: Inputs): Error | null {
    const error: Error = {};

    if (!email) {
        error.email = 'O e-mail é obrigatório!';
    }

    if (!password) {
        error.password = 'A senha é obrigatória!';
    }

    if (!name) {
        error.name = 'O nome é obrigatório!';
    }

    return Object.keys(error).length > 0 ? error : null;
}

export const validations = {
    inputs,
};
