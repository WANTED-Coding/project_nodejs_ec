
#!/bin/bash
#Stopping existing node servers
sudo service codedeploy-agent stop
/opt/codedeploy-agent/deployment-root
sudo service codedeploy-agent start
echo "Service already for start on server..."
pm2 stop 0