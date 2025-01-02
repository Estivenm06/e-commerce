const router = require('express').Router()
const {User} = require('../models')
const {tokenExtractor} = require('../utils/middleware.js')

router.post('/', tokenExtractor, async (req, res) => {
    try{
        const user = await User.findByPk(req.decodedToken.id)
        
    }catch(error){
        return res.status(400).json({error: 'An error occurred trying to log out.'})
    }
})

module.exports = router