## DebateIt

DebateIt (name pending) is a website that allows random strangers from opposing political backgrounds to talk anonymously about a shared topic.
There are no logins, no profiles, just choose your political alignment, choose a current event topic, and hit connect. You can end that chat with the stranger at anytime.

### How to run

make sure you have `docker` and `docker-compose` installed on your system
Simply run
```
docker-compose up -d --build
```
When checking `docker-compose ps`, your services should start up. 
frontend is located on `localhost:4202`, backend is located on `localhost:4201`
