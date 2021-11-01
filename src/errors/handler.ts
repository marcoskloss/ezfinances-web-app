import toast from 'react-hot-toast';

export function errorHandler(err: unknown): void {
    const error = err as any;

    if (error?.isAxiosError) {
        toast.error(error.response.data.error, {
            position: 'top-center',
            duration: 3500,
        });
    } else {
        toast.error('Erro interno!', {
            position: 'top-center',
            duration: 3500,
        });
        console.log(error);
    }
}
