import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import './FormEncontro.css'; // Importando o arquivo CSS

const FormEncontroView: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        cep: '',
        rua: '',
        numero: '',
        cidade: '',
        estado: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7018/api/cad-visitante', formData);
            console.log('Dados enviados com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <Container maxWidth="sm" className="form-container">
            <Typography variant="h4" component="h1" gutterBottom>
                Formulário de Encontro
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    label="Nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    autoComplete="nome"
                    autoFocus
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="telefone"
                    label="Telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    autoComplete="telefone"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="cep"
                    label="CEP"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                    autoComplete="cep"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="rua"
                    label="Rua"
                    name="rua"
                    value={formData.rua}
                    onChange={handleChange}
                    autoComplete="rua"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="numero"
                    label="Número"
                    name="numero"
                    value={formData.numero}
                    onChange={handleChange}
                    autoComplete="numero"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="cidade"
                    label="Cidade"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    autoComplete="cidade"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="estado"
                    label="Estado"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    autoComplete="estado"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: '#6200ea', '&:hover': { backgroundColor: '#3700b3' } }}
                >
                    Enviar
                </Button>
            </Box>
        </Container>
    );
};

export default FormEncontroView;