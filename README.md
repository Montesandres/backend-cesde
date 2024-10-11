

## Descripción

Aplicación web para gestionar la información de los cursos ofrecidos por Cesde. La aplicación permite
los administradores agregar, editar y eliminar cursos, así como también mostrar una lista de todos
los cursos disponibles. Igualmente, la aplicación  permite administrar los docentes que
dictarán cada curso..

## Clonar proyecto y configuración

```bash
# clonar proyecto con el siguiente comando:
$ git clone https://github.com/Montesandres/backend-cesde.git
```

```bash
#Instalar dependencias
$ npm install
```

Nota: Este proyecto está configurado para trabajar con mysql, está hecho con un ORM (Type ORM Code First), esto significa que la base de datos se construye automaticamente al compilar y correr el proyecto. La Unica consideración a tener es que debe existir una base de datos creada **llamada cesde_db**.

Favor configurar las variables de entorno según se tenga configurada la base de datos en el archivo .env situado en la raiz del proyecto. En el momento tiene las configuraciones por defecto de MySQL

## Compilar y correr el proyecto

```bash
# correr el proeycto en modo desarrollo
$ npm run start

# Correr proyecto para cada que se guarde se reinicie el servidor y tome los cambios
$ npm run start:dev

# Compila el proyecto en la carpeta dist para desplegarlo posteriormente
$ npm run start:prod
```

## Explicación y funcionamiento del backend

Este backend está hecho en NestJS que es un framework hecho para trabajar en nodeJS de forma práctica y estructurada que permita la escalabilidad de las aplicaciones, lo podríamos comparar con angular ya que está basado en este framework. ASí que podríamos decir que Nest es un Angular del lado del backend.

1. Base de datos

Este proyecto está configurado con Mysql mediante un ORM llamado TypeORM. Esta diseñado por medio de codefirst, lo que quiere decir que la base de datos o los esquemas se construyen automáticamente al compilar el código. El único requisito es que en el servidor de mysql configurado debe existir la base de datos creada con el mismo nombre que tenga en las variables de entorno.

2. Validación de datos

Este proyecto trabaja con la dependencia de ClassValidator por lo cual tiene  en los DTOs(input o de entrada) restriccciones  que me permiten validar los datos de entrada.

3. EndPoints.

Este proyecto está diseñado como un RestFull API con sus diferentes endpoints que se describiran a continuación:

### Professors

1. POST: http://localhost:3000/professors    => Crea un nuevo docente 

```bash
# Ejemplo de JSON para enviar petición: 
{
  "documentNumber":"111100000",
  "name":"John Doe",
  "email":"john@gmail.com"
}
```

2. GET: http://localhost:3000/   =>  Obtiene todos los docentes que hayan

3. GET: http://localhost:3000/:id   => Obtiene el profesor mediante su id el cual se reemplaza en la url al final.

4. PATCH: http://localhost:3000/:id   => Actualiza los datos que hayan dentro del body, puede haber un dato o todos los datos del docente, el id siempre debe ir.

5. DELETE: http://localhost:3000/:id  => Borra el docente con el id proporcionado

### Subjects

1. POST: http://localhost:3000/subjects  => Crea una nueva Materia

```bash
# Ejemplo de JSON Para crear nueva Materia (Es obligatorio el id de un profesor que exista):
{
    "name":"Matemáticas",
    "description":"Matemáticas básicas",
    "duration":4,
    "price":400000,
    "startDate":"2024-10-09",
    "professorId":1
}
```

2. GET: http://localhost:3000/subjects    => Obtiene todas las materias

3. GET http://localhost:3000/subjects/:id   => Obtiene materia mediante el id.

4. GET http://localhost:3000/subjects/getByName/:name  => Obtiene Materia por su nombre

5. GET http://localhost:3000/subjects/getByProfessorId/:id  => Obtiene todas las materias asignadas a un docente mediante su id.

6. GET http://localhost:3000/subjects/getPriceGreaterThan/:price  =>  Obtiene las materias que su precio sea mayor al proporcionado en los parametros.

7. PATCH http://localhost:3000/subjects/:id   => actualiza los datos de una materia dado su id, en el body se ponen los datos que se quieran actualizar

8. DELETE http://localhost:3000/subjects/:id => Elimina la materia segun id



## Recursos sobre NestJS

Consulta algunos recursos que pueden ser útiles al trabajar con NestJS:

- Visita la página [NestJS Documentation](https://docs.nestjs.com) para aprender mas acerca de este framework.
- Para preguntas y soporte, visita nuestro canal en discord [Discord channel](https://discord.gg/G7Qnnhy).
- Para profundizar y obtener más experiencia práctica, consulta nuestros videos oficiales[courses](https://courses.nestjs.com/).
- Visualiza el gráfico de tu aplicación e interactúa con la aplicación NestJS en tiempo real utilizando [NestJS Devtools](https://devtools.nestjs.com).
- Necesitas ayuda con tu proyecto (a tiempo parcial o completo)? Consulta nuestro págtina oficial.[enterprise support](https://enterprise.nestjs.com).
- Para mantenerte informado y recibir actualizaciones, síguenos en [X](https://x.com/nestframework) y [LinkedIn](https://linkedin.com/company/nestjs).
- ¿Buscas trabajo o tienes un empleo para ofrecer? Consulta nuestra página oficial." [Jobs board](https://jobs.nestjs.com).
