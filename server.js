const { spawn } = require('child_process');

const args = ['--host', '0.0.0.0', '--port', process.env.PORT || '3000', '--auth', 'none'];

const child = spawn('code-server', args, { stdio: 'inherit' });
child.on('exit', code => {
  process.exit(code);
});
