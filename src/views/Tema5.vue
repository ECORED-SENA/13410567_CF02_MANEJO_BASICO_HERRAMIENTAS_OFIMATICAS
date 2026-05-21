<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Aplicación práctica análisis de información
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1.ajuste-tema1(data-aos="fade-right")
          p.mb-0 Este apartado integra los conocimientos adquiridos en el manejo de #[b Excel], aplicándolos en un caso práctico donde se organizan datos, se realizan cálculos, se generan gráficos y se presentan resultados de forma clara y profesional.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img135.png', alt='').m-auto
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Organización de datos en una hoja de cálculo
    p.mb-5 La organización de datos consiste en estructurar la información de manera lógica dentro de la hoja de cálculo, facilitando su análisis posterior. Es el proceso de ordenar la información para facilitar cálculos, análisis y consultas posteriores.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema5(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p.mb-0 #[b Principios de organización]: cada columna representa una variable, como nombre, precio, cantidad o fecha. Cada fila representa un registro, como producto, venta o usuario. Se recomienda el uso de encabezados claros con títulos precisos para cada campo. También es importante evitar celdas vacías o combinadas de forma innecesaria, ya que esto mejora el manejo de los datos.
            .col-xl-auto.order-1.order-lg-2.d-none.d-xl-block
              figure
                img(src='@/assets/curso/temas/img137.png', alt='').m-auto
    p.mb-0 Las buenas prácticas en la organización de datos fortalecen la gestión de la información, entre ellas: aplicar formato de tabla, ya que facilita filtros y organización; usar nombres claros, lo que mejora la comprensión; mantener consistencia en los datos con el mismo formato en fechas, monedas o texto; y evitar duplicidad de información, lo que reduce errores. 
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Aplicación de fórmulas para el cálculo de resultados
    p.mb-5 Consiste en utilizar fórmulas y funciones para obtener resultados automáticos a partir de los datos registrados. Es el uso de fórmulas y funciones para transformar los datos en resultados automáticos y precisos.
    .row.justify-content-center.mb-0
      .col-xl-10
        .caja-tema5.ajuste-color-4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo práctico]: calcular el total de una venta multiplicando cantidad por precio mediante la fórmula: =C2*D2.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aplicación de funciones]: SUMA calcula el total de ventas. PROMEDIO obtiene el promedio de ingresos. SI clasifica resultados según una condición.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo de función lógica]: =SI(E2>10000,"Alta venta","Baja venta").
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ventajas]: automatización, ya que reduce trabajo manual. Precisión, porque mejora la exactitud de los cálculos. Ahorro de tiempo, al agilizar procesos repetitivos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Importancia técnica]: las fórmulas permiten transformar datos en información útil para el análisis.
            .col-xl-auto.order-1.order-lg-2.d-none.d-xl-block
              figure
                img(src='@/assets/curso/temas/img138.png', alt='').m-auto    
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Generación de gráficos para la interpretación de datos
    p.mb-5 Consiste en representar visualmente los datos para facilitar su comprensión y análisis. Proceso de convertir datos numéricos en representaciones gráficas claras y comprensibles.
    .row.justify-content-center.align-items-center.mb-0
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          p #[b Ejemplo práctico]: elaborar un gráfico de ventas por producto.
          h5 Procedimiento: 
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Seleccionar los datos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Insertar el gráfico. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Elegir el tipo de gráfico: barras, líneas o circular.
          p #[b Interpretación]: identificar el producto más vendido permite reconocer el mejor desempeño. Comparar resultados facilita establecer diferencias entre categorías. Detectar tendencias ayuda a reconocer crecimientos o disminuciones.
          p.mb-0 #[b Importancia técnica]: los gráficos facilitan la comprensión inmediata de grandes volúmenes de información.
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Presentación de resultados
    p.mb-5 Es el proceso de organizar y comunicar los resultados obtenidos de manera clara, estructurada y profesional. Consiste en la organización y comunicación de resultados para facilitar su comprensión y uso en la toma de decisiones.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Elementos de presentación
          p La presentación de resultados integra distintos elementos que facilitan la comprensión de la información, entre ellos:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Tablas organizadas]: información estructurada. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Resultados calculados]: datos obtenidos mediante fórmulas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Gráficos]: apoyo visual para interpretar información. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Conclusiones]: síntesis de hallazgos relevantes.
          h5 Ejemplo práctico
          p Informe de ventas que incluya total de ventas, producto más vendido y tendencias observadas.
          h5 Buenas prácticas
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Uso de títulos claros]: mejora la orientación del lector. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Formato adecuado]: orden visual consistente. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Información resumida]: destaca lo esencial. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Diseño limpio]: facilita lectura e interpretación.
    p.mb-5 La presentación de resultados permite comunicar la información de manera efectiva y facilita la toma de decisiones.
    .caja-tema1-12.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img136.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Caso práctico – análisis de información en Excel
          p.mb-0 Se invita a leer el documento #[b Caso práctico – análisis de información en Excel], donde se aborda el desarrollo de un ejercicio aplicado en Microsoft Excel orientado al análisis de datos.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/anexo1.docx')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema5',
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
