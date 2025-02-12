const fs = require('fs');
const path = require('path');

// Caminho para os arquivos de ambiente
const envFilePath = path.join(__dirname, 'src', 'environments', 'environment.ts');
const envProdFilePath = path.join(__dirname, 'src', 'environments', 'environment.prod.ts');

// Variáveis de ambiente (substitua pelos valores do Vercel)
const envConfig = `export const environment = {
  production: false,
  emailJsServiceId: '${process.env['EMAILJS_SERVICE_ID']}',
  emailJsTemplateId: '${process.env['EMAILJS_TEMPLATE_ID']}',
  emailJsUserId: '${process.env['EMAILJS_USER_ID']}'
};
`;

const envProdConfig = `export const environment = {
  production: true,
  emailJsServiceId: '${process.env['EMAILJS_SERVICE_ID']}',
  emailJsTemplateId: '${process.env['EMAILJS_TEMPLATE_ID']}',
  emailJsUserId: '${process.env['EMAILJS_USER_ID']}'
};
`;

// Escreve os arquivos de ambiente
fs.writeFileSync(envFilePath, envConfig);
fs.writeFileSync(envProdFilePath, envProdConfig);

console.log('Arquivos de ambiente gerados com sucesso!');