import React from "react";
import { Box, Card, CardContent, CardMedia, IconButton, Typography,  } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export const CardProduct = ({item}) => {
    const truncateText = (title) => {
        const keywords = title.split(/\s+/).slice(0, 3).join(' ')
        return keywords
    }
    const newItem = item.item
    return (
        <Card sx={{display: 'flex', width: '50%', borderRadius: '0.5em', marginTop: '1em', zIndex: '1em', backgroundColor: '#5C5F6B', color: 'white'}}>
            <Box sx={{margin: 'auto', width: '20%', marginLeft: '1em'}}>
            <CardMedia component={'img'} sx={{height: 80, objectFit: 'contain', justifyContent: 'flex-start'}} image={newItem.image} alt={newItem.image}/>
            </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <CardContent sx={{flex: '1 0 auto'}}>
                <Typography children={truncateText(newItem.title)} variant="h6"/>
                <Typography children={truncateText(newItem.description)} variant="subtitle1"/>
            </CardContent>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', rowGap: '2em', justifyContent: 'space-evenly', alignItems: 'center', width: '100%'}}>
            <Typography variant="subtitle1" children={item.quantity}/>
            <Typography variant="subtitle1" children={`$${newItem.price}`}/>
            <IconButton children={<DeleteIcon/>} />
                        
        </Box>
        </Card>
    )
}