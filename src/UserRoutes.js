import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

const UserRoutes = () => {
    return(
        <Suspense fallback={<p>...Loading</p>}>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<HomePage />}/>
                </Route>
                
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                </Route>
                
            </Routes>
        </Suspense>
    )
}

export default UserRoutes; 