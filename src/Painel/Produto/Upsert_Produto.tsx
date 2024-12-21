
import React from 'react';
import { CadProduto } from './Model';
import CrudFormUI from '../../componentes/Form/CrudFormUI';


const EditarProdutoView: React.FC = () => {
    const initialValues: CadProduto = {
        id: 0,
        nome: '',
        descricao: '',
        preco: 0,
        quantidade: 0,
    };

    const fields = [
        { name: 'nome', label: 'Nome do Produto' },
        { name: 'descricao', label: 'Descrição', multiline: true, rows: 4 },
        { name: 'preco', label: 'Preço', type: 'number' },
        { name: 'quantidade', label: 'Quantidade', type: 'number' },
    ];

    return (
        <CrudFormUI<CadProduto>
            initialValues={initialValues}
            fields={fields}
            endpoint="/api/adm/cad-produto"
            title='Produto'
            onSuccessMessage="Produto salvo com sucesso."
        />
    );
};

export default EditarProdutoView;
