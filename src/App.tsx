import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import { GlobalStyle } from './styles/global';
import { AuthContextProvider } from './context/AuthContext';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AuthContextProvider>
                <Routes />
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;
