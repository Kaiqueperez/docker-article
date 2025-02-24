FROM node:20.18.1

# Diretório de trabalho
WORKDIR /src

# Copia tdo para o diretório de trabalho
COPY . .

# Copia o arquivo .env para o diretório de trabalho
COPY .env .env

# Remove a pasta node_modules

RUN rm -rf node_modules

# Instala as dependências
RUN npm install

# Sobe o backend
CMD [ "npm", "start" ]
