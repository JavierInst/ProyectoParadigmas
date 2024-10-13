# biesVM

`biesVM` es un proyecto de máquina virtual que utiliza **ANTLR4** para analizar una gramática personalizada y ejecutar instrucciones en un entorno de **Node.js**. El objetivo es procesar instrucciones a través de una máquina virtual que interpreta un lenguaje ensamblador.

## Descripción de las carpetas

- **src/Grammar/**: Contiene la gramática definida para la máquina virtual utilizando ANTLR. Aquí también se encuentran los archivos generados por ANTLR para el lexer, el parser, y los visitantes personalizados.

  - **BiesVM.g4**: Archivo que define la gramática de la máquina virtual.
  - **BiesVMLexer.js** y **BiesVMParser.js**: Archivos generados por ANTLR que contienen las reglas de léxico y análisis sintáctico, respectivamente.
  - **BiesVMListener.js** y **BiesVMVisitor.js**: Implementaciones personalizadas para escuchar y visitar los nodos del árbol sintáctico.
  - **antlr-4.13.2-complete.jar**: Archivo ejecutable de ANTLR para generar el lexer y parser.

- **src/parser.js**: Contiene la función `parseAssembly`, que inicializa el lexer y el parser generados por ANTLR para analizar el código ensamblador.

- **tests/**: Contiene los tests unitarios del proyecto para asegurar el correcto funcionamiento de la máquina virtual. El archivo `biesVM.test.js` utiliza **Jest** para realizar las pruebas.

- **index.js**: Archivo principal del proyecto donde se inicializa y ejecuta la máquina virtual.

- **.prettierrc**: Configuración de **Prettier** para formatear el código de acuerdo con los estándares definidos.

- **eslint.config.mjs**: Configuración de **ESLint** para aplicar las reglas de estilo y detectar errores en el código.

## Generar archivos con ANTLR4

Para compilar la gramática definida en la carpeta `src/Grammar/`, sigue estos pasos:

1. Asegúrate de tener **ANTLR4** instalado y disponible en tu `PATH`.

2. Desde la carpeta `src/Grammar/`, ejecuta el siguiente comando para generar los archivos del lexer y parser:


   java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript BiesVM.g4 -o ../parser


### Ejecutar los tests

npm test


## Generación de Documentación

El proyecto utiliza **JSDoc** para generar documentación automáticamente a partir de los comentarios en el código fuente.

### Instalación de JSDoc

Para instalar JSDoc como una dependencia de desarrollo, ejecuta el siguiente comando:

npm install --save-dev jsdoc

Para generar la documentación se ejecuta el siguiente comando:

npm run doc

