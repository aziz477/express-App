const express = require('express');
const app = express();

// midlewhare qui bloque l'accès aux pages html si la condition n'est pas remplie
RequestHour=(request,response,next)=>{
 let requestTime = new Date();
  if(requestTime.getHours()> 8 && requestTime.getHours()< 17 ){
      next()
  }

  else
      console.log("our office is not open now !");
      response.send("our office is not open now !");

};

app.get('/Home',RequestHour,(requeste,response)=>{

    response.sendFile(__dirname+'/public/Home.html');

});

app.get('/contact',RequestHour,(request,response)=>{

    response.sendFile(__dirname+'/public/contact.html');

});

app.get('/service',RequestHour,(request,response)=>{

    response.sendFile(__dirname+'/public/ourservices.html');

});

app.listen(3000, (err)=>{

    if(err) console.log('the server is not runnig')
    else console.log('server is running with successfully')

});

