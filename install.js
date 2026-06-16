const { execSync } = require('child_process');
const env = Object.assign({}, process.env);
env.PATH = env.PATH + ";C:\\Program Files\\nodejs";
console.log("Starting npm install...");
try {
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit', env });
  console.log("Finished npm install successfully.");
} catch (e) {
  console.error("Error running npm install:", e.message);
  process.exit(1);
}
