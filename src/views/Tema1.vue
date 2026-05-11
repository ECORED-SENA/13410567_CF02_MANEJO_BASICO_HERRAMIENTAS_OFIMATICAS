<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Hoja de cálculo – Microsoft Excel
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1(data-aos="fade-right")
          p.mb-0 #[b Microsoft Excel] es una herramienta de hoja de cálculo desarrollada por Microsoft que permite crear, organizar, procesar y analizar información mediante tablas, fórmulas, funciones y gráficos. Hace parte del paquete de aplicaciones ofimáticas y se utiliza ampliamente en contextos académicos, administrativos y empresariales. Excel se destaca por su capacidad para manejar grandes volúmenes de datos, automatizar cálculos y facilitar la representación de la información, lo que lo convierte en una herramienta fundamental para la gestión de datos.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img1.png', alt='').m-auto
    p.mb-5 A continuación, se presenta un video sobre la importancia y aplicaciones de Microsoft Excel, destacando sus principales funciones y su utilidad en diferentes áreas académicas, administrativas, financieras y empresariales.
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Importancia y aplicaciones de Microsoft Excel.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Interfaz y entorno de trabajo
    p.mb-5 La interfaz de #[b Microsoft Excel] corresponde al conjunto de elementos visuales que permiten la interacción del usuario con la hoja de cálculo. Este entorno está diseñado para facilitar la organización, manipulación y análisis de datos de manera estructurada.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-intro.ajuste-caja-intro(data-aos="fade-right")
          p.mb-0 El entorno de trabajo integra herramientas, paneles y espacios que permiten ingresar información, aplicar fórmulas, generar gráficos y gestionar múltiples hojas dentro de un mismo archivo. Su correcta comprensión es fundamental para aprovechar al máximo las funcionalidades del programa.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img2.svg', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-1(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p La interfaz de Excel presenta características que favorecen el trabajo eficiente con la información:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Es intuitiva y organizada, basada en pestañas y grupos de herramientas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Permite el acceso rápido a funciones mediante la cinta de opciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Facilita la edición de datos a través de la barra de fórmulas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ofrece un espacio estructurado en forma de filas y columnas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Permite trabajar con múltiples hojas dentro de un mismo libro. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img3.jpg', alt='').m-auto
    p.mb-5 El entorno de #[b Microsoft Excel] está compuesto por diferentes áreas funcionales. Cada una cumple un papel específico dentro del manejo de la información.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 1.
          span Elementos que conforman el entorno de trabajo
        figure(data-aos="zoom-in").mb-3
          img(src='@/assets/curso/temas/img4.png', alt='Diagrama del entorno de Microsoft Excel organizado en tres zonas funcionales: parte superior con menús, comandos y herramientas; zona central con la hoja de cálculo formada por celdas en filas y columnas; y zona inferior con pestañas de hojas y barra de estado. ').m-auto
        .caja-tema1-2(data-aos="zoom-in")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Zona superior]: contiene herramientas, menús y comandos de trabajo.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Zona central]: corresponde al área de trabajo conformada por celdas organizadas en filas y columnas.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Zona inferior]: incluye las hojas del libro y la barra de estado del documento.
    p Cada una de estas áreas contribuye al desarrollo ordenado de tareas y procesos dentro de la hoja de cálculo.
    p.mb-5 El conocimiento de la interfaz permite mejorar el desempeño en el uso del programa y aprovechar sus recursos de manera adecuada. Entre sus principales beneficios se encuentran:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img5.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Navegar con precisión dentro del archivo. 
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img6.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Identificar rápidamente las herramientas necesarias. 
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img7.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Reducir errores en el manejo de datos. 
      .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img8.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Optimizar el tiempo en la ejecución de tareas.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Componente de la interfaz
    p.mb-5 La interfaz de #[b Microsoft Excel] está compuesta por diversos elementos que permiten al usuario interactuar con la hoja de cálculo, ingresar información, aplicar fórmulas y gestionar datos de manera eficiente. Cada componente cumple una función específica dentro del entorno de trabajo. El dominio de estos elementos es fundamental para garantizar un uso eficiente de la herramienta, reducir errores y optimizar procesos.
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 2.
          span Componente de la interfaz
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img10.png', alt='Esquema general de la interfaz de Microsoft Excel con barra de título, acceso rápido, cinta de opciones, cuadro de nombres, barra de fórmulas, área de trabajo, filas, columnas, pestañas de hojas y barra de estado. ').m-auto
    p.mb-5 A continuación, se presentan los principales componentes de la interfaz de Excel y su utilidad dentro del trabajo diario.
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in").mb-5
      .row(titulo="Barra de título").ajuste-cajaAcordion
        p.mb-3 Ubicada en la parte superior de la ventana. Presenta el nombre del archivo activo seguido del programa. Permite identificar el documento en uso, conocer su estado (guardado o autoguardado) y controlar la ventana mediante las opciones minimizar, maximizar y cerrar.
      .row(titulo="Barra de acceso rápido").ajuste-cajaAcordion
        p.mb-3 Contiene comandos de uso frecuente como guardar, deshacer y rehacer. Puede personalizarse según las necesidades del usuario. Facilita acciones inmediatas y reduce tiempos de operación.
      .row(titulo="Cinta de opciones").ajuste-cajaAcordion
        p.mb-3 Constituye el núcleo de control de Excel. Organiza herramientas en pestañas, grupos y comandos. Incluye pestañas como #[b Inicio], #[b Insertar], #[b Fórmula]s y #[b Datos]. Facilita el acceso a funciones avanzadas y la automatización de tareas.
      .row(titulo="Cuadro de nombres").ajuste-cajaAcordion
        p.mb-3 Ubicado a la izquierda de la barra de fórmulas. Indica la referencia de la celda activa, por ejemplo, #[b B5]. Permite desplazarse rápidamente a celdas o rangos y asignar nombres personalizados.
      .row(titulo="Barra de fórmulas").ajuste-cajaAcordion
        p.mb-3 Espacio donde se ingresa, consulta o modifica el contenido de la celda activa. Permite trabajar con datos, fórmulas y funciones. Ejemplo: =PROMEDIO(A1:A10).
      .row(titulo="Área de trabajo").ajuste-cajaAcordion
        p.mb-3 Zona principal de la hoja de cálculo, organizada como cuadrícula. Allí se desarrollan operaciones de ingreso de datos, organización de información y análisis.
      .row(titulo="Filas y columnas").ajuste-cajaAcordion
        p.mb-3 Las filas se identifican con números y las columnas con letras. Su intersección forma una celda. Permiten estructurar la información en formato tabular.
      .row(titulo="Celdas").ajuste-cajaAcordion
        p.mb-3 Unidad básica de almacenamiento de datos. Pueden contener texto, números o fórmulas. Constituyen la base operativa de Excel.
      .row(titulo="Pestañas de hojas").ajuste-cajaAcordion
        p.mb-3 Ubicadas en la parte inferior del libro. Permiten crear, renombrar y organizar múltiples hojas dentro de un mismo archivo.
      .row(titulo="Barra de estado").ajuste-cajaAcordion
        p.mb-3 Situada en la parte inferior de la ventana. Presenta información rápida como suma, promedio, conteo y nivel de zoom.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-1(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p Estos componentes permiten desarrollar tareas con mayor orden y eficiencia. Por ejemplo:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Una empresa puede organizar su archivo en varias hojas: #[b Ventas], #[b Inventario] y #[b Reportes]. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Al seleccionar varias celdas, la barra de estado calcula automáticamente la suma o el promedio. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | El uso de rangos nombrados mejora la claridad en fórmulas complejas. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img11.jpg', alt='').m-auto
    p.mb-0 El conocimiento de los componentes de la interfaz mejora la productividad y disminuye errores operativos. Además, facilita la navegación, agiliza procesos y fortalece el manejo profesional de la hoja de cálculo.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Cinta de opciones y organización de herramientas
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1(data-aos="fade-right")
          p.mb-0 La #[b cinta de opciones] es el principal elemento de control en #[b Microsoft Excel], ya que concentra las herramientas necesarias para la gestión, edición y análisis de datos. Está diseñada bajo un modelo jerárquico que organiza las funciones de forma lógica, facilitando el acceso según el tipo de tarea que se desea realizar. El dominio de la cinta de opciones permite optimizar el uso de Excel, reducir tiempos de ejecución y aplicar correctamente las herramientas disponibles.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img12.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-5(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img13.jpg', alt='').m-auto
            .col-xl
              p.mb-0 La cinta de opciones en Microsoft Excel está organizada en tres niveles fundamentales: #[b pestañas, grupos de herramientas y comandos]. Esta estructura favorece una navegación ordenada y eficiente dentro del programa.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Pestañas (#[i Tabs])
    p.mb-5 Las pestañas son las categorías principales que agrupan las herramientas según su funcionalidad. Cada una está orientada a un tipo específico de tarea dentro de Excel. A continuación, se relacionan las principales pestañas y su utilidad:
    .caja-tema1-6.mb-3(data-aos="zoom-in")
      .row.justify-content-center
        .col-xl.mb-4.mb-lg-0
          .caja-tema1-7.mb-3(data-aos="fade-right")   
            h5.mb-0 Inicio
          p.mb-0 de edición y formato. Incluye copiar, pegar, cambiar fuente, alinear contenido y aplicar estilos.
        .col-xl-auto.col-md-9
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 3.
            span  Inicio
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img14.png', alt='Captura de la pestaña Inicio de Excel con grupos de herramientas para portapapeles, fuente, alineación, formatos numéricos, estilos, celdas y edición. ').m-auto
    .caja-tema1-6.mb-3(data-aos="zoom-in")
      .row.justify-content-center
        .col-xl.mb-4.mb-lg-0
          .caja-tema1-7.mb-3(data-aos="fade-right")   
            h5.mb-0 Insertar
          p.mb-0 Permite agregar elementos visuales y estructurales. Incluye tablas, gráficos, imágenes, formas e hipervínculos.
        .col-xl-auto.col-md-9
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 4.
            span Insertar
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img15.png', alt='Captura de la pestaña Insertar de Excel con comandos para tablas, gráficos, ilustraciones, vínculos, texto y complementos. ').m-auto
    .caja-tema1-6.mb-3(data-aos="zoom-in")
      .row.justify-content-center
        .col-xl.mb-4.mb-lg-0
          .caja-tema1-7.mb-3(data-aos="fade-right")   
            h5.mb-0 Diseño de página
          p.mb-0 Permite configurar la apariencia del documento para impresión. Incluye márgenes, orientación, tamaño de hoja y temas.
        .col-xl-auto.col-md-9
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 5.
            span Diseño de página
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img16.png', alt='Captura de la pestaña Diseño de página con herramientas de temas, márgenes, orientación, tamaño, área de impresión y escala. ').m-auto
    .caja-tema1-6.mb-3(data-aos="zoom-in")
      .row.justify-content-center
        .col-xl.mb-4.mb-lg-0
          .caja-tema1-7.mb-3(data-aos="fade-right")   
            h5.mb-0 Fórmulas
          p.mb-0 Permite trabajar con funciones y cálculos. Incluye funciones matemáticas, lógicas, financieras y auditoría de fórmulas.
        .col-xl-auto.col-md-9
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 6.
            span Fórmulas
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img17.png', alt='Captura de la pestaña Fórmulas con biblioteca de funciones, nombres definidos, auditoría de fórmulas y opciones de cálculo. ').m-auto
    .caja-tema1-6.mb-3(data-aos="zoom-in")
      .row.justify-content-center
        .col-xl.mb-4.mb-lg-0
          .caja-tema1-7.mb-3(data-aos="fade-right")   
            h5.mb-0 Datos
          p.mb-0 Permite gestionar y analizar información. Incluye ordenar, filtrar, validar datos y crear tablas dinámicas.
        .col-xl-auto.col-md-9
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 7.
            span Datos
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img18.png', alt='Captura de la pestaña Datos con herramientas de obtener datos, ordenar, filtrar, validación, conexiones y análisis. ').m-auto
    .caja-tema1-6.mb-3(data-aos="zoom-in")
      .row.justify-content-center
        .col-xl.mb-4.mb-lg-0
          .caja-tema1-7.mb-3(data-aos="fade-right")   
            h5.mb-0 Revisar
          p.mb-0 Permite controlar, proteger y validar contenido. Incluye ortografía, comentarios y protección de hojas.
        .col-xl-auto.col-md-9
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 8.
            span  Revisar
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img19.png', alt='Captura de la pestaña Revisar con comandos de ortografía, comentarios, accesibilidad, protección de hoja y control de cambios. ').m-auto
    .caja-tema1-6.mb-5(data-aos="zoom-in")
      .row.justify-content-center
        .col-xl.mb-4.mb-lg-0
          .caja-tema1-7.mb-3(data-aos="fade-right")   
            h5.mb-0 Vista
          p.mb-0 Permite modificar la forma de trabajo del documento. Incluye zoom, vistas de hoja y organización de ventanas.
        .col-xl-auto.col-md-9
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 9.
            span Vista
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img20.png', alt='Captura de la pestaña Vista con herramientas de zoom, inmovilizar paneles, vistas del libro y organización de ventanas. ').m-auto
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Grupos de herramientas (#[i Groups])
    p.mb-5 Las pestañas organizan las herramientas según el tipo de actividad que se desea desarrollar. Esto permite al usuario localizar funciones con rapidez y trabajar de manera lógica dentro del programa. El conocimiento de las pestañas mejora la productividad, facilita la ejecución de tareas específicas y fortalece el manejo profesional de Excel en contextos académicos, administrativos y empresariales.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-8(data-aos="zoom-in").mb-3
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p.mb-0 Dentro de cada pestaña, las herramientas se organizan en #[b grupos] según su funcionalidad específica. Esta distribución permite localizar con rapidez los comandos relacionados y mejora la eficiencia en el trabajo dentro de #[b Microsoft Excel]. Los grupos reúnen herramientas con objetivos similares, lo que facilita la ejecución de tareas sin necesidad de recorrer toda la cinta de opciones.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img21.jpg', alt='').m-auto
        h5.mb-0 Ejemplo: pestaña Inicio
        p.mb-3 La pestaña Inicio contiene algunos de los grupos más utilizados durante el trabajo diario en Excel. 
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 10.
          span Grupos de Excel 
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img22.png', alt='Captura de la pestaña Inicio resaltando la organización por grupos: portapapeles, fuente, alineación, número, estilos, celdas y edición. ').m-auto
    p.mb-5 A continuación, se presentan sus principales componentes:
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img24.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Portapapeles
            p.mb-0.text-center Incluye comandos para copiar, pegar, cortar y duplicar información.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img25.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Fuente
            p.mb-0.text-center Permite modificar el tipo de letra, tamaño, color, negrita, cursiva y otros formatos de texto.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img26.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Alineación
            p.mb-0.text-center Organiza la posición del contenido dentro de la celda: horizontal, vertical y orientación del texto.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img27.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Número
            p.mb-0.text-center Permite aplicar formatos numéricos como moneda, porcentaje, fecha, decimal o texto.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img28.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Estilos
            p.mb-0.text-center Incluye formato condicional, estilos de celda y formatos predefinidos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img29.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Celdas
            p.mb-0.text-center Permite insertar, eliminar, ajustar el tamaño y administrar filas, columnas o celdas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img30.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Edición
            p.mb-0.text-center Contiene herramientas como autosuma, buscar, reemplazar, ordenar y rellenar.
        p.mb-5 Los grupos permiten organizar herramientas relacionadas dentro de cada pestaña, facilitando una navegación más rápida y ordenada. Gracias a esta estructura, el usuario identifica con facilidad la herramienta adecuada según la tarea requerida. El conocimiento de los grupos de herramientas mejora la productividad, reduce tiempos de búsqueda y fortalece el manejo operativo de Excel en actividades académicas, administrativas y empresariales.
        .caja-tema1-4.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
          .col
            h3 Comandos (#[i Commands])
        p.mb-5 
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in").mb-5
      .row(titulo="Ejemplos de comandos").ajuste-cajaAcordion
        p Dentro de Microsoft Excel existen múltiples comandos que permiten ejecutar acciones específicas sobre la información. Entre los más utilizados se encuentran: 
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Negrita]: resalta texto o valores importantes. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Combinar y centrar]: une varias celdas y centra el contenido. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Autosuma]: realiza cálculos automáticos de forma rápida.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Formato condicional]: aplica estilos según reglas establecidas. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Insertar gráfico]: genera representaciones gráficas de los datos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Filtro]: permite localizar información según criterios definidos.
      .row(titulo="Función de los comandos").ajuste-cajaAcordion
        p Los comandos permiten realizar operaciones concretas sobre los datos almacenados en la hoja de cálculo. Gracias a ellos es posible: 
        ul.fa-ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Editar contenido. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Modificar formatos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Ejecutar cálculos matemáticos y lógicos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Analizar grandes volúmenes de información. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Organizar registros. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Aplicar criterios de búsqueda. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Automatizar tareas frecuentes. 
        p.mb-3 Su uso adecuado mejora la productividad, reduce errores y optimiza el trabajo dentro de Excel.
      .row(titulo="Integración de la estructura").ajuste-cajaAcordion
        p La cinta de opciones funciona mediante una estructura jerárquica compuesta por tres niveles: 
        ul.fa-ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Pestañas]: organizan las herramientas según el tipo de tarea, como Inicio, Insertar o Fórmulas. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Grupos]: reúnen herramientas relacionadas dentro de cada pestaña, como Fuente, Alineación o Número. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Comandos]: corresponden a las acciones específicas que ejecuta el usuario. 
        p.mb-3 Esta organización permite acceder de manera lógica, rápida y eficiente a todas las funciones del programa.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-9(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              h5.mb-0 Ejemplo aplicado
              p Para crear un gráfico en Excel, el proceso habitual es el siguiente:
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | 
                  p.mb-0.ajuste-p-caja Ir a la pestaña #[b Insertar]. 
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | 
                  p.mb-0.ajuste-p-caja Ubicar el grupo #[b Gráficos]. 
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | 
                  p.mb-0.ajuste-p-caja Seleccionar el comando #[b Insertar gráfico de columnas].
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img31.jpg', alt='').m-auto
    p.mb-5 El uso adecuado de la cinta de opciones aporta ventajas operativas importantes:
    .row.justify-content-center.mb-5
      .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-10.h-100
          .p-4
            p.mb-0.text-center Acceso rápido a herramientas.
      .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-10.h-100
          .p-4
            p.mb-0.text-center Ejecución de funciones sin escribir comandos manuales.
      .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-10.h-100
          .p-4
            p.mb-0.text-center Automatización de procesos.
      .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-10.h-100
          .p-4
            p.mb-0.text-center Organización del trabajo según el tipo de tarea.
      .col-xl-2.col-md-9(data-aos="zoom-in")
        .caja-tema1-10.h-100
          .p-4
            p.mb-0.text-center Mayor productividad en la gestión de información.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Area de trabajo: celdas, filas, columnas y hojas
    p.mb-5 El área de trabajo en #[b Microsoft Excel] es el espacio principal donde se realiza la gestión, organización y análisis de la información. Está estructurada en forma de cuadrícula, compuesta por celdas organizadas en filas y columnas, lo que permite almacenar y procesar datos de manera ordenada. El dominio de este entorno es fundamental, ya que constituye la base para la aplicación de fórmulas, funciones y herramientas de análisis.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Celdas
                p Las celdas son la unidad básica de #[b Microsoft Excel] donde se almacena la información. Se identifican por la intersección entre una columna y una fila, por ejemplo: #[b A1, B5, C10]. Cada celda puede contener distintos tipos de datos: 
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Texto (ejemplo: “Producto”). 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Número (ejemplo: 1500). 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Fórmulas (ejemplo: =A1+B1). 
                p Conceptos clave: 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Celda activa]: celda seleccionada donde se ingresan datos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Rango]: conjunto de celdas, por ejemplo: A1:A10.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 11.
                  span Celdas
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img33.png', alt='Ilustración de hoja de cálculo con cuadrícula de Excel y una celda activa identificada mediante coordenadas de columna y fila.').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Filas
                p Las filas son conjuntos horizontales de celdas dentro de la hoja de cálculo. Se identifican mediante números consecutivos: #[b 1, 2, 3...] 
                p Funciones: 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Facilitan la agrupación de información relacionada. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Permiten recorrer datos de manera secuencial. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Organizan registros en sentido horizontal.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 12.
                  span Filas
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img34.png', alt='Ilustración de Excel con filas horizontales numeradas que permiten organizar registros de información. ').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Columnas
                p Las columnas son conjuntos verticales de celdas. Se identifican mediante letras: #[b A, B, C...] 
                p Funciones: 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Permiten clasificar información por categorías. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    |  Organizan datos por tipo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Facilitan cálculos y análisis.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 13.
                  span Columnas
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img35.png', alt='Ilustración de Excel con columnas verticales identificadas por letras para clasificar datos por categorías. ').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Hojas de cálculo
                p Las hojas permiten trabajar con múltiples conjuntos de datos dentro de un mismo archivo, denominado libro de Excel. Se ubican en la parte inferior de la ventana. 
                p #[b Características: ]
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Se pueden crear, eliminar, renombrar y duplicar. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Permiten separar información por temas. 
                p #[b Ejemplo: ]
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Hoja 1: Ventas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Hoja 2: Inventario. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Hoja 3: Reportes.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 14.
                  span Hojas de cálculo
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img36.png', alt='Captura de Excel con varias pestañas inferiores que representan hojas de trabajo dentro de un mismo libro. ').m-auto
    p.mb-5 La estructura de Excel funciona de forma integrada: 
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center  Las columnas organizan la información por tipo. 
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img38.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center  Las filas agrupan registros. 
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img39.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center  Las celdas almacenan los datos. 
      .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img40.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Las hojas permiten dividir la información en diferentes secciones.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo práctico aplicado
          p Suponga una tabla de ventas.
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cada dato se ubica en una celda. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cada producto corresponde a una fila. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cada tipo de dato corresponde a una columna. 
          p.mb-0 Para calcular el total puede utilizarse la fórmula:#[b  = B2*C2] 
          p Esto permite realizar cálculos automáticos de manera rápida y organizada.
          .row.justify-content-center
            .col-xl-9
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 15.
                span Ejemplo de cálculo de total de ventas en hoja de cálculo de Excel
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img41.png', alt='Tabla de ventas con productos, cantidades, precios unitarios y fórmula aplicada para calcular totales automáticamente. ').m-auto
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de datos en Excel
    p.mb-5 En #[b Microsoft Excel], los datos ingresados en las celdas pueden clasificarse en diferentes tipos, los cuales determinan la forma en que el programa interpreta, procesa y presenta la información. Identificar correctamente el tipo de dato es fundamental para garantizar cálculos precisos y un adecuado análisis de la información.
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 16.
          span Aplicación de formatos numéricos en hoja de cálculo 
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img42.png', alt='Hoja de cálculo con valores presentados en formatos número, moneda, porcentaje y fecha para mejorar la lectura de datos. ').m-auto
    p.mb-5 En este video se abordará un concepto fundamental para el manejo de hojas de cálculo: los tipos de datos en Microsoft Excel:
    .caja-tema1-12.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img43.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Tipos de datos
          p.mb-0 En este video se abordará un concepto fundamental para el manejo de hojas de cálculo: los tipos de datos en Microsoft Excel:
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=7nQVcBi3-co&t=31s ')" target="_blank" type="website")
            span Ver video
            i.fas.fa-link
    p.mb-5 A continuación, se presentan los principales tipos de datos utilizados en Excel.
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in").mb-5
          .row(titulo="Texto (Etiqueta)").ajuste-cajaAcordion
            p Corresponde a información descriptiva que no participa en cálculos. 
            .row.align-items-center.nuevo-estilo-ul
              .col-xl-3.mb-4.mb-lg-0
                h5 Ejemplos: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Nombre de personas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Productos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Descripciones. 
              .col-xl-3.mb-4.mb-lg-0
                h5 Ejemplo en Excel: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | A1: Juan Pérez. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | A2: Cuaderno. 
              .col-xl-6
                h5 Características: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Se alinea a la izquierda de forma predeterminada. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | No se utiliza directamente en operaciones matemáticas.
          .row(titulo="Número (Valor)").ajuste-cajaAcordion
            p Son datos cuantitativos que pueden emplearse en cálculos. 
            .row.align-items-center.nuevo-estilo-ul
              .col-xl-4.mb-4.mb-lg-0
                h5 Ejemplos: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | 100. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | 2500. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | 45.6. 
              .col-xl
                h5 Características: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Se alinean a la derecha. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Permiten operaciones matemáticas y estadísticas.
          .row(titulo="Fecha").ajuste-cajaAcordion
            p Representa valores relacionados con el tiempo en formato de fecha. 
            .row.align-items-center.nuevo-estilo-ul
              .col-xl-4.mb-4.mb-lg-0
                h5 Ejemplos: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | 10/05/2026. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | 01/01/2025. 
              .col-xl
                h5 Características: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Excel las reconoce como valores numéricos internos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Permiten cálculos como diferencias entre días, meses o años.
          .row(titulo="Hora").ajuste-cajaAcordion
            p Representa valores de tiempo en formato horario. 
            .row.align-items-center.nuevo-estilo-ul
              .col-xl-3.mb-4.mb-lg-0
                h5 Ejemplos: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | 08:30 AM. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | 14:45. 
              .col-xl
                h5 Aplicaciones: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Control de asistencia. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Registro de tiempos.
          .row(titulo="Fórmulas").ajuste-cajaAcordion
            p Son expresiones que realizan cálculos automáticamente a partir de otros datos. 
            .row.align-items-center.nuevo-estilo-ul
              .col-xl-3.mb-4.mb-lg-0
                h5 Ejemplos: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | =A1+B1 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | =SUMA(A1:A10) 
              .col-xl
                h5 Características: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Siempre comienzan con el signo igual (=). 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Generan resultados dinámicos cuando cambian los datos de origen.
          .row(titulo="Porcentaje").ajuste-cajaAcordion
            p Representa valores proporcionales respecto a cien. 
            .row.align-items-center.nuevo-estilo-ul
              .col-xl-3.mb-4.mb-lg-0
                h5 Ejemplos: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | 25 %. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | 80 %. 
              .col-xl
                h5 Aplicaciones: 
                ul.fa-ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Cálculo de descuentos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Indicadores de rendimiento.
          .row(titulo="Moneda").ajuste-cajaAcordion
            p Permite representar valores financieros con formato monetario. 
            p #[b Aplicaciones: ]
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de ingresos y gastos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Presupuestos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ventas y costos.
    p.mb-5 El tipo de dato define cómo Excel interpreta la información y cómo puede utilizarla en procesos posteriores.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo
          p Suponga una tabla de ventas.
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  #[b "100".] Texto. No participa directamente en cálculos.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  #[b 100]. Número. Puede utilizarse en operaciones matemáticas.
          h5 Ejemplo práctico aplicado
          p Suponga una tabla de ventas con los siguientes campos:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Producto. Texto.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cantidad. Número.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Precio. Número.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Total. Fórmula.
          .row.justify-content-center.mb-3
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 17.
                span Registro de datos 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img44.png', alt='Tabla de Excel con columnas de producto, cantidad, precio y total para el ingreso estructurado de información comercial. ').m-auto
          p.mb-0 Esta organización permite automatizar cálculos y mantener la información estructurada.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-13(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p El uso incorrecto del tipo de dato puede generar errores en los resultados. Entre los casos más frecuentes se encuentran:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Ingresar números como texto. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Fechas con formato incorrecto. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Fórmulas mal escritas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Valores monetarios sin formato adecuado. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img45.jpg', alt='').m-auto
    p.mb-0 La correcta clasificación de los datos mejora la precisión, confiabilidad y eficiencia del trabajo en Excel.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
