const { spawnSync } = require('child_process');

function parseArgs(argv) {
  const cypressArgs = ['run'];
  let grep;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === '--grep') {
      grep = argv[++i];
    } else if (arg.startsWith('--grep=')) {
      grep = arg.slice('--grep='.length);
    } else {
      cypressArgs.push(arg);
    }
  }

  if (grep) {
    const envIndex = cypressArgs.indexOf('--env');

    if (envIndex >= 0) {
      cypressArgs[envIndex + 1] = `${cypressArgs[envIndex + 1]},grep=${grep}`;
    } else {
      cypressArgs.push('--env', `grep=${grep}`);
    }
  }

  return cypressArgs;
}

const result = spawnSync('npx', ['cypress', ...parseArgs(process.argv.slice(2))], {
  stdio: 'inherit',
  shell: true,
});

process.exit(result.status ?? 1);
