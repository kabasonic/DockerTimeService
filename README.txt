Jak i gdzie należy rozpakować pliki Docker?

-pobrać oraz rozpakować plik "DockerTimeService.tar.gz"
-wejść do katalogu "DockerTimeService"
-otworzyć Terminal w danym katalogu
-wpisać niżej podane polecenia.

Zbudować obraz
#sudo docker built -t time-docker-service .
Dostępne obrazy
#sudo docker images
Uruchomić kontener na bazie przygotowanego obrazu
#sudo docker run -p 8080:8080 --name time-docker-service time-docker-service
-otworzyć przeglądarkę pod adresem localhosh:8080


