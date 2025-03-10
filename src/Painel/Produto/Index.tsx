import React, { } from 'react';
import { TableContainer, Paper } from '@mui/material';
import { CadProduto } from './Model';
import DataListUI from '../../componentes/DataList/DataListUI';

const IndexView: React.FC = () => {
    const renderRowActions = (product: CadProduto) => (
        <div>
            <button onClick={() => alert(`Edit ${product.nome}`)}>Edit</button>
            <button onClick={() => alert(`Delete ${product.nome}`)}>Delete</button>
        </div>
    );


    return (
        <TableContainer component={Paper} style={{ marginTop: 20 }}>

            <Paper sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* <div style={{ padding: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" style={{ gap: '8px', backgroundColor: 'black' }} onClick={() => HandlerNavigateDetalheProduto(0)}>
                        <LuPackagePlus /> Adicionar produto
                    </Button>
                </div> */}
                <DataListUI<CadProduto>
                    url="/api/produtos"
                    onRowClick={(product) => alert(`View ${product.nome}`)}
                    renderRowActions={renderRowActions}
                />
            </Paper>

        </TableContainer>
    );
};

export default IndexView;
