import React from 'react';
import Button from '@mui/material/Button';
import ReceiptIcon from '@mui/icons-material/Receipt';
import './OrderButton.scss'

export default function OrderButton({ order }) {


    const onButtonClick = () => {
        console.log(order)
    }

    return (
        order?.length > 0 &&
        <span className="order">
            <Button onClick={() => onButtonClick()} variant="contained"
                size="medium" startIcon={<ReceiptIcon />}>
                Ver pedido
            </Button>
        </span>
    )
}


