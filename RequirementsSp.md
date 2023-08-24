# Documento de Requerimientos

## Información del Proyecto

- **Nombre del Proyecto:** Athena Insights
- **Fecha:** 24/08/2023
- **Versión:** 1.0
- **Equipo Responsable:** Henry Gomez

## Resumen Ejecutivo

AthenaDesk Insights es un completo Panel de Tecnología de Análisis para el Centro de Atención al Usuario de TI, diseñado para proporcionar una visión clara y concisa de las operaciones del centro de atención al usuario, sus objetivos y el contexto circundante.

## 1. Introducción

### 1.1 Propósito del Documento

El propósito de este documento es delinear las intenciones y objetivos de este documento, sirviendo como guía para las partes interesadas y miembros del equipo para entender el alcance y las expectativas del proyecto AthenaDesk Insights. Este documento tiene como objetivo definir de manera clara el propósito, las funcionalidades y los resultados deseados del panel, fomentando la alineación entre todas las partes involucradas.

### 1.2 Alcance

El alcance del proyecto AthenaDesk Insights abarca el desarrollo e implementación de un completo Panel de Tecnología de Análisis para el Centro de Atención al Usuario de TI. Este panel proporcionará información en tiempo real sobre el rendimiento, eficiencia y tendencias de las operaciones del centro de atención al usuario de TI en la organización. Incluye funcionalidades para visualizar métricas de tickets, rendimiento de agentes, tendencias de incidentes y cumplimiento de solicitudes. El panel está diseñado para atender diferentes roles de usuario, asegurando que la información relevante esté accesible para agentes, coordinadores y directores. El panel obtendrá datos de entradas transformadas y será accesible a través de una interfaz web. Su objetivo es mejorar la toma de decisiones, facilitar la gestión proactiva de incidentes y mejorar la efectividad general de las operaciones del centro de atención al usuario. El alcance también incluye análisis de datos con versiones para permitir comparaciones históricas y seguimiento de tendencias.

## 2. Requisitos

### 2.1 Requisitos Funcionales

#### 2.1.1 Visualización de Métricas de Tickets

- **Descripción:** El panel debe mostrar diversas métricas de tickets, como tickets entrantes, tickets resueltos, tiempo promedio de resolución y categorías de tickets.
- **Criterios de Aceptación:** El panel debe mostrar actualizaciones en tiempo real de las métricas de tickets. Los usuarios pueden filtrar métricas por rangos de fechas y categorías de tickets. Las métricas deben presentarse mediante gráficos y gráficos interactivos.
- **Prioridad:** Alta
- **Fuente:** Partes interesadas, Comentarios de Usuarios
- **Razón del Cambio:** Proporcionar transparencia sobre el rendimiento del centro de atención al usuario y permitir la toma de decisiones basada en datos.

#### 2.1.2 Seguimiento del Rendimiento de los Agentes

- **Descripción:** El panel debe proporcionar información sobre el rendimiento de los agentes, incluyendo el número de tickets manejados, tiempos de resolución y calificaciones de satisfacción del cliente.
- **Criterios de Aceptación:** Los agentes deben poder ver sus métricas de rendimiento individuales. Los gerentes y coordinadores deben poder evaluar el rendimiento general del equipo. Las métricas deben mostrarse de manera intuitiva y fácil de entender.
- **Prioridad:** Media
- **Fuente:** Partes interesadas, Requisitos de la Gerencia
- **Razón del Cambio:** Permitir a los agentes y gerentes evaluar y mejorar el rendimiento individual y del equipo.

### 2.2 Requisitos No Funcionales

#### 2.2.1 Seguridad y Privacidad de Datos

- **Descripción:** El panel debe garantizar la seguridad y privacidad de los datos al restringir el acceso según los roles de usuario e implementar el cifrado de datos.
- **Criterios de Aceptación:** Se debe implementar la autenticación y autorización de usuarios. Los datos sensibles deben cifrarse durante la transmisión y el almacenamiento.
- **Prioridad:** Alta
- **Fuente:** Políticas de Seguridad, Requisitos Regulatorios
- **Razón del Cambio:** Proteger los datos sensibles y cumplir con los estándares de seguridad.

