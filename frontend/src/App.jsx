import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';

import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import WatchPage from './Pages/WatchPage';
import SearchPage from './Pages/SearchPage';
import SearchHistoryPage from './Pages/SearchHistoryPage';

import Footer from './components/Footer';

import { useAuthStore } from './store/authUser';

function App() {
    const { user, authCheck, isCheckingAuth } = useAuthStore();

    useEffect(() => {
        authCheck();
    }, [authCheck]);

    if (isCheckingAuth) {
        return (
            <div className="h-screen">
                <div className="flex justify-center items-center bg-black h-full">
                    <Loader className="animate-spin text-red-600 size-10" />
                </div>
            </div>
        );
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/login"
                    element={!user ? <LoginPage /> : <Navigate to={'/'} />}
                />
                <Route
                    path="/signup"
                    element={!user ? <SignUpPage /> : <Navigate to={'/'} />}
                />
                <Route
                    path="/watch/:id"
                    element={user ? <WatchPage /> : <Navigate to={'/login'} />}
                />
                <Route
                    path="/search"
                    element={user ? <SearchPage /> : <Navigate to={'/login'} />}
                />
                <Route
                    path="/history"
                    element={
                        user ? (
                            <SearchHistoryPage />
                        ) : (
                            <Navigate to={'/login'} />
                        )
                    }
                />
            </Routes>
            <Footer />

            <Toaster />
        </>
    );
}

export default App;
