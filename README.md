# basicAppDocker
----
Basic JS aplication running on Docker


#### Requirements
----
|     Tool            |  Version     |
| -----------         | --------     |
|     Docker          |     lastet   |
 
#### Build Guide
----
1.Clone repository:
```
$[localhost git] git clone https://github.com/babiigoncalves/angular9Essencial
```
2.Install Docker:
```
https://docs.docker.com/engine/install/fedora/
```
3.Download image
```
$[localhost dockerTutorial] docker pull node
```
4.Build image:
```
$[localhost dockerTutorial] docker image build -t node-app .
```
5.Execute container:
```
$[localhost dockerTutorial] docker container run -d -p 80:8080 node-app
```
#### Application access 
* http://localhost

#### Author
[Barbara Goncalves - 2020](https://github.com/babiigoncalves)

