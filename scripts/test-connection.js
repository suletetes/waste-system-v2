import https from "https";

const url = "https://api.mapbox.com/status";

console.log(`Testing connectivity to ${url}...`);

const req = https.get(url, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (e) => {
  console.error(`PROBLEM WITH REQUEST: ${e.message}`);
});

req.end();
