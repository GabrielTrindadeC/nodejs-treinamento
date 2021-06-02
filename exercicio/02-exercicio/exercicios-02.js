const http = require('http');
const file = require('fs');

const server = http.createServer(
    (request, response ) => {
        let pagina = '';
        if (request.url === '/') {
            pagina = 'index.html';
        }else if(request.url === '/fotos'){
            pagina = 'fotos.html';
        }else if(request.url === '/produtos'){
            pagina = 'produtos.html';
        }else {
            arquivo = 'erro.html';
        }
        if (file.existsSync(pagina)) {
            file.readFile(pagina, 
                (erro, dados) => {
                    if (erro) {
                        throw erro;
                    } else {
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        response.write(dados);
                        response.end();
                    }
                }
            );
        } else {
            response.writeHead(500, {'Content-type' : 'text/html'});
            response.write(`A pagina "${pagina}" não foi encontrada`);
            response.end();
        }
    }
);
server.listen(3000, 
    () => {
        console.log("O Servidor está na porta 3000")
    }
    );
    