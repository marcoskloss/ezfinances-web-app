import { Switch, RouteProps, Redirect, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './public/pages/Login';
import { SignUp } from './public/pages/SignUp';

interface CustomRouteProps extends RouteProps {
    isPrivate?: boolean;
}

function CustomRoute({ isPrivate, ...rest }: CustomRouteProps) {
    const isAuthenticated = false;

    if (isPrivate && !isAuthenticated) {
        return <Redirect to="/login" />;
    }

    if (!isPrivate && isAuthenticated) {
        return <Redirect to="/home" />;
    }

    return <Route {...rest} />;
}

export function Routes() {
    return (
        <Switch>
            <CustomRoute exact path="/login" component={Login} />
            <CustomRoute exact path="/sign-up" component={SignUp} />
            <CustomRoute isPrivate exact path="/home" component={Home} />
            <CustomRoute exact path="/" component={SignUp} />
        </Switch>
    );
}
