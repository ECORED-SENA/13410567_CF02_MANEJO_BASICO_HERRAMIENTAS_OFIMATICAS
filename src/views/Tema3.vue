<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Fórmulas y funciones esenciales
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1.ajuste-tema1(data-aos="fade-right")
          p Las fórmulas y funciones en #[b Microsoft Excel] constituyen el núcleo del procesamiento de datos, ya que permiten realizar cálculos automáticos, analizar información y generar resultados dinámicos. Su correcta aplicación es fundamental para el manejo eficiente de hojas de cálculo.
          p.mb-0 Una #[b fórmula] es una expresión que realiza operaciones sobre datos, mientras que una función es una fórmula predefinida que simplifica cálculos complejos. Estas herramientas permiten optimizar tareas, reducir errores manuales y mejorar la productividad.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img65.png', alt='').m-auto
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Estructura de una fórmula
    p.mb-5 Una fórmula en Microsoft Excel es una expresión utilizada para realizar cálculos automáticos con valores, referencias de celdas, operadores y funciones. Es una herramienta esencial para procesar datos dentro de una hoja de cálculo. Todas las fórmulas deben iniciar con el signo igual (=), ya que este indica que se ejecutará una operación.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-6
        .caja-tema2-1(data-aos="zoom-in")
          p.mb-0.text-center La estructura general es la siguiente: = #[b  elemento operador elemento ]
    p.mb-5 Los elementos pueden corresponder a valores, referencias de celdas o funciones. A continuación, se presentan los componentes esenciales de una fórmula:
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Componentes de una fórmula en Excel
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Componente
                th.texto-left Descripción
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Signo igual (=)]
                td.texto-left Elemento inicial obligatorio que identifica el contenido como fórmula
              tr
                td.ajuste-border-tabla.texto-left #[b Referencias de celdas]
                td.texto-left Permiten utilizar valores almacenados en otras celdas
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Operadores]
                td.texto-left Símbolos que ejecutan operaciones matemáticas o lógicas
              tr
                td.ajuste-border-tabla.texto-left #[b Constantes]
                td.texto-left Valores fijos escritos directamente dentro de la fórmula.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Funciones]
                td.texto-left Fórmulas predefinidas para cálculos específicos.
    p.mb-5 Para comprender mejor su aplicación, se relacionan algunos ejemplos:
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Ejemplos de componentes de una fórmula en Microsoft Excel
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Elemento
                th.ajuste-border-tabla.texto-left Ejemplo
                th.texto-left Interpretación
            tbody
              tr
                td.ajuste-border-tabla.texto-left Signo igual y referencia
                td.ajuste-border-tabla.texto-left =A1+B1
                td.texto-left Suma el valor de la celda A1 con el valor de B1
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Operador de multiplicación
                td.ajuste-border-tabla.texto-left =A1×B1
                td.texto-left Multiplica los valores de A1 y B1
              tr
                td.ajuste-border-tabla.texto-left Constante
                td.ajuste-border-tabla.texto-left =A1×10
                td.texto-left Multiplica el valor de A1 por 10
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Función
                td.ajuste-border-tabla.texto-left =SUMA(A1:A10)
                td.texto-left Suma los valores comprendidos entre A1 y A10
    p.mb-5 A continuación, se presentan los principales operadores utilizados en Excel:
    .row.justify-content-center.mb-5
      .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img66.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center #[b Suma]
      .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img67.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center  #[b Resta]
      .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img68.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center  #[b Multiplicación]
      .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img69.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center  #[b División]
      .col-xl-2.col-md-9.mt-4(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img70.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center #[b Potencia]
    p.mb-5 El dominio de la estructura de las fórmulas permite construir cálculos más precisos, automatizar procesos repetitivos y aprovechar de manera eficiente las capacidades analíticas de Excel.
    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 22.
          span Inserción y selección de funciones mediante el asistente de fórmulas
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img71.png', alt='Ventana del asistente de funciones utilizada para buscar, seleccionar e insertar fórmulas en una celda. ').m-auto
    p.mb-5 Las fórmulas en #[b Microsoft Excel] permiten realizar cálculos automáticos mediante operadores matemáticos, referencias de celdas y funciones integradas. Su uso es fundamental para procesar información con rapidez, precisión y eficiencia.
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3.h-100
          h4.mb-0.text-center Fórmulas simples
          .ajuste-p_card
            p Realizan operaciones básicas entre celdas utilizando operadores matemáticos. 
            p.mb-0 #[b Ejemplo: ]
            p.mb-0 =A1+B1
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3.h-100
          h4.mb-0.text-center Fórmulas con múltiples operaciones
          .ajuste-p_card
            p Incluyen más de un operador dentro de la misma expresión. Excel resuelve la operación siguiendo un orden lógico de prioridad. 
            p.mb-0 #[b Ejemplo: ]
            p.mb-0 =A1+B1*C1
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema3.h-100
          h4.mb-0.text-center Fórmulas con funciones
          .ajuste-p_card
            p Utilizan funciones integradas de Excel para ejecutar cálculos específicos de forma automática. 
            p.mb-0 #[b Ejemplo: ]
            p.mb-0 =PROMEDIO(A1:A10)  
    p.mb-5 Para obtener resultados correctos, Excel aplica un orden de prioridad en las operaciones matemáticas.
    .tarjeta--container.row.justify-content-center.mb-0.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2.text-white Orden de prioridad de operaciones
        p.text-white Excel ejecuta las operaciones siguiendo un orden lógico para garantizar resultados correctos:
        ol.lista-ol--cuadro.mb-3.ajuste-ol
          li
            .lista-ol--cuadro__vineta
              span A
            | 
            p.mb-0.text-white Paréntesis. 
          li 
            .lista-ol--cuadro__vineta
              span B
            | 
            p.mb-0.text-white Potencias. 
          li 
            .lista-ol--cuadro__vineta
              span C
            | 
            p.mb-0.text-white Multiplicación y división. 
          li 
            .lista-ol--cuadro__vineta
              span D
            | 
            p.mb-0.text-white Suma y resta.
        p.text-white #[b Ejemplo aplicado:]
        p.text-white =(A1+B1)*C1
        p.text-white.mb-0 En este caso, primero se resuelve la suma dentro del paréntesis y luego se multiplica por el valor de la celda #[b C1].
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2 Errores comunes en fórmulas
        p Al trabajar con fórmulas pueden presentarse errores frecuentes que afectan los resultados:
        ul.fa-ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | No usar el signo igual (#[b =]) al inicio. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Referencias incorrectas de celdas. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Dividir entre cero. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Escribir mal el nombre de las funciones. 
        p #[b Ejemplo de error:]
        .row.mb-3
          .col-1
            p.mb-0.texto-right =
          .col-2
            .caja-tema3-1
              p.mb-0.line--bottom A1
              p.mb-0 0
        p.mb-0 Esta operación genera error porque no es posible dividir entre cero.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Referencias relativas, absolutas y mixtas
    p.mb-5 Las referencias de celda en Microsoft Excel indican la ubicación de los datos utilizados en una fórmula. Según su tipo, estas referencias pueden cambiar automáticamente o mantenerse fijas al copiar o arrastrar una fórmula hacia otras celdas. El uso correcto de las referencias es fundamental para automatizar cálculos, optimizar procesos y evitar errores en hojas de cálculo complejas.
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in").mb-5
      .row(titulo="Referencia relativa").ajuste-cajaAcordion
        p Es el tipo de referencia predeterminado en Excel. Cambia automáticamente cuando la fórmula se copia a otra celda. 
        p Estructura: A1 
        p #[b Ejemplo]: si en la celda #[b C1] se escribe =A1+B1, al copiar la fórmula hacia abajo se convierte en =A2+B2. 
        p.mb-0 Características: 
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Se adapta a la posición de la fórmula. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Es útil para cálculos repetitivos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Permite automatizar operaciones en listas.
      .row(titulo="Referencia absoluta").ajuste-cajaAcordion
        p Es una referencia fija que no cambia al copiar la fórmula. Se identifica mediante el símbolo dólar (#[b $]). 
        p Estructura: $A$1 
        p #[b Ejemplo]: si en #[b A1] existe un valor fijo, la fórmula =B2*$A$1 mantiene siempre la referencia a esa celda. 
        p.mb-0 Características: 
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Mantiene siempre la misma celda. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Se utiliza para valores constantes. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Evita errores en cálculos repetidos.
      .row(titulo="Referencia mixta").ajuste-cajaAcordion
        p Combina una parte fija y una parte variable. 
        p.mb-0 Tipos: 
        ul.fa-ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | $A1: columna fija y fila variable. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | A$1: fila fija y columna variable. 
        p.mb-3 #[b Ejemplo]: =A$1 mantiene fija la fila 1 al copiar la fórmula hacia abajo, mientras la columna cambia si se desplaza horizontalmente.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Uso de la tecla F4
    p.mb-5 Excel permite cambiar rápidamente el tipo de referencia en una fórmula mediante la tecla #[b F4], lo que agiliza la construcción de cálculos y mejora la precisión al copiar fórmulas en varias celdas. Al presionar esta tecla sobre una referencia seleccionada, se alterna entre los siguientes tipos:
    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Tipos de referencias de celdas en Microsoft Excel
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Referencia
                th.texto-left Tipo
            tbody
              tr
                td.ajuste-border-tabla.texto-left #[b A1]
                td.texto-left Relativa
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b $A$1]
                td.texto-left Absoluta
              tr
                td.ajuste-border-tabla.texto-left #[b A$1]
                td.texto-left Mixta
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b $A1]
                td.texto-left Mixta
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo práctico aplicado
          p Suponga la siguiente tabla de datos:
          .row.justify-content-center.mb-3
            .col-xl-12
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Ejemplo de cálculo de total de venta en Microsoft Excel
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Producto
                      th.ajuste-border-tabla.texto-left Cantidad
                      th.ajuste-border-tabla.texto-left Precio Unitario
                      th.texto-left Total
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left Lápiz
                      td.ajuste-border-tabla.texto-left 10
                      td.ajuste-border-tabla.texto-left 500
                      td.texto-left ?
          p Si el precio está ubicado en #[b C2] y se desea multiplicar por una tasa fija almacenada en #[b A1], puede utilizarse una referencia absoluta para mantener fija esa celda.
          h5 Fórmula:
          p.mb-3 =B2*C2*$A$1
          p Al copiar la fórmula hacia abajo:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b B2] y #[b C2] cambian automáticamente según la fila. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b A1] permanece fija.
    p.mb-5 El uso de referencias con la tecla F4 permite optimizar la creación de fórmulas en Excel, ya que facilita cambiar entre referencias relativas, absolutas y mixtas según la necesidad del cálculo. Esta función resulta clave para automatizar procesos, reducir errores y trabajar con mayor eficiencia en hojas de cálculo.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Aplicaciones reales
                p El uso de referencias con la tecla #[b F4] resulta útil en diferentes escenarios, entre ellos:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Cálculo de impuestos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Aplicación de descuentos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tablas de multiplicación. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Modelos financieros.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Errores comunes
                p Durante el uso de referencias en fórmulas pueden presentarse las siguientes situaciones:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | No usar referencia absoluta cuando se requiere. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Uso incorrecto del símbolo #[b $]. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Resultados erróneos al copiar fórmulas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img73.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Análisis técnico
                p El uso correcto de referencias permite optimizar el trabajo en hojas de cálculo, ya que contribuye a:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Automatizar cálculos masivos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Reducir errores en hojas complejas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Optimizar el uso de fórmulas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mejorar la eficiencia en el análisis de datos. 
                p.mb-0 En conjunto, dominar la tecla #[b F4] fortalece la productividad y precisión en el manejo avanzado de Excel.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img74.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Funciones básicas (SUMA, PROMEDIO, CONTAR)
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1.ajuste-tema1-1(data-aos="fade-right")
          p Las funciones básicas en Excel son herramientas predefinidas que permiten realizar cálculos fundamentales de forma rápida y automática. Constituyen la base del análisis de datos y se utilizan ampliamente en contextos académicos, administrativos y empresariales. 
          p.mb-0 Las funciones básicas de Excel permiten realizar cálculos esenciales de manera rápida y organizada. A continuación, se presentan en una tabla comparativa para facilitar su comprensión.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img75.png', alt='').m-auto
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 SUMA
                p La función #[b SUMA] permite adicionar un conjunto de valores numéricos contenidos en celdas o rangos.
                p.mb-0 #[b Estructura]
                p.mb-3 =SUMA(rango)
                p.mb-0 #[b Ejemplo]
                p.mb-3 =SUMA(A1:A10) 
                p Suma todos los valores desde la celda A1 hasta la A10.
                p.mb-0 #[b Aplicaciones]
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Total de ventas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Suma de ingresos o gastos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Acumulación de cantidades.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 23.
                  span SUMA
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img76.png', alt='Captura de hoja de cálculo de Microsoft Excel con aplicación de la función SUMA para agregar automáticamente los valores contenidos en un rango de celdas. ').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 PROMEDIO
                p La función #[b PROMEDIO] calcula el valor medio de un conjunto de datos numéricos.
                p.mb-0 #[b Estructura]
                p.mb-3 =PROMEDIO(rango)
                p.mb-0 #[b Ejemplo]
                p.mb-3 =PROMEDIO(A1:A10)
                p.mb-0 #[b Aplicaciones]
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Promedio de notas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Promedio de ventas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Indicadores de rendimiento.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 24.
                  span PROMEDIO
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img77.png', alt='Captura de hoja de cálculo de Microsoft Excel con uso de la función PROMEDIO para calcular la media aritmética de varios datos numéricos seleccionados. ').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 CONTAR
                p La función #[b CONTAR] permite contabilizar el número de celdas que contienen valores numéricos dentro de un rango.
                p.mb-0 #[b Estructura]
                p.mb-3 =CONTAR(rango)
                p.mb-0 #[b Ejemplo]
                p.mb-3 =CONTAR(A1:A10)
                p.mb-0 #[b Aplicaciones]
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Conteo de registros.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Número de datos ingresados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Control de información numérica.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 25.
                  span CONTAR
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img78.png', alt='Captura de hoja de cálculo de Microsoft Excel con aplicación de la función CONTAR para determinar la cantidad de celdas que contienen valores numéricos dentro de un rango. ').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Funciones relacionadas importantes
                p Excel incorpora herramientas complementarias que facilitan el análisis de información y el control de datos dentro de una hoja de cálculo.
                p #[b CONTARA]: cuenta celdas que contienen cualquier tipo de dato.
                p #[b MAX]: identifica el valor numérico más alto de un rango.
                p #[b MIN]: identifica el valor numérico más bajo de un rango.
                p #[b Errores comunes]
                p Durante el uso de funciones es frecuente presentar algunas dificultades que afectan los resultados obtenidos.
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Incluir celdas vacías o con texto en cálculos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Seleccionar rangos incorrectos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Usar funciones no adecuadas para el tipo de dato.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 26.
                  span Funciones relacionadas importantes
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img79.png', alt='Esquema o tabla de Microsoft Excel con funciones complementarias de uso frecuente para cálculos, conteo, análisis lógico y gestión de datos. ').m-auto
    p.mb-5 Estas funciones constituyen la base del análisis de datos en Excel y facilitan tareas académicas, administrativas y empresariales. Al trabajar con estas funciones, es importante evitar las siguientes situaciones:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-10.h-100.ajuste-color-1
          .p-4
            p.mb-0.text-center Incluir celdas vacías o con texto en cálculos no deseados. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-10.h-100.ajuste-color-1
          .p-4
            p.mb-0.text-center Seleccionar rangos incorrectos. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-10.h-100.ajuste-color-1
          .p-4
            p.mb-0.text-center  Usar funciones inadecuadas para el tipo de dato requerido. 
      .col-xl-3.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img80.png', alt='').m-auto
    p.mb-0 Como recomendación final, verifique siempre el rango seleccionado y el propósito de cada función antes de aplicar la fórmula.   
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Funciones lógicas (SI)
    p.mb-5 Las funciones lógicas en #[b Excel] permiten evaluar condiciones y tomar decisiones automáticas dentro de una hoja de cálculo. Entre ellas, la función #[b SI] es una de las más utilizadas, ya que ejecuta una acción cuando se cumple una condición y otra diferente cuando no se cumple. Esta función es fundamental para automatizar procesos de análisis, validación y clasificación de datos.
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Estructura de la función SI
    p.mb-5 La función SI utiliza la siguiente sintaxis:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-6
        .caja-tema2-1(data-aos="zoom-in")
          p.mb-0.text-center =SI(condición, valor_si_verdadero, valor_si_falso)
    p.mb-5 A continuación, se describen sus componentes principales:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3-2.h-100
          h4.mb-0.text-center Condición
          p.mb-0.text-center Expresión lógica que se evalúa para determinar si es verdadera o falsa.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3-2.h-100
          h4.mb-0.text-center Valor si verdadero
          p.mb-0.text-center Resultado que se obtiene cuando la condición se cumple.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema3-2.h-100
          h4.mb-0.text-center Valor si falso
          p.mb-0.text-center Resultado que se obtiene cuando la condición no se cumple.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema3-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              h4 Condiciones frecuentes
              p Estas expresiones pueden utilizarse dentro de la función:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | A1>10 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | B2="Aprobado" 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | C3<=100
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img81.jpg', alt='').m-auto
    p.mb-5 Los operadores más comunes en la función #[b SI] son los siguientes:
    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 5.
          span Operadores lógicos en Microsoft Excel
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Operador
                th.texto-left Significado
            tbody
              tr
                td.ajuste-border-tabla.texto-left =
                td.texto-left Igual que
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left >
                td.texto-left Mayor que
              tr
                td.ajuste-border-tabla.texto-left <
                td.texto-left Menor que
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left >=
                td.texto-left Mayor o igual que
              tr
                td.ajuste-border-tabla.texto-left <=
                td.texto-left Menor o igual que
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <>
                td.texto-left Diferente de
    p.mb-5 A continuación, se presentan ejemplos prácticos de la función SI, aplicados a la evaluación automática de notas académicas.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo 1
          p.mb-0 Para evaluar si un estudiante aprueba una asignatura:
          p.mb-3 =SI(A1>=3, "Aprueba", "No aprueba")
          p En este caso, si la nota en la celda #[b A1] es mayor o igual a 3, el resultado será #[b Aprueba]; de lo contrario, aparecerá #[b No aprueba].
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 27.
                span Aplicación de la función SI para evaluar resultados académicos 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img82.png', alt='Captura de hoja de cálculo de Microsoft Excel con aplicación de la función lógica SI para evaluar una condición y devolver resultados diferentes según el criterio establecido. ').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo 2
          p.mb-0 Si la nota se encuentra en la celda B2, la fórmula sería:
          p.mb-3 =SI(B2>=3;"Aprueba";"No aprueba")
          p #[b Nota]: en algunas configuraciones regionales de Excel se utiliza punto y coma (;) en lugar de coma (,).
          p Además, Excel puede clasificar automáticamente el desempeño del estudiante como #[b alto, medio o bajo], según la nota obtenida.
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 28.
                span Uso de la función SI anidada para clasificar niveles de desempeño 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img83.png', alt='Tabla de Excel con uso de la función BUSCARV para localizar un valor en la primera columna y retornar información asociada de otra columna. ').m-auto
    p.mb-5 A continuación, se presentan usos avanzados, aplicaciones prácticas y errores frecuentes de la función SI, con el fin de fortalecer su manejo en Excel.
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in").mb-0
      .row(titulo="Función SI anidada").ajuste-cajaAcordion
        p La función SI anidada permite evaluar varias condiciones dentro de una misma fórmula. 
        p.mb-0 #[b Ejemplo:]
        p.mb-3 =SI(A1>=4; "Alto"; SI(A1>=3; "Medio"; "Bajo")) 
        p.mb-0 #[b Resultados:]
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | A1 mayor o igual a 4 = #[b Alto].
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | A1 mayor o igual a 3 y menor que 4 = #[b Medio].
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | A1 menor que 3 = #[b Bajo].
      .row(titulo="Uso de SI con valores numéricos").ajuste-cajaAcordion
        p La función también permite clasificar cantidades. 
        p.mb-0 #[b Ejemplo:]
        p.mb-3 =SI(A1>1000, "Alta", "Baja") 
        p.mb-0  Si el valor de A1 es superior a 1000, se asignará la categoría Alta; en caso contrario, Baja.
      .row(titulo="Aplicaciones de la función SI").ajuste-cajaAcordion
        p Esta función se emplea con frecuencia en diferentes contextos: 
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Evaluación académica.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Clasificación de datos.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Cálculo de comisiones.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Control de inventarios.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Toma de decisiones.
      .row(titulo="Errores comunes").ajuste-cajaAcordion
        p Al trabajar con la función SI, conviene evitar los siguientes errores: 
        ul.fa-ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | No cerrar correctamente los paréntesis.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Escribir texto sin comillas.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Formular condiciones incorrectamente. 
        p.mb-0 #[b Ejemplo incorrecto:]
        p.mb-3 =SI(A1>=3, Aprueba, No aprueba) 
        p.mb-0 #[b Forma correcta:]
        p.mb-3 =SI(A1>=3, "Aprueba", "No aprueba") 
        p.mb-0 El uso adecuado de comillas permite que Excel interprete el texto como resultado y no como una referencia.
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Funciones de búsqueda (BUSCARV, BUSCARX)
    p.mb-5 Las funciones de búsqueda en #[b Excel] permiten localizar un valor dentro de una tabla o rango de datos y devolver un resultado relacionado. Son fundamentales para trabajar con bases de datos, ya que facilitan consultas automáticas sin necesidad de realizar búsquedas manuales. Entre las funciones más utilizadas se encuentran #[b BUSCARV] (versión clásica) y #[b BUSCARX] (versión moderna).
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Función BUSCARV
    p.mb-5 La función #[b BUSCARV] (Buscar Vertical) permite buscar un valor en la primera columna de una tabla y devolver un dato relacionado ubicado en otra columna de la misma fila.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-8
        .caja-tema2-1(data-aos="zoom-in")
          p.mb-0.text-center #[b Estructura] =BUSCARV(valor_buscado, matriz_tabla, número_columna, tipo_de_coincidencia)
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-2(data-aos="zoom-in")
          p A continuación, se describen sus componentes:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b valor_buscado]: dato que se desea localizar. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b matriz_tabla]: rango donde se realiza la búsqueda. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b número_columna]: número de columna desde la cual se obtiene el resultado. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b tipo_de_coincidencia]: define si la coincidencia será exacta (#[b FALSO]) o aproximada (#[b VERDADERO]). 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo de uso
          p Si se desea buscar el precio de un producto según su código: =BUSCARV(A2;A1:C3;3;FALSO). En este caso:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Se busca el valor de #[b A2] en la primera columna del rango #[b A1:C3]. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Se devuelve el dato correspondiente de la columna #[b 3]. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Se exige coincidencia exacta mediante #[b FALSO]. 
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 29.
                span Aplicación de la función BUSCARV para localizar datos en una tabla 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img84.png', alt='Tabla de Microsoft Excel con aplicación de la función BUSCARX para buscar datos en rangos horizontales o verticales y devolver coincidencias exactas. ').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-2(data-aos="zoom-in")
          p Aunque es una función ampliamente utilizada, presenta algunas restricciones:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Solo busca de izquierda a derecha. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Depende del número de columna. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Puede generar errores si se insertan o eliminan columnas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Requiere que el valor buscado esté en la primera columna del rango. 
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Función BUSCARX
    p.mb-5 La función #[b BUSCARX] es una versión más avanzada y flexible, diseñada para reemplazar progresivamente a #[b BUSCARV]. Permite buscar valores en cualquier dirección y simplifica el manejo de resultados.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-8
        .caja-tema2-1(data-aos="zoom-in")
          p.mb-0.text-center #[b Estructura] =BUSCARX(valor_buscado, matriz_buscar, matriz_resultado).
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-2(data-aos="zoom-in")
          p Sus componentes son los siguientes:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b valor_buscado]: dato que se desea encontrar. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b matriz_buscar]: rango donde se realiza la búsqueda. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b matriz_resultado]: rango desde el cual se devuelve el resultado relacionado. 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo de uso
          p.mb-0 =BUSCARX(A2;A1:A3;C1:C3)
          p Esta fórmula busca el valor contenido en #[b A2] dentro del rango #[b A1:A3] y devuelve el dato correspondiente del rango #[b C1:C3].
          .row.justify-content-center
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 30.
                span Comparación de resultados mediante las funciones BUSCARV y BUSCARX 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img85.png', alt='Tabla de Microsoft Excel que compara los resultados obtenidos con las funciones BUSCARV y BUSCARX al consultar datos equivalentes dentro de una misma base de información. ').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-2(data-aos="zoom-in")
          p La función #[b BUSCARX] ofrece mejoras importantes frente a #[b BUSCARV]:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Permite búsqueda en cualquier dirección. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | No depende del número de columna. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Mayor precisión en coincidencias. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Manejo de errores integrado. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Fórmulas más claras y fáciles de mantener.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema3-4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.ajuste-p
              h5 Ejemplo práctico aplicado
              p Supóngase una tabla de productos con código, nombre y precio. Si se desea consultar el precio del código 2, se puede utilizar:
              p.mb-3 =BUSCARX(A2;A1:A3;C1:C3)
              p.mb-0 #[b Resultado]: 2000
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img86.jpg', alt='').m-auto
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Aplicaciones reales
    p.mb-5 Estas funciones son útiles en múltiples contextos laborales y académicos:
    .row.justify-content-center.mb-5
      .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img87.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Consulta de precios. 
      .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img88.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Sistemas de inventario. 
      .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img89.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Bases de datos. 
      .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img90.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Cruce de información entre tablas. 
      .col-xl-2.col-md-9.mt-4(data-aos="zoom-in")
        .caja-tema1-3.h-100
          .row.justify-content-center
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img91.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Automatización de reportes.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          p Al trabajar con funciones de búsqueda, conviene evitar los siguientes errores:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Seleccionar incorrectamente los rangos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Usar coincidencia aproximada cuando se requiere coincidencia exacta. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | No fijar rangos con referencias absolutas cuando corresponde. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Incluir rangos de búsqueda y resultado con diferente tamaño en BUSCARX. 
    p.mb-5 La siguiente tabla resume sus principales diferencias:
    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 6.
          span Comparación entre BUSCARV y BUSCARX
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Característica
                th.ajuste-border-tabla.texto-left BUSCARV
                th.texto-left BUSCARX
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Dirección de búsqueda
                td.ajuste-border-tabla.texto-left Solo izquierda a derecha
                td.texto-left Cualquier dirección
              tr
                td.ajuste-border-tabla.texto-left Flexibilidad
                td.ajuste-border-tabla.texto-left Baja
                td.texto-left Alta
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Facilidad de uso
                td.ajuste-border-tabla.texto-left Media
                td.texto-left Alta
              tr
                td.ajuste-border-tabla.texto-left Manejo de errores
                td.ajuste-border-tabla.texto-left Limitado
                td.texto-left Mejorado
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Dependencia de columnas
                td.ajuste-border-tabla.texto-left Sí
                td.texto-left No
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Análisis técnico
    p.mb-5 Las funciones de búsqueda permiten optimizar el trabajo con grandes volúmenes de información. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema3-4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.ajuste-p
              p Su uso adecuado contribuye a:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Automatizar consultas de datos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Relacionar información entre tablas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Reducir tiempos de búsqueda. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Minimizar errores manuales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejorar el análisis de información. 
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img92.jpg', alt='').m-auto
    p.mb-0 Por esta razón, dominar #[b BUSCARV] y #[b BUSCARX] es una competencia clave en el manejo profesional de #[b Excel].

</template>

<script>
export default {
  name: 'Tema3',
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
