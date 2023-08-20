@ECHO OFF
docker-compose down && docker-compose up -d --build && docker image prune --force --filter "dangling=true"