#### 2.2.2 Interfaz Amigable para el Usuario

- **Descripción:** La interfaz del panel debe ser amigable e intuitiva, permitiendo a los usuarios navegar por diferentes secciones y filtros sin esfuerzo.
- **Criterios de Aceptación:** Los usuarios deben poder interactuar con gráficos, gráficos y filtros sin necesidad de un entrenamiento extenso. La interfaz debe ser receptiva y accesible en diferentes dispositivos.
- **Prioridad:** Alta
- **Fuente:** Comentarios de Usuarios, Directrices de Usabilidad
- **Razón del Cambio:** Mejorar la experiencia del usuario y fomentar la adopción del panel.

## 3. Entregables

- **Panel de Tecnología de Análisis para el Centro de Atención al Usuario de TI**
- **Documentación sobre el uso y administración del panel**

## 4. Enfoque de Desarrollo

### 4.1 Enfoque RUP (Proceso Unificado de Rational)

El proyecto AthenaDesk Insights seguirá la metodología Proceso Unificado de Rational (RUP), que proporciona un enfoque disciplinado para el desarrollo de software y enfatiza el desarrollo iterativo e incremental. El proyecto se dividirá en fases distintas, cada una contribuyendo al ciclo de vida general del desarrollo.

#### Fase de Inicio
Durante la fase de Inicio, se evaluarán los objetivos, el alcance y la viabilidad del proyecto. Las partes interesadas clave colaborarán para establecer la visión y los requisitos del proyecto. Los entregables principales incluyen la declaración de visión del proyecto, los requisitos de alto nivel y un plan de proyecto inicial.

#### Fase de Elaboración
En la fase de Elaboración, se definirá el diseño y la arquitectura de alto nivel del panel. Se documentarán los requisitos detallados y se confirmará la viabilidad técnica del proyecto. La arquitectura y el diseño se revisarán y refinan para garantizar la alineación con los objetivos del proyecto.

#### Fase de Construcción
La fase de Construcción implica el desarrollo real del panel AthenaDesk Insights. Las funcionalidades se implementarán de acuerdo con los requisitos detallados. Se llevarán a cabo pruebas regulares de calidad para asegurar la funcionalidad, rendimiento y seguridad del panel.

#### Fase de Transición
Durante la fase de Transición, el panel será sometido a pruebas y validaciones exhaustivas. Se llevarán a cabo pruebas de aceptación de usuario para asegurarse de que el panel cumpla con las expectativas y requisitos de las partes interesadas. Se preparará documentación, materiales de capacitación y planes de implementación para facilitar una transición sin problemas a la producción.

#### Enfoque Iterativo e Incremental
A lo largo del proyecto, se planificarán y ejecutarán iteraciones de acuerdo con los principios de RUP. Cada iteración abarcará fases como análisis de requisitos, diseño, implementación, pruebas y revisión. Este enfoque iterativo permite una retroalimentación continua y una adaptación, asegurando que el panel se alinee con las necesidades cambiantes de las partes interesadas.

#### Gestión de Cambios
El enfoque de RUP reconoce el potencial de cambios en los requisitos, el alcance y las prioridades. Se implementará un proceso de gestión de cambios para evaluar y acomodar cambios minimizando las interrupciones en el cronograma y el presupuesto del proyecto.

#### Colaboración y Comunicación
El enfoque de RUP enfatiza la comunicación y la colaboración efectivas entre los miembros del equipo del proyecto, las partes interesadas y los usuarios. Se llevarán a cabo reuniones regulares, informes de estado y sesiones de retroalimentación para garantizar la alineación y la transparencia durante todo el ciclo de vida del proyecto.

- **Aplicando el enfoque RUP, el proyecto AthenaDesk Insights tiene como objetivo entregar un Panel de Tecnología de Análisis para el Centro de Atención al Usuario de TI de alta calidad que cumpla con las expectativas de las partes interesadas y contribuya al éxito de las operaciones del centro de atención al usuario de la organización.**

### 4.2 Enfoque Ágil (Scrum)

