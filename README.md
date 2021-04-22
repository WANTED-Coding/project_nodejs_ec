# Docker build
docker build -t be-ec-21:latest .
# Docker build
docker push be-ec-21:latest
# Docker run 
docker run --env-file ./.env  -p 3000:3000 -d be-ec-21 


# docker compose run 
docker-compose up -d
# docker compose restart
docker-compose stop 
docker-compose rm
docker-compose up -d 