module.exports = {
  '*.ts?(x)': [() => 'tsc --skipLibCheck --noEmit', 'prettier --write', 'eslint --cache --fix'],
};
