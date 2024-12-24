import { ReactNode } from "react";

export interface AuthContextType {
    token: string | null;
    setToken: (newToken: string | null) => void;
    isTokenValid: () => boolean;
}


export interface AuthProviderProps {
    children: ReactNode;
}