export default {
  '*.js': ['prettier --write', 'eslint --no-ignore --max-warnings=0 --fix'],
  '*.{json,md,css,html,yml,yaml}': ['prettier --write'],
};
