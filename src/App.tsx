import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';

import { GlobalStyle } from './styles/global';
import { AuthContextProvider } from './context/AuthContext';
import { Toast } from './components/Toast';

function App() {
    return (
        <BrowserRouter>
            <Toast />
            <GlobalStyle />
            <AuthContextProvider>
                <Routes />
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;
