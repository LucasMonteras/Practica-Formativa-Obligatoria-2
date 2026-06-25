# Práctica Formativa Obligatoria 2

## Prompt Engineering en Agentes de IA

Este repositorio contiene la entrega final de la **Práctica Formativa Obligatoria 2**, centrada en el uso de prompt engineering aplicado a agentes de inteligencia artificial para desarrollo Front End.

## Datos del estudiante

- **Nombre:** Lucas Monteras
- **Trabajo:** Práctica Formativa Obligatoria 2
- **Modalidad:** Individual
- **Contexto:** entrega académica orientada a comparar resultados generados por agentes de desarrollo a partir de una misma consigna.

## Objetivo del trabajo

El objetivo de esta práctica consiste en diseñar un único prompt inicial de alta precisión y ejecutarlo en dos agentes distintos para comparar su capacidad de resolución autónoma.

Ambos agentes recibieron la misma consigna y debían generar una landing page completa utilizando HTML, CSS y JavaScript vanilla, sin requerir correcciones manuales posteriores como parte del proceso principal de evaluación.

## Agentes utilizados

En esta entrega se trabajó con dos agentes:

- **Codex**
- **OpenCode**

Cada agente generó una landing page de manera autónoma a partir del mismo prompt inicial. El propósito de la comparación es observar diferencias en estructura, diseño, organización del código, cumplimiento de requisitos y criterio de resolución.

## Prompt exacto utilizado

El prompt exacto utilizado se encuentra disponible en:

```text
Prompt/prompt.txt
```

Ese archivo contiene el texto completo de la consigna entregada a los agentes. El prompt solicitaba la creación de una landing page moderna, profesional, responsive y lista para mostrarse, correspondiente a una empresa ficticia llamada **Nexo Digital**.

## Descripción de la Landing Page solicitada

El prompt exigía que la landing page incluyera, como mínimo, las siguientes secciones:

- Header con navegación interna.
- Hero section con llamada a la acción.
- Sección sobre la empresa.
- Servicios o características principales.
- Testimonios.
- Formulario de contacto visual.
- Footer con redes o enlaces complementarios.

Además, la consigna pedía una resolución autónoma, semántica HTML adecuada, estilos responsive, código ordenado y uso de JavaScript vanilla cuando fuera necesario.

## Resultados por agente

### Landing generada por Codex

La carpeta `Codex/` contiene la landing page generada por Codex. Esta versión fue producida a partir del mismo prompt inicial y resuelve la consigna de manera autónoma, con sus propios criterios de estructura, diseño visual, organización de archivos e interacción.

Archivo principal:

```text
Codex/index.html
```

### Landing generada por OpenCode

La carpeta `OpenCode/` contiene la landing page generada por OpenCode. Al igual que la versión de Codex, fue desarrollada desde el mismo prompt base, permitiendo comparar cómo cada agente interpreta y materializa una misma consigna Front End.

Archivo principal:

```text
OpenCode/index.html
```

## Portada final e integración

El proyecto final fue integrado en un único repositorio con una portada inicial de acceso ubicada en la carpeta `Portada/`.

La portada funciona como interfaz principal de navegación para la entrega académica. Desde allí se puede acceder directamente a:

1. El prompt exacto utilizado.
2. La landing generada por Codex.
3. La landing generada por OpenCode.

El archivo `index.html` ubicado en la raíz del proyecto funciona como punto de entrada principal y redirige a la portada. Esta decisión permite mantener una estructura clara para el repositorio y, al mismo tiempo, preparar el proyecto para un deploy unificado en Vercel.

La portada cumple con la consigna porque centraliza la navegación, presenta el objetivo de la práctica y facilita la revisión docente de las dos soluciones generadas.

## Estructura del proyecto

```text
.
├── Codex/
│   ├── AGENT_INFO.txt
│   ├── index.html
│   ├── PROMPT_USED.txt
│   ├── script.js
│   └── styles.css
├── OpenCode/
│   ├── AGENT_INFO.txt
│   ├── index.html
│   ├── PROMPT_USED.txt
│   ├── script.js
│   └── styles.css
├── Portada/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── Prompt/
│   └── prompt.txt
├── _PFO2_.pdf
├── index.html
└── README.md
```

## Deploy unificado

El deploy final del proyecto está disponible en:

https://practica-formativa-obligatoria-2.vercel.app/Portada/

Ese enlace dirige a la portada del proyecto. Desde esa interfaz se accede al prompt exacto utilizado y a las dos landing pages generadas por los agentes.

## Repositorio GitHub

Repositorio del proyecto:

https://github.com/LucasMonteras/Practica-Formativa-Obligatoria-2

## Capturas del proyecto

La consigna requiere incorporar evidencias visuales de las landing pages generadas.

Actualmente no se incluyen capturas dentro de la estructura del proyecto. Para completar esta sección, el estudiante debe agregar manualmente:

- Captura de la landing generada por Codex.
- Captura de la landing generada por OpenCode.
- Opcionalmente, captura de la portada final de acceso.

Una posible organización sugerida es crear una carpeta `capturas/` y ubicar allí las imágenes correspondientes, actualizando luego esta sección con los enlaces a cada archivo.

## Conclusión

Esta práctica permite observar cómo un mismo prompt puede producir resultados distintos según el agente utilizado. La comparación entre Codex y OpenCode evidencia la importancia de redactar consignas precisas, completas y orientadas a objetivos concretos.

El ejercicio también muestra que el prompt engineering no solo influye en el contenido generado, sino también en la estructura del código, la calidad visual, la organización de archivos y el grado de autonomía alcanzado por cada agente.
