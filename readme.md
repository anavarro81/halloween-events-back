# 🧠 Nombre del Proyecto

Back para eventos de Halloween. Permite ver que actividades hay disponibles, la fecha, hora y detalles de la misma. 
Las personas se podran apuntar y consultar en todo momento la última hora de cada evento. 

---

## 🚀 Tecnologías utilizadas

- **Node.js** – entorno de ejecución
- **Express.js** – framework para servidor HTTP
- **TypeScript** – tipado estático y mejor mantenimiento del código
- **Mongoose / Prisma / Sequelize** – ORM o ODM (indicar cuál se usa)
- **dotenv** – gestión de variables de entorno
- **Helmet / CORS** – seguridad y control de cabeceras HTTP

---

## 📁 Estructura del proyecto

```
├── src
│   ├── config/           # Configuración de entorno y base de datos
│   ├── controllers/      # Lógica de controladores
│   ├── services/         # Lógica de negocio
│   ├── models/           # Modelos (Mongoose / Prisma)
│   ├── routes/           # Definición de endpoints
│   ├── middlewares/      # Middlewares personalizados
│   ├── utils/            # Funciones auxiliares
│   ├── app.ts            # Configuración principal del servidor
│   └── server.ts         # Punto de entrada del proyecto
├── .env.example          # Variables de entorno de ejemplo
├── tsconfig.json         # Configuración de TypeScript
├── package.json
└── README.md
```

---

## ⚙️ Instalación y configuración

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/usuario/nombre-proyecto.git
   cd nombre-proyecto
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   pnpm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**
   Crea un archivo `.env` basado en `.env.example`, por ejemplo:
   ```env
   PORT=4000
   DATABASE_URL=mongodb+srv://...
   JWT_SECRET=tu_secreto
   NODE_ENV=development
   ```

4. **Compilar TypeScript**
   ```bash
   npm run build
   ```

5. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

6. **Iniciar en producción**
   ```bash
   npm run start
   ```

---

## 🧩 Scripts disponibles

| Comando | Descripción |
|----------|--------------|
| `npm run dev` | Ejecuta el servidor en modo desarrollo con Nodemon |
| `npm run build` | Compila el código TypeScript a JavaScript |
| `npm run start` | Ejecuta el servidor compilado |
| `npm run lint` | Ejecuta el linter (si está configurado) |
| `npm run test` | Lanza las pruebas (si existen) |

---

## 🧪 Testing

Ejemplo de cómo correr las pruebas:

```bash
npm run test
```

Estructura sugerida:
```
tests/
├── unit/
│   └── ejemplo.test.ts
└── integration/
    └── ejemplo.int.test.ts
```

---

## 🧠 Arquitectura

Breve explicación del patrón de arquitectura (por ejemplo **MVC** o **Service Layer Pattern**):

```
Controller → Service → Model → Database
```

Cada capa tiene una responsabilidad clara:
- **Controller:** recibe y responde a las solicitudes HTTP.
- **Service:** contiene la lógica de negocio.
- **Model:** define la estructura de datos y conexión con la base de datos.

---

## 🔐 Seguridad

Incluye medidas como:
- CORS configurado
- Helmet para cabeceras HTTP seguras
- Validación de datos con Zod/Joi
- Hash de contraseñas con bcrypt
- Tokens JWT con expiración

---

## 🧾 Documentación API

Puedes usar:
- **Swagger UI** (`/api/docs`)
- o importar la colección de **Postman** desde:  
  `docs/api-collection.postman.json`

---

## 🐳 Despliegue

Ejemplo (según el entorno):

- **Vercel / Render / Railway / Docker**
- Variables de entorno configuradas en el panel
- Ejecutar `npm run build` antes del despliegue

---

## 👨‍💻 Contribución

1. Haz un *fork* del proyecto
2. Crea una nueva rama:  
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y *commits* siguiendo las convenciones
4. Abre un *pull request* describiendo los cambios realizados

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

## 💬 Contacto

**Autor:** Antonio Navarro
**Email:** anavarro67@hotmail.com
**LinkedIn:** [linkedin.com/in/antonio-navarro-deldujo](https://www.linkedin.com/in/antonio-navarro-deldujo/)  
**GitHub:** [github.com/anavarro81](https://github.com/anavarro81)