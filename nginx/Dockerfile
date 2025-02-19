FROM nginx:1.21.6

# Remove o arquivo de configuração padrão do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração do nginx
COPY nginx.conf /etc/nginx/conf.d

