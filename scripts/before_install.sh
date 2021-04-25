#create our working directory if it doesnt exist
DIR="/home/ubuntu/file/ec-2021"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  sudo mkdir ${DIR}
fi