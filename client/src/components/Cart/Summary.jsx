import React from "react";
import { Box, Divider, Typography, Button } from "@mui/material";

export const Summary = ({cart}) => {
    const subtotal = cart.map(cartItem => cartItem.item.price)
    const subtotal2 = subtotal.reduce((sum, a) => sum + a, 0)
    const total = cart.map(cartItem => cartItem.item.price * cartItem.quantity)
    const total2 = total.reduce((sum, a) => sum + a, 0) 
    return (
        <>
        <Typography children='Summary' color="white" variant="h5" sx={{fontWeight: 'bold', paddingBottom: '0.65em', alignItems: 'center'}}/>
        <Divider flexItem sx={{backgroundColor: 'white'}}/>
        <Box sx={{color: 'white', marginTop: '1em', display: 'flex', flexDirection: 'column', gap: '1em'}} >
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography children={`ITEMS`} variant="h6" sx={{fontWeight: 'bold'}}  />
            <Typography children={`${cart.length}`} variant="h6" sx={{fontWeight: 'bold'}}  />
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography children={`PRODUCTS`} variant="subtitle2"/>
            <Typography children={`$${subtotal2}`} variant="subtitle2"  />
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography children={`SHIPPING`} variant="subtitle2"/>
            <Typography children={`free`} variant="subtitle2"/>
            </Box>
            <Divider flexItem sx={{backgroundColor: 'white'}}/>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography children={`TOTAL AMOUNT`} variant="subtitle2" sx={{fontWeight: 'bold'}} fontSize={'small'}  />
            <Typography children={`$${total2}`} variant="subtitle2" sx={{fontWeight: 'bold'}} fontSize={'small'}  />
            </Box>
            <Button children={<Typography children='GO TO CHECKOUT' variant="button" fontSize={'small'} fontWeight={'bold'}/>} variant="contained" sx={{py: '0.7em'}}></Button>
        </Box>
        </>
    )
}