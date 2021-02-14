const jwt = require('jsonwebtoken');
require('dotenv').config();
const TOKEN = (process.env.TOKEN_SECRET || "asassasasassasasdddd");

module.exports =  async function (request, result, next){
    const token = request.header('auth-token');
    if(!token) return result.status(401).send('Access denied');

    try{
        const verified = jwt.verify(token,TOKEN);
        
        request.user = verified;
        next();

    } catch(err){
        result.status(400).send({ msg: 'Error checking token: ', err: err});
    }
}
