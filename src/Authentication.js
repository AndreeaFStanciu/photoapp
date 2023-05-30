import './Authentication.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import NavBar from './NavBar';

function Authentication() {
    return (
        <div className="Authentication">
            <NavBar />
            <SignIn />
            <SignUp />
            <AuthDetails />
        </div>
    );
}

export default Authentication;