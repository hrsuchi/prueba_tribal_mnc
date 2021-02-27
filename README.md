# Prueba MNC
[CLICK AQUI PARA VER LA PRUEBA EN FUNCIONAMIENTO](https://lsyk4.github.io/prueba_tribal_mnc/build/) 
## Sobre el proyecto:
El proyecto está basado en React. La direccion de arriba serviría para ver el proyecto en funcionamiento y si se desea ver el codigo fuente, se puede [hacer clic aqui](https://github.com/lsyk4/prueba_tribal_mnc)  
En los requerimientos del proyeto se solicitaba acceder a un api soap xml, para poder acceder a ella hubo un inconveniente con CORS, con lo cual me vi en la necesidad de hacer un archivo PHP para consumir el api, para luego consumir este otro archivo en el proyecto de React. El codigo de este archivo PHP se puede encontrar [Haciendo clic aquí.](https://github.com/lsyk4/prueba_tribal_mnc/blob/master/src/api.php)  
Este archivo manejador del api se subio a un servidor y puede ser accedido por medio de [Este enlace.](https://lsyk4.com/testmncapi/api.php)  
Un ejemplo de busqueda sería
```
https://lsyk4.com/testmncapi/api.php?q=john
```
El proyecto ya se encuentra compilado, con lo cual no habría necesidad de hacer nada mas.  
Si se quisiera modificar el proyecto, se necesitaría instalar node.js y hacer  ``` npm i ``` sobre la carpeta del proyecto para instalar las dependencias necesarias.
## Requerimientos para hacer funcionar el proyecto:
Realmente el proyecto correría con tan solo tener un navegador web.
Si se quisiera configurar un servidor desde cero, correr los siguientes comandos en linux
```SH
sudo apt-get update
sudo apt-get install apache2
sudo systemctl restart apache2.service
```
Seguidamente almacenar en la ruta 
```
/var/www/html
```
A partir de esto podrían crearse virtualhosts para poder visualizar desde un subdominio o dominio principal.

