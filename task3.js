const http = require("http");

http.createServer((request,  response) => {
    if(request.url === "/is-93-002"){
        response.end("Bekberov Selim | 2 course | IS-93"); 
    } else{
        response.end("Error");
    }
}).listen(3000, () => {
    console.log("Port 3000");
});