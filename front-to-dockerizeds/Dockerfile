FROM node:20.18.1

# Cria uma pasta temporária para o projeto
WORKDIR /tmp/vite

# Copia todo o código para a pasta temporária
COPY . .

# Remove a pasta node_modules
RUN rm -rf node_modules

# Instala as dependências
RUN	npm install

# Builda o projeto para produção
RUN	npm run build 

# Cria a pasta /var/www/html
RUN mkdir -p /var/www/html 

# Move o conteúdo da pasta dist para a pasta /var/www/html
RUN  mv dist/* /var/www/html 

# Define a pasta /var/www/html como volume para que o nginx possa acessar
VOLUME /var/www/html

# Define a pasta /var/www/html como pasta de trabalho
WORKDIR /

# Remove a pasta temporária
RUN rm -rf /tmp/vite




