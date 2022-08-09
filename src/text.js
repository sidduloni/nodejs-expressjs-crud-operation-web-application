var http = require("http")


http.createServer(function(req, res) {
    res.writeHead(200, 'Response', {'Content-Type': 'text/html'})
    res.write(`Welcome to Node js Tutorials:<br>
    * Nodejs is runtime environment javascript, which works on independent m/c.
    * Nodejs is not prefare to use when a client requests for CPU Intensive work 
    <br>
    * For example Calculation of Factorial number, some complex calculations.
    <br>
    * Nodejs provides 2 concepts: 
    <br>
    1: Asynchronious <br>
    2: Non-blocking i/o: <br>The single thread will not wait for the single request,
    it is always accessible.
    <br>
    Node js is mainly used for i/o Intensive work: DB, FS, network or external system but not CPU Intensive.
    <br>
    Nodejs uses concept of libuv. it is a library which provides non blocking i/o. It is built using C language
    which uses the system kernal, and Kernal has miltiple threads, nodejs not using multiple threds but behind 
    the scenes kernal using multiple threads concept. So the workers are the threads. and this is how nodejs
    makes fast and flexible. and scallable.
    `)
    res.end()
}).listen(8080)


