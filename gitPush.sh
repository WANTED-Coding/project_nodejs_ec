git add .
read -p "input action: " action
read -p "input message: " message
git commit -m "[$action] $message"
git push