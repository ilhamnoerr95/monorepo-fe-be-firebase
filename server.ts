// server.js
const { spawn } = require("child_process");
const path = require("path");

// running backend
const backend = spawn("yarn", ["server:dev"], {
	cwd: path.join(__dirname, "/apps/backend"),
});
backend.stdout.on("data", (data) => {
	console.log(`Backend: ${data}`);
});
backend.stderr.on("data", (data) => {
	console.error(`Backend error: ${data}`);
});

// running frontend (Next.js)
const frontend = spawn("yarn", ["server:dev"], {
	cwd: path.join(__dirname, "/apps/frontend"),
});

frontend.stdout.on("data", (data) => {
	console.log(`Frontend: ${data}`);
});
frontend.stderr.on("data", (data) => {
	console.error(`Frontend error: ${data}`);
});
