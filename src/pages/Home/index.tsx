import { useAuth } from '../../context/AuthContext';

export function Home() {
    const { logout } = useAuth();

    return (
        <div>
            <h1>Home</h1>
            <button type="button" onClick={logout}>
                Bye
            </button>
        </div>
    );
}
