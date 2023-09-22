# MiBlog React

## Contexto
Para este desafio tenemos como propósito construir una aplicación de "Blog" la cual estará basado en el backend "miblog":

[miblog backend](https://miblog.inovecode.com/docs)

- A lo largo del curso irá agregando funcionalidades a su Blog hasta tenerlo completo al final del curso, como una aplicación completa basada en los conceptos vistos en la cursada.
- Para ello usted tendrá su propio repositorio el cual utilizará y mantendrá actualizado con cada nuevo desafio de profundización.
- En caso de tener dudas o problemas, nos compartirá el link del repositorio para poder ayudarlo u orientarlo.


## Esquema de la aplicación
Esta aplicación permitirá:
- Logearse con un usuario
- Ver los posteos de ese usario
- Leer un posteo de un usuario
- Modificar el posteo de un usuario
- Crear un nuevo posteo para un usuario

Todas estas funcionalidades las construiremos a lo largo de la cursada con cada nuevo desafio. En cada desafio se dará detalle del paso siguiente a realizar.


## Importante
Aún no hemos visto como integrar CSS en React, no se preocupe que más adelante llegará el momento de agregar estilos a su aplicación.


## Consiga
1. Deberá incoporar una carpeta de routes y crear allí un router que incorporará como componente en su App y administrará sus rutas.
2. Tendrá una ruta ```"/"``` con una vista de "Home" que saludará al usuario (por ahora usuario desconocido).
3. Se debe crear una ruta ```"/posteos"``` donde deberá crear una vista en dónde se listen todos los posteos  que preparó en una clase anterior.
4. Cuando se presione el boto "leer" lo deberá llevar a la ruta ```"/posteos/:id"``` según el ```id``` del posteo seleccionado.
5. Al ingresar a la ruta ```"/posteos/:id"``` deberá utilizar useParams para escribir en consola "este es el poteo <id> utilizado".
6. Deberá crear una ruta ```"/crear"``` en la cual coloqué allí el código que escribió en una clase anterior para crear un nuevo posteo. Al crear el posteo no podrá modificar el array que tiene en la vista de "/posteos". Esto lo resolveremos más adelante con contexto o peticiones HTTP, pero si quiere puede explorar como poder ir resolviendo esta parte como desafio adicional.
7. Deberá tener una barra de navegación que le permita navegar entre las rutas ```"/"``` (Home) y ```"/posteos"``` (Posteos) y ```"/crear"```.

