module.exports = {
  'src/**/*.{ts,html}': files => `ng lint ${files.map(file => `--lint-file-patterns ${file}`).join(' ')}`,
};
