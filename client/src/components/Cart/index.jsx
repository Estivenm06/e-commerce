import React, {useState} from "react";
import { CardProduct } from "./Card.jsx";
import { Header } from "./Header.jsx";
import { Container, Box, Typography } from "@mui/material";

const Cart = ({ cart }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [option, setOption] = useState('price')

  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOption = (event) => {
    setOption(event.target.value)
  }

  const cartSorted = (option) => {
    switch(option){
      case 'price':
        return cart.sort(({item}) => Math.max(item.price))
      case 'quantity':
        return cart.sort(({quantity}) => Math.max(quantity))
      default: 
        return cart
    }
  }

  const cartByOption = cartSorted(option)

  return (
    <Container maxWidth='lg' sx={{backgroundColor: '#5C5F6B', my: '2em', borderRadius: '0.5em', py: '2em'}}>
      <Box sx={{paddingInline: '2em'}}>
        <Header cart={cart} open={open} handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} option={option} handleOption={handleOption}/>
        {cart.length === 0 ? <Typography variant='h6' children='You have not products selected yet.' sx={{color: 'white', textAlign: 'center'}}/> : cartByOption.map((item, id)=> <CardProduct item={item} key={id} />)}
      </Box>
    </Container>
  )
  ;
};

export default Cart;
