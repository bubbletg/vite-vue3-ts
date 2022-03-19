const http = require('http')
const server = http.createServer((req, res) => {
  // 定义路由
  const method = req.method //
  const url = req.url
  const pathname = url.split('?')[0]
  console.log('🚀 ~ file: index.js ~ line 7 ~ server ~ pathname', pathname)
  // 根据 method 和 pathname 定义路由
  if (method === 'GET' && pathname === 'xxx') {
    req.end('xxx路由')
  }
  res.end('hello,world')
})
server.listen('8888')
