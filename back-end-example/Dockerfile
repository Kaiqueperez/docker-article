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
# docker network create -d bridge learning-docker

#  docker run  --name pg-example --network learning-docker  -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=senha123   -e POSTGRES_DB=random-words  -p 5432:5432   -d postgres:latest


# docker build -t back-end-example .

# docker run --rm --network learning-docker back-end-example npx prisma migrate deploy
# docker exec -it  156b75021ec5 sh
# docker exec -it  14379f38c830 sh
# docker run --rm --network learning-docker back-end-example npm run seed
# docker run --name back-end-exemple --network learning-docker -dp 4001:4001 back-end-example

# docker network connect learning-docker pg-example
# docker network disconnect  bridge pg-example

# docker exec -it pg-example psql -U docker -d random-words

# SELECT * FROM RandomWords;


# ----

  #  docker run --name pg-example -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=senha123 -e POSTGRES_DB=random-words  -p 5432:5432 -d postgres:latest
