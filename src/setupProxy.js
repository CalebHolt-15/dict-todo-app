const { createProxyMiddleware } = require("http-proxy-middleware")
console.log("proxy")

module.exports = function (app) {
  console.log("proxy")
  app.use(
    "/api1",
    createProxyMiddleware({
      target: "http://localhost:8089",
      changeOrigin: true
    })
  )
  app.use(
    "/api2",
    createProxyMiddleware({
      target: "http://localhost:8090",
      changeOrigin: true
    })
  )
}
