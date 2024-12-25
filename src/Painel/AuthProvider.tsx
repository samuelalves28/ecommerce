import { jwtDecode } from "jwt-decode";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AuthContextType, AuthProviderProps } from "./props";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const validateToken = (token: string | null): boolean => {
    if (!token) return false;

    try {
        const decodedToken: { exp: number } = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp > currentTime;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return false;
    }
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken_] = useState<string | null>(localStorage.getItem("token"));

    const setToken = (newToken: string | null) => {
        setToken_(newToken);
    };

    const isTokenValid = (): boolean => validateToken(token);

    useEffect(() => {
        if (token && isTokenValid()) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
            setToken_(null);
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
            isTokenValid,
        }),
        [token]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType | null => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        return null;
    }
    return context;
};

export default AuthProvider;