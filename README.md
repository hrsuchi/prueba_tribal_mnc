# Prueba MNC
Se puede utilizar el proyecto montando los archivos de la carpeta "build" del el repositorio en cualquier carpeta local  

## Sobre el proyecto:
El proyecto está basado en React. La direccion de arriba serviría para ver el proyecto en funcionamiento y si se desea ver el codigo fuente, se puede [hacer clic aqui](https://github.com/lsyk4/prueba_tribal_mnc)  
En los requerimientos del proyeto se solicitaba acceder a un api soap xml, para poder acceder a ella hubo un inconveniente con CORS, con lo cual me vi en la necesidad de hacer un archivo PHP para consumir el api, para luego consumir este otro archivo en el proyecto de React. El codigo de este archivo PHP se puede encontrar [Haciendo clic aquí.](https://github.com/lsyk4/prueba_tribal_mnc/blob/master/src/api.php)  
Este archivo manejador del api se subio a un servidor y puede ser accedido por medio de [Este enlace.](https://lsyk4.com/testmncapi/api.php)  
Un ejemplo de busqueda sería
```
https://lsyk4.com/testmncapi/api.php?q=john
```  
Si el api de itunes o de tvmaze dieran problemas de cors tambien, lo que haría es meter estas apis en el manejador PHP de arriba que tiene el asunto de las cors resueltas y así evitar inconvenientes al momento de subirlo a un servidor  
El proyecto ya se encuentra compilado, con lo cual no habría necesidad de hacer nada mas.  
Si se quisiera modificar el proyecto, se necesitaría instalar node.js y hacer  ``` npm i ``` sobre la carpeta del proyecto para instalar las dependencias necesarias.  
## Estructura:  
El codigo fuente del proyecto se encuentra dentro de la carpeta ```` src ``` la cual utiliza los siguientes directorios y archivos relevantes:  
```
/components (En la cual se encuentran los componentes utilizados para el proyecto)
./less (En el cual se encuentran los archivos LESS para los estilos sin compilar)
./style (Donde se encuentran los css compilados a partir de los archivos LESS)
./views (Aquí se encuentran las vistas utilizadas)
app.js (Maneja algunos imports)
index.js (Maneja la raiz del sitio y algunos imports)
```
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

