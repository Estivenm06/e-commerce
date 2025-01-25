'use scric';

const jwt = require('jsonwebtoken')
const {SECRET} =require('./config.cjs')

const tokenExtractor = async (req, res, next) => {
    try{
        const authorization = req.get('authorization')
        if(authorization && authorization.toLowerCase().startsWith('bearer')){
            try{
                req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
            }catch{
                return res.status(401).json({error: 'token invalid'})
            }
        }else{
            return res.status(401).json({error: 'token missing'})
        }
    }catch(error){
        next(error)
    }
}

module.exports = {tokenExtractor}