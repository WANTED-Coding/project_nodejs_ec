#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ubuntu/file/ec-2021
sudo chmod -R 777 /home/ubuntu/file/ec-2021/dist

#navigate into our working directory where we have all our github files
cd /home/ubuntu/file/ec-2021

#install node modules
sudo yarn

#start our node app in the background
sudo yarn pm2 