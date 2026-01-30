import next from 'eslint-config-next';

const config = [
  ...next,
  {
    ignores: ['.next/**', 'out/**', 'dist/**', 'node_modules/**'],
  },
];

export default config;
