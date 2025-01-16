import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import {Pagination,ImageList, ImageListItem} from '@mui/material'

export const Products = ({products, limit, displayedProducts, setCurrentPage, currentPage}) => {

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage)
    }
    return (
        <Box sx={{display: 'flex', marginTop: '4%', paddingInline: '2em', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Grid container spacing={2}>
            {displayedProducts.map(item => <Grid key={item.id} xs={12} md={4} lg={3}><p>{item.id}</p></Grid>)}
            </Grid>
            <Pagination count={Math.ceil(products.length / limit)} color='primary' page={currentPage} onChange={handleChangePage}/>
        </Box>
    )
}