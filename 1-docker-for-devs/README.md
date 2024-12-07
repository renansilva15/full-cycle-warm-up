# FULL CYCLE WARM UP

## Some commands of the first class https://www.youtube.com/watch?v=SUyycXw4jTg
```bash
docker ps
curl localhost:80
docker ps -a
docker rm bdd
docker exec -it f8d ls
docker exec -it f8d bash
docker run nginx
docker run -p 8080:80 nginx
docker rm f8d
npm init -y
npm i fastify
node index.js
curl localhost:3333
curl -v localhost:3333
docker run -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html nginx
docker build -t node-example .
docker run node-example
docker rm $(docker ps -aq)
docker rm $(docker ps -aq) -f
docker run -p 3333:3333 node-example
docker exec -it d64 bash
docker exec -it d64 sh
docker run -p 3333:3333 -v $(pwd)/:/app node-example
docker compose up -d
npm i mongoose
docker compose ps
docker compose exec -it node_app sh
rm -R data/
sudo rm -R data
docker images
docker rmi $(docker images -aq) -f
docker compose up --build -d
```
---
Made with :heart: by [renansilva15](https://github.com/renansilva15)
