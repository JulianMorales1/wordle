
const { application } = require('express');
const express = require('express');

const app = express()


app.listen(3001,function(){
    console.log('server is running at port: 3001')
})

app.get('/solutions',function(request,response){
    response.send('you will get json data from here')
})