El proyecto AthenaDesk Insights se ejecutará utilizando el marco de trabajo Scrum, una metodología ágil que promueve el desarrollo iterativo e incremental, la colaboración y la adaptabilidad. El proyecto se dividirá en iteraciones de tiempo limitado conocidas como sprints, cada una con una duración de dos semanas.

#### Planificación del Sprint
Al comienzo de cada sprint, se llevará a cabo una reunión de planificación de sprint para definir el objetivo del sprint, seleccionar los elementos del backlog y estimar el esfuerzo requerido para cada elemento. El backlog del producto, que contiene historias de usuario y tareas, será priorizado por el propietario del producto.

#### Reuniones Diarias de Seguimiento
A lo largo de cada sprint, se llevarán a cabo reuniones diarias de seguimiento para facilitar la comunicación y coordinación entre el equipo de desarrollo. Los miembros del equipo compartirán el progreso, discutirán desafíos y planificarán sus tareas para el día.

#### Desarrollo Incremental
Las funcionalidades del proyecto se desarrollarán de manera incremental, con cada sprint entregando un incremento de producto potencialmente entregable. Las características del panel evolucionarán con el tiempo según la retroalimentación y los requisitos cambiantes.

#### Revisión y Retrospectiva del Sprint
Al final de cada sprint, se llevará a cabo una reunión de revisión de sprint para demostrar el trabajo completado a las partes interesadas. Se recopilará retroalimentación y se harán ajustes según la entrada de las partes interesadas. Después de la revisión, se realizará una retrospectiva del sprint para reflexionar sobre los procesos del sprint e identificar oportunidades de mejora.

#### Refinamiento del Backlog
Se llevarán a cabo sesiones regulares de refinamiento del backlog para aclarar, estimar y priorizar los elementos del backlog. Se pueden agregar nuevos elementos y reevaluar los existentes según las necesidades cambiantes del proyecto.

#### Colaboración y Adaptación
El enfoque ágil fomenta la colaboración cercana entre los miembros del equipo, las partes interesadas y los usuarios. Se enfatiza la flexibilidad, lo que permite que el proyecto se adapte a los cambios en los requisitos, las prioridades y la retroalimentación.

#### Transparencia y Comunicación
Se mantendrá una comunicación abierta y una transparencia a lo largo del proyecto. El propietario del producto asegurará que el backlog del producto esté actualizado, y las partes interesadas tendrán visión del progreso del proyecto a través de las revisiones de sprint y actualizaciones regulares.

#### Mejora Continua
El enfoque ágil fomenta la mejora continua. El equipo de desarrollo aprenderá de cada sprint, identificando formas de mejorar los procesos, la calidad y la colaboración en sprints posteriores.

- **Al adoptar el enfoque ágil, el proyecto AthenaDesk Insights tiene como objetivo entregar un Panel de Tecnología de Análisis para el Centro de Atención al Usuario de TI valioso y adaptable que cumpla con las necesidades de las partes interesadas y responda eficazmente a los requisitos dinámicos.**

## 5. Cronograma

### Sprint 1: Recopilación de Requisitos y Diseño Inicial (24 de agosto - 6 de septiembre)
- **Realizar un análisis detallado de los requisitos y refinar las historias de usuario.**
- **Colaborar con las partes interesadas para definir el diseño inicial del panel.**
- **Finalizar el alcance y las características para el PMV.**
- **Crear y priorizar el backlog del producto para el primer sprint.**
### Sprint 2: Transformación de Datos y Configuración de la Base de Datos (7 de septiembre - 20 de septiembre)
- **Desarrollar el proceso de transformación de datos para recopilar datos de diversas fuentes.**
- **Diseñar y configurar la estructura de la base de datos para almacenar los datos transformados.**
- **Implementar los mecanismos iniciales de integración y validación de datos.**
### Sprint 3: Desarrollo Frontend y Pruebas de Usuario Inicial (21 de septiembre - 4 de octubre)
- **Comenzar el desarrollo frontend de la interfaz de usuario del panel.**
- **Implementar gráficos y gráficos interactivos para la visualización de métricas de tickets.**
- **Realizar pruebas de usuario inicial con el equipo de desarrollo para identificar retroalimentación temprana.**
### Sprint 4: Integración del Backend y Pruebas Adicionales (5 de octubre - 18 de octubre)
- **Integrar el frontend con los sistemas y la base de datos del backend.**
- **Desarrollar la funcionalidad para el seguimiento y la visualización inicial del rendimiento de los agentes.**
- **Realizar pruebas exhaustivas del sistema integrado y corregir cualquier problema identificado.**
### Sprint 5: Refinamiento de la UI/UX y Pruebas Finales (19 de octubre - 1 de noviembre)
- **Refinar la interfaz de usuario y mejorar la experiencia general del usuario.**
- **Implementar retroalimentación adicional de los usuarios recopilada durante las pruebas.**
- **Realizar pruebas exhaustivas, incluidas las pruebas de aceptación de usuario.**
### Sprint 6: Documentación e Implementación (2 de noviembre - 15 de noviembre)
- **Preparar documentación para usuarios, administradores y desarrolladores.**
- **Finalizar los planes de implementación para el PMV.**
- **Realizar la implementación del PMV en un entorno de puesta en escena para pruebas finales.**

