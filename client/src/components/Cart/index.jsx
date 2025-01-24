import React, {useState} from "react";
import { CardProduct } from "./Card.jsx";
import { Header } from "./Header.jsx";
import { Container, Box, Typography, Divider } from "@mui/material";
import { Summary } from "./Summary.jsx";
const Cart = ({ cart, setCart }) => {
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
        return cart.sort((a,b) => b.item.price - a.item.price)
      case 'quantity':
        return cart.sort((a,b) => b.quantity - a.quantity)
      case 'rate':
        return cart.sort((a,b) => b.item.rating.rate - a.item.rating.rate)
      default: 
        return cart
    }
  }

  const handleDeleteItem = (item) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(cartItem => cartItem.item.id !== item.item.id)
      localStorage.setItem('userCart', JSON.stringify(updatedCart))

      return updatedCart
    })
  }

  const cartByOption = cartSorted(option)

  return (
    <Container maxWidth='lg' sx={{ my: '2em', py: '2em' }}>
      <Box sx={{display: 'flex', paddingInline: '2em'}}>
        <Box sx={{flex: '4', padding: '2em',backgroundColor: '#575757', borderTopLeftRadius: '1em', borderBottomLeftRadius: '1em'}}>
          <Header cart={cart} open={open} handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} option={option} handleOption={handleOption}/>
          {cart.length === 0 ? <Typography variant='h6' children='You have not products selected yet.' sx={{color: 'white', textAlign: 'center'}}/> : cartByOption.map((item, id)=> <CardProduct item={item} key={id} handleDeleteItem={handleDeleteItem} />)}
        </Box>
        <Box sx={{flex: '1', backgroundColor: '#3A3A3A', padding: '2em'}}>
          {cart.length === 0 ? <Typography variant='h6' children='You have not products selected yet.' sx={{color: 'white', textAlign: 'center'}}/> : <Summary cart={cart}/>}
        </Box>
      </Box>
    </Container>
  )
  ;
};

export default Cart;
