const { execSync } = require('child_process');
const environment = process.env.ENVIRONMENT || 'development'; // Default to 'development'

// Determine the correct command based on the OS
const isWindows = process.platform === 'win32';

if (environment === 'prod') {
    const command = isWindows
        ? 'set NODE_ENV=production&& npx webpack --config webpack.config.js --mode production'
        : 'export NODE_ENV=production && npx webpack --config webpack.config.js --mode production';
    execSync(command, { stdio: 'inherit' });
} else {
    const command = isWindows
        ? 'set NODE_ENV=development&& npx webpack --config webpack.config.js --mode development'
        : 'export NODE_ENV=development && npx webpack --config webpack.config.js --mode development';
    execSync(command, { stdio: 'inherit' });
}
