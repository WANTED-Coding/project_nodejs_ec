sudo docker pull lambiengcode/ec-2021
sudo docker rm ec-2021
sudo docker run -d --name cnpm  -p 3000:3000 --env-file .env lambiengcode/ec-2021
sudo docker ps