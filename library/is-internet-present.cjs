const net=require("net");async function isInternetPresent(e="github.com/Axorax/is-internet-present.js"){let n=net.createConnection({host:e,port:80});return new Promise(e=>{n.on("connect",()=>{n.destroy(),e(!0)}),n.on("error",()=>{n.destroy(),e(!1)})})}module.exports=isInternetPresent