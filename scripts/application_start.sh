#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ubuntu/file/ec-2021

#navigate into our working directory where we have all our github files
cd /home/ubuntu/file/ec-2021

#install node modules
yarn

#start our node app in the background
yarn pm2 