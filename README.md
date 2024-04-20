# CRUD CONTACTOS

CRUD en el que puedo hacer acciones basicas de un crud, el cual lo hice con el fin de aprender y poner en practica mis conocimientos de ASP.NET CORE y React. 

![VISTA PREVIA](resources/vistaprevia.png)
## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

- **Visual Studio Community 2022 (Opcional):**
  Puedes optar por tener instalado Visual Studio Community 2022 en tu máquina si deseas utilizar su entorno integrado de desarrollo.
  Puedes descargarlo desde el sitio web oficial de Visual Studio: [visualstudio.microsoft.com](https://visualstudio.microsoft.com/).

  O en su lugar:

- **Editor de Texto:**
  Necesitarás un editor de texto para trabajar con los archivos del proyecto. Algunas opciones populares incluyen Visual Studio Code, Sublime Text o Atom.
   Puedes descargar Visual Studio Code desde [code.visualstudio.com](https://code.visualstudio.com/).

Además de:

- **SDK de .NET Core 6:**
  Asegúrate de tener instalado el SDK de .NET Core 6 en tu máquina. Puedes descargarlo desde [dotnet.microsoft.com](https://dotnet.microsoft.com/download).

- **Node.js y npm:**
  Asegúrate de tener instalado Node.js y npm en tu sistema. Puedes descargarlos desde [nodejs.org](https://nodejs.org/). Node.js y npm son necesarios para gestionar las dependencias del proyecto React y ejecutar el proyecto empaquetado con Vite.

## Preparación de la Base de Datos 🛠️

Para comenzar, necesitaremos preparar la base de datos que usará nuestra aplicación. A continuación, se proporciona un script SQL que crea la base de datos "DBPRUEBAS" y la tabla "Contacto" con los parámetros especificados, junto con una carga de datos de ejemplo:

```sql
-- Crear la base de datos
CREATE DATABASE DBPRUEBAS;
GO

-- Usar la base de datos recién creada
USE DBPRUEBAS;
GO

-- Crear la tabla Contacto
CREATE TABLE Contacto (
    idContacto INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NULL,
    correo VARCHAR(50) NULL,
    telefono VARCHAR(50) NULL
);
GO

-- Insertar datos de ejemplo en la tabla Contacto
INSERT INTO Contacto (nombre, correo, telefono)
VALUES 
    ('Juan Pérez', 'juan@example.com', '123456789'),
    ('María López', 'maria@example.com', '987654321'),
    ('Pedro García', 'pedro@example.com', '456789123'),
    ('Ana Martínez', 'ana@example.com', '789123456'),
    ('Carlos Rodríguez', 'carlos@example.com', '321654987');
GO  
```
## Preparación del Proyecto y Configuración de la Base de Datos 🔧

### 1. Preparación de la Base de Datos

Primero, necesitaremos asegurarnos de que la base de datos esté configurada correctamente. Asegúrate de tener SQL Server instalado y listo para usar.

### 2. Copiar la Cadena de Conexión

A continuación, necesitarás copiar tu cadena de conexión de SQL Server. La encontrarás en tu archivo de configuración de SQL Server o en tu entorno de desarrollo. Una vez que tengas la cadena de conexión, cópiala.

### 3. Pegar la Cadena de Conexión en el Proyecto

Abre el archivo `DBCONTEXTprueba.cs` ubicado en `CrudContacto.server/Models/` en tu editor de código.

Busca la línea 25 dentro del archivo y encontrarás una instrucción similar a esta:

```csharp
optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=DBPRUEBAS;Trusted_Connection=True;");
```
Reemplaza la cadena de conexión existente dentro de UseSqlServer() con tu cadena de conexión copiada. Asegúrate de mantener el formato correcto y de no eliminar ningún otro texto en la línea.

Una vez que hayas pegado tu cadena de conexión, guarda el archivo.

### Instalación 🔧

Una vez que hayas preparado tu entorno, puedes seguir estos pasos para instalar y ejecutar el proyecto:

1. Clona el repositorio desde GitHub o descarga el código fuente como un archivo ZIP.

2. Abre el proyecto en Visual Studio Community o Visual Studio Code.

3. Si estás utilizando Visual Studio Code, abre una terminal integrada en la carpeta raíz del proyecto.

4. Instala las dependencias de Node.js ejecutando el siguiente comando en la terminal:

    ```
    npm install
    ```

5. Compila y ejecuta la aplicación ASP.NET Core. Puedes hacerlo ejecutando el siguiente comando en la terminal (en Visual Studio Code) o utilizando las herramientas integradas de Visual Studio Community:

    ```
    dotnet run
    ```

Con estos pasos, deberías tener la aplicación CRUD de contactos ejecutándose localmente en tu máquina, lista para ser probada y
desarrollada aún más. ¡Espero que disfrutes explorando y mejorando tu proyecto!

## Ejecución y Prueba del Proyecto 🚀

Para ejecutar y probar el proyecto, sigue estos pasos:

1. **Compila y Corre el Proyecto desde Visual Studio Community:**
   Abre el proyecto en Visual Studio Community y compílalo. Luego, inicia la ejecución del proyecto. Esto pondrá en funcionamiento tanto el servidor de desarrollo del cliente React como la API de ASP.NET Core.

2. **Acceso al Cliente React:**
   Una vez que el proyecto esté en funcionamiento, puedes acceder al cliente React en tu navegador web. El cliente React estará disponible en el puerto `5173`.

3. **Acceso a la API de ASP.NET Core:**
   La API de ASP.NET Core estará escuchando en el puerto `5098`. Puedes acceder a ella utilizando rutas de API como `http://localhost:5098/`.

Con estos pasos, el proyecto estará en funcionamiento y listo para ser probado tanto desde el cliente React como desde la API de ASP.NET Core.
¡Disfruta probando y modificando el proyecto!


## Tecnologias utilizadas 🛠️

- Bootstrap: v5.1.3
- Reactstrap: v9.1.3
- React: v18.2.0
- ASP.NET Core: v6
- Entity Framework: v6.06
- SweetAlert2: v11.10.7

