function bodyparser(req, callback){
  let body ='';
  req.on('data', (chunck) => {
      body += chunck;
  })

  req.on('end', () => {
      body = JSON.parse(body);
      req.body = body;
      callback();
  })
};

module.exports = bodyparser;