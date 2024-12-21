import React, { useState } from "react";
import api from "../../connections/Api";
import { Button, TextField, Typography, Container, Paper } from "@mui/material";
import styles from '../CSS/LoginView.module.css';

const LoginView: React.FC = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await api.post("api/auth/login", { email, senha });

        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);  // Armazena o token
            window.location.href = '/app';
        } else {
            alert('Login falhou: ' + (await response.data).message);
        }
    };

    return (
        <Container className={styles.container}>
            <Paper className={styles.paper}>
                <Typography variant="h5" className={styles.title}>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        placeholder="Usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        required
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        variant="outlined"
                        required
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        className={styles.button}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default LoginView;