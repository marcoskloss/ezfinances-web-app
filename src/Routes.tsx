import { Switch, RouteProps, Redirect, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { Home } from './pages/Home';
import { Login } from './pages/public/pages/Login';
import { SignUp } from './pages/public/pages/SignUp';

interface CustomRouteProps extends RouteProps {
    isPrivate?: boolean;
}

function CustomRoute({ isPrivate, ...rest }: CustomRouteProps) {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (isPrivate && !isAuthenticated) {
        return <Redirect to="/login" />;
    }

    if (!isPrivate && isAuthenticated) {
        return <Redirect to="/home" />;
    }

    return <Route {...rest} />;
}

function NotFound() {
    return <p>not found</p>;
}

export function Routes() {
    return (
        <Switch>
            <CustomRoute exact path="/login" component={Login} />
            <CustomRoute exact path="/sign-up" component={SignUp} />
            <CustomRoute isPrivate exact path="/home" component={Home} />
            <Route path="/" component={NotFound} />
        </Switch>
    );
}
