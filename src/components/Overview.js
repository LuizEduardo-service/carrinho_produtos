import React, { useState, useEffect, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

export default function Overview() {
    const [qtdItens, setQtdItens] = useState('')
    const [total, setTotal] = useState('')
    const products = useSelector(state => state.productStore.products)

    useEffect(() => {
        setQtdItens(products.reduce((total, item) => Number(total) + Number(item.qtd), 0))
        setTotal(products.reduce((total, item) => Number(total) + (Number(item.valor) * Number(item.qtd)), 0).toFixed(2))
    }, [products])
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 250,
                    height: 250,
                },
            }}
        >
            <Paper elevation={3}>
                <h4>
                    Resumo
                </h4>
                <p>Total: <b>R$ {total}</b></p>
                <p>Qtde itens: <b>{qtdItens}</b></p>
                <Button variant="outlined">Concluir</Button>
            </Paper >
        </Box>
    );
}
