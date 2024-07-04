# Use uma imagem base oficial do Python
FROM python:3.9

# Define o diretório de trabalho dentro do container
WORKDIR /

# Copia o arquivo requirements.txt para o diretório de trabalho
COPY requirements.txt .

# Instala as dependências listadas em requirements.txt
RUN pip3 install -r requirements.txt

# Copia o código da aplicação para o diretório de trabalho
COPY . .

RUN ls

EXPOSE 8080

# Define o comando padrão a ser executado quando o container é iniciado
# Altere "app.py" pelo nome do seu arquivo principal
CMD ["python3", "app.py"]
