# Historias de Usuario - Proyecto Torneo Deportivo

## Historia 1: Registro de Equipos
**Descripción:**  
El sistema debe permitir registrar equipos participantes en el torneo, capturando información básica como el nombre del equipo, lista de jugadores y datos de contacto del representante.

**Criterios de aceptación:**
- Validar que el nombre del equipo sea único.
- Posibilidad de agregar, editar y eliminar equipos.
- Mostrar mensaje de error si falta información obligatoria.

**Responsable:** Equipo Backend (Models y Routes).

---

## Historia 2: Gestión de Partidos
**Descripción:**  
El sistema debe permitir crear y gestionar los partidos programados del torneo, incluyendo la asignación de equipos, fecha, hora y lugar del partido.

**Criterios de aceptación:**
- Permitir definir dos equipos por partido.
- Guardar y visualizar la programación de partidos.
- Actualizar los detalles del partido cuando sea necesario.

**Responsable:** Equipo Backend (Routes) y Frontend (Interfaz de Usuario).

---

## Historia 3: Registro de Resultados
**Descripción:**  
El sistema debe permitir registrar los resultados de los partidos, actualizando automáticamente la tabla de posiciones de los equipos.

**Criterios de aceptación:**
- Ingresar los resultados por equipo (goles o puntos).
- Actualizar la tabla de clasificación al guardar el resultado.
- Restringir la edición de resultados a usuarios administradores.

**Responsable:** Equipo Backend (Models y Routes).

---

## Historia 4: Consulta de Clasificación
**Descripción:**  
El sistema debe mostrar la tabla de clasificación del torneo, ordenada por puntos y con estadísticas clave de cada equipo.

**Criterios de aceptación:**
- Mostrar equipos en orden descendente según los puntos.
- Incluir estadísticas: partidos jugados, ganados, empatados y perdidos.
- Acceso público para la consulta.

**Responsable:** Equipo Frontend (Diseño de Interfaz y Visualización).

---

## Historia 5: Gestión de Usuarios
**Descripción:**  
El sistema debe gestionar cuentas de usuario con diferentes roles para administrar el acceso a las funcionalidades.

**Criterios de aceptación:**
- Crear roles de usuario: administrador y espectador.
- Permitir autenticación y autorización basada en roles.
- Restringir las funciones administrativas a los usuarios con el rol adecuado.

**Responsable:** Equipo Backend (Autenticación) y Frontend (Gestión de Roles).
