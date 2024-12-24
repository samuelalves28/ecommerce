import React, { useState } from "react";
import api from "../../connections/Api";
import { Button, TextField, Typography, Container, Paper } from "@mui/material";
import styles from './LoginView.module.css';
import logo from '../../assets/logo.png';

const LoginView: React.FC = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    document.body.classList.add(styles.AppBody);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await api.post("api/auth/login", { email, senha });

        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            window.location.href = '/painel/dashboard';
        } else {
            alert('Login falhou: ' + (await response.data).message);
        }
    };

    return (
        <Container className={styles.container}>
            <Paper className={styles.paper}>
                <Typography className={styles.title}>
                    <img src={logo} alt="Logo" width='100%' />
                </Typography>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <TextField
                        type="text"
                        placeholder="Usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        required
                        fullWidth
                        className={styles.textField}
                        InputProps={{
                            style: { color: '#fff' },
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                    />
                    <TextField
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        variant="outlined"
                        required
                        fullWidth
                        className={styles.textField}
                        InputProps={{
                            style: { color: '#fff' },
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                    />
                    <Button type="submit" variant="contained" fullWidth className={styles.button}>
                        Login
                    </Button>
                </form>

                <Button type="submit" variant="outlined" fullWidth className={styles.buttonEsqueciSenha}>
                    Esqueci minha senha ?
                </Button>
            </Paper>
        </Container >
    );
};

export default LoginView;