### Lanzamiento del PMV: Producto Mínimo Viable (15 de noviembre)
- **Se lanzará el PMV del panel AthenaDesk Insights, con funcionalidades básicas como la visualización de métricas de tickets y el seguimiento inicial del rendimiento de los agentes. El panel estará accesible para las partes interesadas relevantes para obtener retroalimentación y realizar pruebas.**

- **Es importante tener en cuenta que el cronograma anterior se basa en la información y la línea de tiempo proporcionadas. Es importante monitorear continuamente el progreso y ajustar el cronograma según sea necesario para garantizar la entrega exitosa del PMV para la fecha objetivo del 15 de octubre.**

## 6. Presupuesto

### Recursos de Desarrollo
#### Equipo de Desarrollo: Incluye el costo de desarrolladores, diseñadores y cualquier otro rol técnico involucrado en el proyecto.
- **Gerente de Proyecto: Asignar una parte del presupuesto para la gestión de proyectos.**
- **QA y Pruebas: Presupuesto para actividades de aseguramiento de calidad y pruebas.**
### Software y Herramientas
- **Herramientas de Desarrollo: Considerar licencias de software, entornos de desarrollo y cualquier herramienta especializada requerida.**
- **Servicios de Terceros: Si se utilizan servicios externos (por ejemplo, herramientas de transformación de datos), considerar los costos de suscripción.**
### Infraestructura
- **Costos de Servidor: Incluir los gastos de alojamiento del panel en un entorno en la nube o en las instalaciones.**
- **Costos de la Base de Datos: Considerar los costos de alojamiento y gestión de bases de datos.**
### Documentación y Capacitación
- **Documentación: Presupuesto para crear guías de usuario, manuales de administración y cualquier documentación necesaria.**
- **Capacitación: Asignar fondos para materiales y sesiones de capacitación para usuarios y administradores.**
### Contingencia
- **Reserva: Apartar un presupuesto de contingencia para manejar gastos inesperados o cambios en el alcance.**
### Consideración del Rol Continuo
#### Dado que Henry Gómez también es analista con responsabilidades en el centro de atención al usuario, considerar el tiempo que dedicará tanto al proyecto como a su rol. Este equilibrio es crucial para asegurarse de que el rendimiento de su centro de atención al usuario no se vea afectado. Es necesario:

- **Ajustar sus horarios de trabajo para asignar tiempo a las tareas del proyecto.**
- **Comunicar sus responsabilidades duales con su equipo y supervisor.**
- **Priorizar tareas y delegar cuando sea necesario.**
##### Gestión del Tiempo
- **Gestionar su tiempo de manera efectiva será esencial. Planificar su horario, asignar tiempo para las tareas del proyecto y comunicar su disponibilidad tanto al equipo del proyecto como a su equipo de centro de atención al usuario.**

## 7. Aprobaciones

Este documento ha sido revisado y aprobado por las partes interesadas mencionadas a continuación:

- **Harold Castillo - Gerente de Proyecto - Fecha: [Fecha de Aprobación]**

Al firmar a continuación, usted reconoce que ha revisado y aprobado el contenido de este documento.
