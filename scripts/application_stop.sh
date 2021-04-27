
#!/bin/bash
#Stopping existing node servers
echo "stop docker service..."
sudo docker rmi -f lambiengcode/ec-2021:latest
sudo docker build -t lambiengcode/ec-2021:latest .