<p align="center">
  <img src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png" width="200">
</p>

<h3 align="center">Sequelize Template</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/antonioclp/sequelize-template) 
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/antonioclp/sequelize-template)](https://github.com/antonioclp/sequelize-template)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

> [!NOTE]\
> Template for development of back-end projects using nodejs with sequelize.

| *Dependencies* | *Version*
| --- | --- |
| **sequelize** | **6.37.3** |
| **sequelize-cli** | **6.6.2** |
| **node** | **18.0 or higher** |
| **express** | **4.19.2** |
| **mysql2** | **3.11.0** |
| **dotenv** | **16.4.5** |

### Installation

```bash
git clone git@github.com:antonioclp/sequelize-template.git

cd sequelize-template

npm install
```
---

### Usage
> Uses docker and docker-compose. This template have a `dockerfile` and `docker-compose.yaml`.

```dockerfile
FROM node:20-alpine

WORKDIR /app/back

COPY package*.json /app/back/

RUN npm install

COPY . .

RUN npm run build
```

```yaml
version: "3"

services:
  api:
    build: 
      context: .
      dockerfile: dockerfile
    container_name: api
    tty: true
    stdin_open: true
    command: npm run dev
    restart: always
    working_dir: /app/back
    depends_on:
      - db
    ports:
      - 3001:3001
    env_file:
      - .env
    volumes:
      - .:/app/back

  db:
    container_name: db
    image: mysql:8.0.32
    restart: always
    ports:
      - 3306:3306
    environment:
      MYSQL_ROOT_PASSWORD: example_password
```

### Running

```bash
docker-compose up --build -d

docker exec -it api sh

npm run db:reset
```

### Stoping and removing volumes

```bash
docker system prune --volumes
```

---

### Eslint
> [!NOTE]\
> Uses [ESLint Stylistic](https://eslint.style/).
```mjs
import config from '@rocketseat/eslint-config/node.mjs'

export default config
```
> Format on save `./.vscode/settings.json`.
```json
{
  "editor.codeActionsOnSave": [
    "source.fixAll.eslint"
  ],
  "editor.formatOnSave": false,
  "eslint.format.enable": true
}
```