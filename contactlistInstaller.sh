echo "

 _______  _______  _       _________ _______  _______ _________   _       _________ _______ _________
(  ____ \(  ___  )( (    /|\__   __/(  ___  )(  ____ \\__   __/  ( \      \__   __/(  ____ \\__   __/
| (    \/| (   ) ||  \  ( |   ) (   | (   ) || (    \/   ) (     | (         ) (   | (    \/   ) (   
| |      | |   | ||   \ | |   | |   | (___) || |         | |     | |         | |   | (_____    | |   
| |      | |   | || (\ \) |   | |   |  ___  || |         | |     | |         | |   (_____  )   | |   
| |      | |   | || | \   |   | |   | (   ) || |         | |     | |         | |         ) |   | |   
| (____/\| (___) || )  \  |   | |   | )   ( || (____/\   | |     | (____/\___) (___/\____) |   | |   
(_______/(_______)|/    )_)   )_(   |/     \|(_______/   )_(     (_______/\_______/\_______)   )_(   
                                                                                                   

"

echo "################# Starting database #################"
sudo docker run -d --name contactlistdb mongo:latest
echo "################# Starting API Container #################"
cd contactListAPI
echo "################# Building contactlist API image #################"
sudo docker build -t contactlistapi .
echo "################# Running contactlist API image #################"
sudo docker run -d --name contactlistapi --link contactlistdb contactlistapi
echo "################# Starting WWW container #################"
cd ../contactListWWW
echo "################# Building contactlist WWW image #################"
sudo docker build -t contactlistwww .
echo "################# Running contactlist contactListWWW image #################"
sudo docker run -d -p 3000:3000 --name contactlistwww --link contactlistapi contactlistwww
echo "################# Successfully started the application on http://localhost:3000"