<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Análisis y representación de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1.ajuste-tema1(data-aos="fade-right")
          p.mb-0 El análisis y la representación de datos en #[b Microsoft Excel] permiten transformar información en resultados útiles para la toma de decisiones. Mediante herramientas de organización, cálculo y presentación gráfica, es posible identificar comportamientos, tendencias y relaciones dentro de grandes volúmenes de datos.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img93.png', alt='').m-auto
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Análisis de datos
    p.mb-5 El análisis de datos en Microsoft Excel consiste en el proceso de examinar, interpretar y transformar información con el fin de obtener conclusiones útiles para la toma de decisiones. Este proceso implica el uso de herramientas que permiten organizar, filtrar, resumir y representar los datos de manera eficiente. El dominio de estas herramientas facilita la identificación de patrones, tendencias y comportamientos dentro de los datos.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Interpretación de información
    p.mb-5 A continuación, se presenta un pódcast sobre la interpretación de la información, explicando cómo el análisis de datos permite comprender su significado, establecer relaciones y obtener conclusiones relevantes para la toma de decisiones.
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.caja-tema4(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img94.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Interpretación de la información"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img95.png" ).m-auto
    p.mb-5 Existen diferentes técnicas que permiten comprender mejor la información disponible.
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4-1.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img96.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Análisis comparativo
            p Permite comparar valores entre diferentes registros.
            p.mb-0 #[b Ejemplo]: comparar ventas entre meses.
      .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4-1.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img97.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Identificación de máximos y mínimos
            p Permite detectar valores extremos.
            p.mb-0 #[b Ejemplo]: producto más vendido o menos vendido.
      .col-xl-4.col-md-9.mt-4(data-aos="zoom-in")
        .caja-tema4-1.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img98.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Análisis de tendencias
            p Permite identificar comportamientos a lo largo del tiempo.
            p.mb-0 #[b Ejemplo]: incremento de ventas en ciertos periodos.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo práctico
          p La siguiente tabla presenta un registro de ventas mensuales:
          .row.justify-content-center.mb-3
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Ventas mensuales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Mes
                      th.texto-left Ventas
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Enero
                      td.texto-left 1000
                    tr
                      td.ajuste-border-tabla.texto-left Febrero
                      td.texto-left 1500
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Marzo
                      td.texto-left 2000
          p.mb-0 Al analizar los datos, se evidencia una #[b tendencia de crecimiento en las ventas], ya que los valores aumentan de forma progresiva durante los tres meses registrados.
    p.mb-0 Este tipo de análisis permite anticipar comportamientos futuros y apoyar decisiones comerciales fundamentadas.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Uso de filtros avanzados
    p.mb-5 Los #[b filtros avanzados] en #[b Microsoft Excel] permiten aplicar criterios más complejos para visualizar subconjuntos específicos de datos. Son especialmente útiles cuando se requiere analizar grandes volúmenes de información y localizar registros que cumplen varias condiciones al mismo tiempo.
    h5 Diferencia entre filtros básicos y filtros avanzados
    p.mb-5 La siguiente comparación facilita comprender sus principales características:
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2.text-white Filtros básicos
        p.text-white.mb-0 Permiten aplicar una condición simple sobre una columna.
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2 Filtros avanzados
        p.mb-0 Permiten aplicar múltiples condiciones y criterios más específicos.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de criterios
    p Los filtros avanzados admiten diferentes formas de selección de datos:
    ul.fa-ul.estilo___ul.mb-5
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | #[b Condiciones múltiples]: evalúan más de una condición simultáneamente.
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | #[b Rangos de valores]: filtran datos dentro de límites establecidos.
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | #[b Combinación de criterios (Y / O)]: permiten unir condiciones que deben cumplirse juntas o de forma alternativa.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo práctico
          p Supóngase una base de datos de ventas y se requiere mostrar únicamente los registros que cumplan estas condiciones:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Ventas mayores a 1000. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Y pertenecientes a la ciudad Neiva. 
          p En este caso, el filtro avanzado seleccionará únicamente los registros que cumplan ambas condiciones al mismo tiempo.
          p.mb-0 #[b Aplicación en Excel]
          p.mb-3 Para utilizar esta herramienta, se sigue la siguiente ruta:
          p.mb-0 #[b Datos → Filtro avanzado]
          p.mb-3 Desde allí es posible definir el rango de datos y establecer los criterios de búsqueda.
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 31.
                span Filtrado de registros numéricos en una tabla de datos
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img99.png', alt='Captura de Microsoft Excel con tabla de datos y menú de filtro avanzado aplicado en la columna Ventas para mostrar únicamente registros seleccionados mediante criterios específicos. ').m-auto
    p.mb-5 El uso de filtros avanzados aporta beneficios importantes en el análisis de información:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          h4.mb-0.text-center Mayor especificidad
          p.mb-0.text-center Permite análisis más detallados.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          h4.mb-0.text-center Gestión eficiente
          p.mb-0.text-center Facilita el manejo de grandes volúmenes de datos.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          h4.mb-0.text-center Precisión
          p.mb-0.text-center Mejora la exactitud en la selección de registros.
      .col-xl-3.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img100.png" ).m-auto
    p.mb-5 El uso de filtros avanzados permite realizar consultas complejas sobre los datos, de forma similar a operaciones empleadas en bases de datos. Por esta razón, constituyen una herramienta clave para procesos de depuración, segmentación y análisis profesional de información en #[b Excel].
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Segmentación de datos
    p.mb-5 La #[b segmentación de datos] permite filtrar información de forma visual e interactiva mediante el uso de #[b segmentadores] (#[i slicers]). Esta herramienta facilita la exploración de datos al permitir selecciones rápidas mediante botones, sin necesidad de aplicar filtros manuales tradicionales. La segmentación de datos incorpora funciones que mejoran la experiencia de análisis:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4-1.h-100.ajuste-color-2
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img101.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Interfaz visual amigable
            p.mb-0 Presenta opciones claras y organizadas para filtrar información.
      .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4-1.h-100.ajuste-color-2
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img102.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Botones de selección
            p.mb-0 Permite elegir criterios con un clic.
      .col-xl-4.col-md-9.mt-4(data-aos="zoom-in")
        .caja-tema4-1.h-100.ajuste-color-2
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img103.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Filtrado dinámico
            p.mb-0 Actualiza los resultados de forma inmediata según la selección realizada.
    p.mb-5 Esta herramienta se utiliza principalmente en los siguientes elementos de Excel:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4-1.h-100.ajuste-color-3
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img104.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Tablas
            p.mb-0 Permite filtrar registros de forma rápida y ordenada.
      .col-xl-4.col-md-9.mt-4(data-aos="zoom-in")
        .caja-tema4-1.h-100.ajuste-color-3
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img105.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Tablas dinámicas
            p.mb-0 Facilita el análisis interactivo de grandes volúmenes de datos.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo práctico
          p Supóngase una tabla de ventas organizada por ciudad y mes. Si se incorpora un segmentador correspondiente al campo #[b Mes], será posible seleccionar una de las siguientes opciones:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Enero 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Febrero 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Marzo 
          p Al elegir cualquiera de estas opciones, los datos se filtran automáticamente y solo permanecen visibles los registros asociados al mes seleccionado.
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 32.
                span Uso de segmentación de datos para filtrar información en tablas 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img106.png', alt='Hoja de cálculo de Excel con tabla de datos y segmentación por Mes mediante botones interactivos de enero, febrero y marzo, con marzo seleccionado como filtro activo. ').m-auto
    p.mb-5 El uso de segmentadores aporta beneficios importantes en el análisis de información:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          h4.mb-0.text-center Interacción sencilla
          p.mb-0.text-center Facilita el trabajo con los datos mediante controles visuales.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          h4.mb-0.text-center Mejora de la presentación
          p.mb-0.text-center Organiza la información de forma clara y ordenada.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          h4.mb-0.text-center Rapidez en el análisis
          p.mb-0.text-center  Permite consultas inmediatas sin modificar la base de datos.
      .col-xl-3.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img107.png" ).m-auto
    p.mb-0 La segmentación de datos permite desarrollar un análisis dinámico, mejorando la exploración de información sin alterar la estructura original de la tabla. Por ello, es una herramienta especialmente útil en paneles de control, reportes interactivos y procesos de toma de decisiones en #[b Microsoft Excel].    
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Introducción a tablas dinámicas
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Las #[b tablas dinámicas] son una herramienta avanzada de #[b Microsoft Excel] que permite resumir, analizar y reorganizar grandes volúmenes de datos de manera automática. Su uso facilita convertir registros extensos en información estructurada y útil para la toma de decisiones.
        p.mb-0 La función principal de una tabla dinámica consiste en transformar datos detallados en información resumida, organizada según diferentes criterios de análisis. Las tablas dinámicas incorporan múltiples funciones que optimizan el tratamiento de la información:
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img108.png" ).m-auto
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img109.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img110.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Agrupación de datos
                p.mb-0.text-center Organiza registros por categorías, fechas, productos, ciudades u otros campos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img111.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cálculos automáticos
                p.mb-0.text-center Genera sumas, promedios, conteos y otros cálculos sin fórmulas manuales.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img112.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Análisis multidimensional
                p.mb-0.text-center Permite relacionar variables en filas, columnas, filtros y valores.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img113.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Interacción dinámica
                p.mb-0.text-center Facilita reorganizar la información según nuevas necesidades de análisis.
        .row.justify-content-center.mb-5
          .col-xl-10
            .caja-tema4-2(data-aos="zoom-in")
              .row.align-items-center
                .col-xl.order-2.order-lg-1.fit___box_container
                  p Para crear una tabla dinámica en Excel, se recomienda seguir este procedimiento:
                  ul.fa-ul.estilo___ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      |  Seleccionar el rango de datos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      |  Ir a Insertar → Tabla dinámica.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      |  Elegir la ubicación donde se insertará la tabla dinámica.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      |  Configurar los campos según el análisis requerido.
                .col-xl-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/img114.jpg', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo práctico
          p Supóngase una base de datos con información de ventas. La tabla dinámica podría configurarse de la siguiente manera:
          .row.justify-content-center.mb-3
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Configuración de tabla dinámica
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Área
                      th.texto-left Configuración
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left #[b Filtro]
                      td.texto-left Ciudad
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left #[b Filas]
                      td.texto-left Producto
                    tr
                      td.ajuste-border-tabla.texto-left #[b Columnas]
                      td.texto-left Valores
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left #[b Valores]
                      td.texto-left Suma total, suma cantidad
          p Con esta estructura, es posible analizar ventas por producto, filtrar por ciudad y obtener resultados consolidados automáticamente.
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 33.
                span Análisis de información mediante tabla dinámica con filtro por ciudad
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img115.png', alt='Hoja de cálculo de Microsoft Excel con tabla dinámica resumida, filtro por ciudad y campos organizados para analizar cantidades y valores totales por producto. ').m-auto
    p.mb-5 Las tablas dinámicas se utilizan en múltiples contextos profesionales y académicos:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4-3.h-100
          .p-4
            h4.text-center Reportes
            p.mb-0 Elaboración de informes consolidados.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4-3.h-100
          .p-4
            h4.text-center Análisis de ventas
            p.mb-0 Evaluación de resultados comerciales.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4-3.h-100
          .p-4
            h4.text-center Control de inventarios
            p.mb-0 Seguimiento de cantidades y movimientos.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema4-3.h-100
          .p-4
            h4.text-center Resúmenes estadísticos
            p.mb-0 Organización de datos numéricos para análisis.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema4-2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p El uso de tablas dinámicas aporta beneficios significativos en la gestión de información:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Automatización del análisis: reduce procesos manuales y repetitivos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Ahorro de tiempo: genera resultados rápidamente.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Flexibilidad: permite reorganizar campos según nuevas necesidades.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Presentación clara: facilita la comprensión de grandes volúmenes de datos.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img116.jpg', alt='').m-auto
    p Las tablas dinámicas constituyen una de las herramientas más potentes de #[b Excel] para el análisis de datos, ya que integran organización, cálculo y flexibilidad en un solo recurso. Su dominio resulta esencial para procesos administrativos, financieros, logísticos y estadísticos.
    p.mb-5 Se les invita a revisar el video #[b Creación y uso básico de tablas dinámicas en Microsoft Excel], donde profundizarán qué es una tabla dinámica, cómo crearla y el uso de filtros, filas, columnas y valores para analizar información.
    figure(data-aos="zoom-in")
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Tutorial tabla dinámica.    
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Representación gráfica de datos
    p.mb-5 La representación gráfica de datos en #[b Excel] permite presentar la información de forma clara, facilitando su análisis, interpretación y comunicación. Los gráficos transforman datos numéricos en elementos visuales que permiten identificar tendencias, comparaciones y comportamientos de manera ágil.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de gráficos (barras, líneas, circulares)
    p.mb-5 Los gráficos son representaciones visuales de datos que facilitan la comprensión de la información y apoyan la toma de decisiones.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gráfico de barras
                p.mb-0 Representa datos mediante barras horizontales o verticales. Se utiliza para comparar cantidades y analizar categorías. Ejemplo: ventas por producto.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img117.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gráfico de líneas
                p.mb-0 Representa datos mediante líneas que conectan puntos. Se utiliza para mostrar tendencias en el tiempo y analizar crecimiento o disminución. Ejemplo: ventas mensuales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img118.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gráfico circular (pastel)
                p.mb-0 Representa proporciones de un total. Se utiliza para mostrar porcentajes y distribución de datos. Ejemplo: participación de mercado.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img119.png', alt='' style="max-width: 500px").m-auto
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Creación de gráficos
    p.mb-5 La creación de gráficos es el proceso mediante el cual se transforman datos en representaciones visuales utilizando las herramientas de #[b Excel]. Esta función permite interpretar información numérica de manera más clara y facilita el análisis de tendencias, comparaciones y resultados. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema4-2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p Para crear un gráfico en Excel, se recomienda seguir los siguientes pasos:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Seleccionar el rango de datos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Ir a la pestaña Insertar.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Elegir el tipo de gráfico.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Insertar el gráfico.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img120.jpg', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo práctico
          p Si se dispone de una tabla de ventas mensuales, puede crearse un #[b gráfico de barras] para representar la tendencia de los datos y comparar resultados entre periodos.
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 34.
                span  Selección de gráficos de columnas mediante la herramienta Insertar gráfico
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img121.png', alt='Ventana de Insertar gráfico de Microsoft Excel con categorías de gráficos disponibles y selección del tipo columnas agrupadas a partir de una tabla de datos. ').m-auto
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Elementos del gráfico
    p.mb-5 Los gráficos incluyen componentes que facilitan su comprensión:
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 35.
          span  Ejemplo  elementos del gráfico
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img122.png', alt='Diagrama de gráfico de columnas que identifica sus componentes principales: título, ejes, leyenda y series de datos. ').m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-2(data-aos="zoom-in")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Título]: indica el tema o contenido del gráfico.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Ejes]: organizan los valores y categorías representadas.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Leyenda]: identifica las series de datos utilizadas.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Series de datos]: conjunto de valores representados gráficamente.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Personalización de gráficos
    p.mb-5 La personalización de gráficos permite ajustar el diseño y formato para mejorar su presentación, comprensión y adaptación al contexto de uso.
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img123.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Opciones de personalización
            p.mb-0.text-center Incluye cambiar colores, modificar título, ajustar ejes, agregar etiquetas de datos y aplicar estilos predeterminados.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img124.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Ejemplo práctico
            p.mb-0.text-center En un gráfico de ventas mensuales puede cambiarse el color de las barras, agregar el título Ventas mensuales e incorporar valores en cada barra.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img125.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Ventajas
            p.mb-0.text-center Mejora la claridad, facilita la interpretación de patrones y permite adaptar el gráfico según el público o propósito.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img126.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Análisis técnico
            p.mb-0.text-center La personalización de gráficos en Microsoft Excel fortalece el análisis visual de datos y aporta valor en informes, presentaciones ejecutivas y toma de decisiones sustentadas en información cuantitativa.
        .caja-tema1-4.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
          .col
            h3 Análisis visual de resultados
        p.mb-5 El análisis visual de resultados es el proceso de interpretar la información presentada en los gráficos para obtener conclusiones útiles. Esta práctica permite comprender el comportamiento de los datos y apoyar la toma de decisiones con mayor rapidez. Proceso de interpretar la información presentada en los gráficos para obtener conclusiones relevantes.
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2.text-white Elementos a analizar
        p.text-white Los gráficos y análisis de datos permiten interpretar la información de manera ágil, facilitando la identificación de comportamientos y relaciones relevantes, entre ellas:
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Tendencias]: permiten identificar crecimientos, disminuciones o estabilidad en los datos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Comparaciones]: facilitan establecer diferencias entre categorías, productos o periodos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Proporciones]: ayudan a reconocer la participación de cada elemento dentro de un total. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Variaciones]: permiten detectar cambios significativos entre valores.
      .col-xl-6.col-md-10.tarjeta.color-secundario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2 Aplicaciones
        p El análisis de la información permite convertir los datos en insumos útiles para la gestión y el seguimiento de procesos, aportando beneficios como los siguientes:
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Toma de decisiones]: apoya acciones basadas en datos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Evaluación de resultados]: permite medir desempeño y cumplimiento de objetivos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Presentación de informes]: facilita comunicar información de forma clara y organizada.
    .row.justify-content-center.align-items-center.mb-0
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo práctico
          p Una empresa comercial registra información de ventas por ciudad, producto, cantidad, precio y valor total. Con estos datos, en Excel se construye una tabla dinámica para resumir la información y un gráfico de columnas para comparar el comportamiento de cada producto. Este procedimiento facilita identificar cuáles artículos presentan mayor volumen de ventas y apoya la toma de decisiones
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 36.
                span Visualización de datos mediante tabla dinámica y gráfico de columnas
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img127.png', alt='Hoja de cálculo de Microsoft Excel con tabla de datos original, tabla dinámica resumida y gráfico de columnas para analizar cantidades por producto y ciudad. ').m-auto    
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Herramientas de automatización y control
    p.mb-5 Las herramientas de automatización y control en #[b Excel] permiten optimizar procesos, reducir errores y garantizar la integridad de la información. Estas funcionalidades facilitan la gestión de datos, automatizan tareas repetitivas y aseguran que la información cumpla con criterios definidos.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Formato condicional
    p.mb-5 El formato condicional permite aplicar formatos automáticos a las celdas que cumplen determinadas condiciones, facilitando la identificación visual de información relevante. Es una herramienta que asigna formatos automáticos según reglas previamente establecidas. Su función principal consiste en resaltar datos relevantes de manera automática, de acuerdo con condiciones definidas por el usuario.
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2.text-white Tipos de formato condicional
        p.text-white El formato condicional ofrece distintas opciones para destacar información relevante y facilitar el análisis visual de los datos, entre las principales se encuentran:
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Resaltar celdas]: identifica valores mayores que, menores que o iguales a un criterio. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Barras de datos]: representan magnitudes dentro de la celda. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Escalas de color]: asignan colores según niveles de valor. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Conjuntos de iconos]: utilizan símbolos para clasificar resultados.
      .col-xl-6.col-md-10.tarjeta.color-secundario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2 Ventajas
        p El uso del formato condicional aporta ventajas importantes en la gestión de datos, ya que mejora la lectura de la información y agiliza su interpretación, entre ellas:
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Identificación rápida de información]: facilita reconocer datos importantes. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Mejora la visualización]: organiza la información con criterios visuales claros. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Facilita el análisis]: permite detectar patrones, excepciones y tendencias.
    p.mb-5 Convierte los datos numéricos en información más comprensible y agiliza los procesos de revisión y toma de decisiones.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Validación de datos
    p.mb-5 La validación de datos permite restringir el tipo de información que se puede ingresar en una celda, garantizando la calidad y consistencia de los datos. Es una herramienta que controla la información permitida mediante reglas previamente establecidas. Su función principal consiste en regular la entrada de datos para asegurar registros correctos y consistentes.
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2.text-white Tipos de validación
        p.text-white La validación de datos dispone de diferentes opciones para controlar la información ingresada y mantener registros consistentes, entre las principales se encuentran:
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Lista desplegable]: permite seleccionar opciones predefinidas. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Número]: restringe valores a un rango permitido. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Fecha]: acepta únicamente fechas válidas. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Texto personalizado]: aplica condiciones específicas al contenido ingresado.
      .col-xl-6.col-md-10.tarjeta.color-secundario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2 Ventajas
        p La validación de datos genera beneficios importantes en el manejo de la información, ya que fortalece el control de registros y mejora la consistencia de la base de datos, entre ellos:
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Reduce errores]: evita registros incorrectos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Estandariza la información]: mantiene criterios uniformes. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  #[b Mejora la calidad de los datos]: fortalece la confiabilidad de la base de datos.
    p.mb-5 Es fundamental en formularios, bases de datos y procesos donde se requiere precisión en el ingreso de información.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo
          p En una institución educativa se requiere registrar calificaciones en una hoja de cálculo evitando errores de digitación. Para ello, en Excel se aplica la herramienta de validación de datos en la columna de notas, permitiendo únicamente valores decimales entre 1 y 5. De esta manera, se mejora la calidad del registro, se reducen inconsistencias y se facilita el cálculo automático de resultados académicos.
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 37.
                span Configuración de validación de datos para restringir notas entre 1 y 5 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img128.png', alt='Captura de Microsoft Excel con ventana de Validación de datos configurada para permitir valores decimales entre 1 y 5 en una columna de calificaciones. ').m-auto  
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Protección de hojas
    p.mb-5 La protección de hojas permite restringir el acceso o la modificación de determinadas celdas, asegurando la integridad de la información. Es una función que limita cambios no autorizados en una hoja de cálculo o en áreas específicas. Su función principal consiste en evitar modificaciones no autorizadas y resguardar información sensible.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Opciones de protección
                p La protección de hojas ofrece diversas alternativas para resguardar la información y controlar los cambios realizados en la hoja de cálculo, entre las principales se encuentran:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Bloquear celdas]: impide edición en celdas seleccionadas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Proteger hoja con contraseña]: restringe cambios mediante clave de acceso.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Permitir edición en ciertas áreas]: habilita modificaciones solo en rangos autorizados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img129.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ejemplo práctico
                p Bloquear fórmulas para evitar alteraciones y permitir únicamente el ingreso de datos en determinadas celdas.
                h4.mb-0 Aplicación en Excel
                p.mb-0 Revisar → Proteger hoja.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img130.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ventajas
                p La protección de hojas aporta ventajas relevantes en la administración de archivos, ya que resguarda la información y limita modificaciones no autorizadas, entre ellas:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Seguridad de la información]: protege datos importantes. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Prevención de errores]: evita cambios accidentales. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Control de acceso]: define permisos según necesidad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img131.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Es fundamental en entornos colaborativos donde múltiples usuarios interactúan con la misma información.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Uso básico de funciones automáticas
    p.mb-5 Las funciones automáticas permiten realizar cálculos de forma rápida mediante herramientas integradas en Microsoft Excel. Su uso facilita tareas frecuentes sin necesidad de escribir fórmulas manualmente. Son un conjunto de herramientas integradas que ejecutan cálculos automáticos de manera rápida y sencilla. Su función principal consiste en automatizar cálculos sin escribir fórmulas manualmente.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Herramientas principales
                p Las funciones automáticas agilizan cálculos frecuentes en Microsoft Excel. Entre las principales se encuentran:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Autosuma]: calcula sumas automáticamente. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Promedio automático]: obtiene el valor promedio de un rango. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Contar números]: contabiliza celdas con valores numéricos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Funciones rápidas desde la barra:] acceso inmediato a operaciones frecuentes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img132.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ejemplo práctico
                p Seleccionar un rango de datos y utilizar #[b Autosuma] para calcular el total automáticamente.
                h4.mb-0 Aplicación en Excel:
                p.mb-0 Inicio → Autosuma.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img133.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ventajas
                p Las funciones automáticas ofrecen beneficios que facilitan el trabajo con datos, entre ellos:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ahorro de tiempo]: reduce tareas manuales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Facilidad de uso]: permite operar sin conocimientos avanzados de fórmulas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Reducción de errores]: disminuye fallos en cálculos repetitivos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img134.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
