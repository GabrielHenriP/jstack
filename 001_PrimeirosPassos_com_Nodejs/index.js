const http = require('http')
const url = require('url');
const bodyparser = require('./helpers/bodyParser');

const bodyPaser = require('./helpers/bodyParser');
const routes = require('./routes')


const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url,true)
    console.log(`request method: ${req.method} | endpoint: ${parseUrl.pathname}`)

    let { pathname } = parseUrl;
    let id = null;

    const splitEndPoint = pathname.split('/').filter(Boolean)

    if(splitEndPoint.length > 1){
        pathname = `/${splitEndPoint[0]}/:id`;
        id = splitEndPoint[1];
    }

    const route = routes.find((routeObj) => (
        routeObj.endPoint === pathname && routeObj.method === req.method
    ))

    if(route){
        req.query = parseUrl.query;
        req.params = { id };

        res.send = (statusCode, body) => {
            res.writeHead(statusCode, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(body))
        };

        if(['POST', 'PUT', 'PATCH'].includes(req.method)){
            bodyparser(req, () => route.handler(req,res));
        }else {
            route.handler(req,res)
        }
        
    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`Cannot ${req.method} ${parseUrl.pathname}`)
    }

   
});

server.listen(3000, () => console.log(' Server started at http://localhost:3000'))