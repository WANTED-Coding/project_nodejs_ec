
#!/bin/bash
#Stopping existing node servers
echo "delete and rebuild docker image..."
sudo docker rmi -f lambiengcode/ec-2021:latest
sudo docker build -t lambiengcode/ec-2021:latest .