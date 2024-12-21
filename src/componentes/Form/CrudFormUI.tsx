/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useCallback } from 'react';
import { TextField, Button, Paper, Typography, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { GrFormPreviousLink } from "react-icons/gr";
import { useNavigate, useParams } from 'react-router-dom';
import api from "../../connections/Api";
import { FormComponentProps } from './Props';
import styles from '../CSS/CrudFormUI.module.css'; // Importando o módulo CSS

const CrudFormUI = <T extends Record<string, any>>({
    initialValues,
    fields,
    title,
    endpoint,
    onSuccessMessage,
}: FormComponentProps<T>): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(true);
    const [formValues, setFormValues] = useState<T>(initialValues);

    const fetchData = useCallback(async () => {
        if (id !== 'undefined') {
            setLoading(true);
            try {
                const response = await api.get(`${endpoint}/${id}`);
                setFormValues(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, [id, endpoint]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();
        setLoading(true);

        try {
            if (id !== 'undefined') {
                await api.put(`${endpoint}`, { id, ...formValues });
            } else {
                await api.post(`${endpoint}`, formValues);
            }
            alert(onSuccessMessage || 'Operação realizada com sucesso.');
            navigate(-1);
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Button variant="contained" className={styles.backButton} onClick={() => navigate(-1)}>
                    <GrFormPreviousLink /> Voltar
                </Button>
            </div>
            <Paper className={styles.paper}>
                {loading ? (
                    <div className={styles.loading}>
                        <CircularProgress />
                    </div>
                ) : (
                    <>
                        <Typography variant="h6" className={styles.title}>
                            {id !== 'undefined' ? `Editar` : 'Cadastrar'} {title}
                        </Typography>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <Grid container spacing={2} flexDirection="column">
                                {fields.map((field, index) => (
                                    <Grid key={index}>
                                        <TextField
                                            fullWidth
                                            label={field.label}
                                            name={field.name}
                                            type={field.type || 'text'}
                                            value={formValues[field.name] || ''}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            multiline={field.multiline || false}
                                            rows={field.rows || 1}
                                        />
                                    </Grid>
                                ))}
                                <Grid className={styles.submitButtonContainer}>
                                    <Button type="submit" variant="contained" color="primary" className={styles.submitButton}>
                                        {id !== 'undefined' ? 'Salvar' : 'Criar'} {title}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </>
                )}
            </Paper>
        </div>
    );
};

export default CrudFormUI;
