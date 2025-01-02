const router = require('express').Router()
const {Cart} = require('../models')

router.get('/', async (req, res) => {
    const carts = await Cart.findAll({})
    res.json(carts)    
})

module.exports = router