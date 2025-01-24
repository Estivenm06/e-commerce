import React from "react";
import { Box, Card, CardContent, CardMedia, IconButton, Typography, Pagination, PaginationItem } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export const CardProduct = ({item, handleDeleteItem}) => {
    const truncateTitle = (title) => {
        const keywords = title.split(/\s+/).slice(0, 3).join(' ')
        return keywords
    }
    const truncateText = text => {
        if(text.length > 50){
            return text.substring(0, 50) + '...'
        }
        return text
    }
    const newItem = item.item
    return (
        <>
        <Card sx={{display: 'flex', width: '100%', borderRadius: '0.5em', marginTop: '1em', zIndex: '15em', backgroundColor: '#575757', color: 'white'}}>
            <Box sx={{margin: 'auto', width: '20%', marginLeft: '1em', display: {xs: 'none', sm: 'flex'}}}>
            <CardMedia component={'img'} sx={{height: 80, objectFit: 'contain', justifyContent: 'flex-start'}} image={newItem.image} alt={newItem.image}/>
            </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <CardContent sx={{flex: '1 0 auto', textAlign: {xs: 'center', sm: 'start'}}}>
                <Typography children={truncateTitle(newItem.title)} variant="h6"/>
                <Typography children={truncateText(newItem.description)} variant="subtitle1"/>
            </CardContent>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%'}} gap={'0.2em'}>
            <Typography variant="subtitle1" children={item.quantity}/>
            <Typography variant="subtitle1" children={`$${newItem.price}`}/>
            <IconButton children={<DeleteIcon/>} onClick={() => handleDeleteItem(item)} />
        </Box>
        </Card>
        </>
    )
}