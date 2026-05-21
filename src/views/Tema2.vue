<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión y organización de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1.ajuste-tema1(data-aos="fade-right")
          p.mb-0 El ingreso de datos consiste en introducir información en las celdas de Excel de forma estructurada y coherente. Para lograr resultados confiables, es necesario aplicar criterios de organización desde el momento en que se registra la información.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img46.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 18.
          span Importación de datos externos mediante la herramienta Obtener datos 
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img47.png', alt='Captura de Excel con la herramienta Obtener datos para importar información desde archivos, texto, web o bases de datos externas. ').m-auto
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2.text-white Ingreso de datos
        p.text-white Proceso mediante el cual se incorpora información en las celdas de la hoja de cálculo de forma ordenada y coherente.
        h5.text-white Formas de ingreso
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            |  Digitación manual. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Copiar y pegar desde otras fuentes. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Importación de archivos externos como CSV, TXT o bases de datos.
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img48.svg', alt='' style="max-width: 100px")
        h2 Estructuración correcta de los datos
        p Para garantizar un manejo eficiente, los datos deben organizarse bajo una estructura tipo tabla que facilite su lectura, análisis y procesamiento.
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Cada columna representa una variable (ejemplo: Nombre, Precio, Cantidad). 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Cada fila representa un registro (ejemplo: un producto o una persona). 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | La primera fila debe contener encabezados claros.
    p.mb-5 Para complementar la gestión y organización de datos en Excel, es importante aplicar buenas prácticas y utilizar herramientas de control que permitan mantener la información ordenada, consistente y confiable. Entre estas herramientas se destaca la validación de datos, la cual reduce errores y mejora la calidad de los registros.
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
      .row(titulo="Buenas prácticas").ajuste-cajaAcordion
        p.mb-3 Para mantener una base de datos organizada y funcional, se recomienda aplicar las siguientes prácticas: 
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | No dejar filas o columnas vacías dentro de la tabla.  
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | No combinar celdas en bases de datos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Mantener un solo tipo de dato por columna. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Usar nombres de encabezados claros y consistentes.
      .row(titulo="Validación de datos").ajuste-cajaAcordion
        p.mb-3 La validación de datos permite restringir el tipo de información que puede ingresar el usuario en una celda, evitando errores y mejorando la calidad de los registros.
        p.mb-0 #[b Ruta de acceso]
        p Para utilizar esta herramienta en Excel se sigue la ruta: 
        p #[b Datos → Validación de datos]
      .row(titulo="Tipos de validación").ajuste-cajaAcordion
        p.mb-3 Excel ofrece diferentes criterios de validación según la necesidad del usuario: 
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Número]: permite definir rangos, por ejemplo, entre 1 y 100. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Lista]: permite seleccionar valores predefinidos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Fecha]: restringe fechas válidas. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Texto]: controla la longitud o tipo de contenido permitido.
      .row(titulo="Mensajes de validación").ajuste-cajaAcordion
        p.mb-3 Excel permite orientar al usuario y advertir errores mediante las siguientes opciones: 
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Mostrar mensajes de entrada antes de digitar datos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Generar alertas cuando se ingresan valores incorrectos.
      .row(titulo="Análisis técnico").ajuste-cajaAcordion
        p.mb-3 La validación de datos aporta beneficios importantes en la gestión de la información: 
        ul.fa-ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Reducir errores humanos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Garantizar la calidad de la información. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Estandarizar los datos. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Facilitar procesos automatizados.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Ordenamiento y filtrado de información
    p.mb-5 El ordenamiento y el filtrado de datos son herramientas fundamentales para organizar, analizar y gestionar información en hojas de cálculo. Su aplicación facilita la consulta de registros, mejora la interpretación de resultados y fortalece la toma de decisiones. 
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Ordenamiento
    p.mb-5 El ordenamiento permite organizar la información según uno o varios criterios definidos por el usuario, lo que favorece una estructura clara y funcional de los datos. A continuación, se presentan los principales tipos de ordenamiento:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          h4.mb-0.text-center Ascendente
          p.mb-0.text-center Organiza de #[b A a Z] o de #[b menor a mayor].
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          h4.mb-0.text-center Descendente
          p.mb-0.text-center Organiza de #[b Z a A] o de #[b mayor a menor].
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          h4.mb-0.text-center Personalizado
          p.mb-0.text-center Permite ordenar por múltiples columnas o criterios específicos.
      .col-xl-3.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img49.png" ).m-auto
    p.mb-5 Cuando se requiere un análisis más detallado, puede emplearse el ordenamiento múltiple, el cual organiza la información utilizando más de un criterio de forma secuencial.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo de ordenamiento múltiple
          p Cuando se requiere organizar la información con mayor precisión, es posible aplicar varios criterios de forma secuencial. Por ejemplo:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Primero por Ciudad. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Luego por Ventas.
          .row.justify-content-center
            .col-xl-7
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 19.
                span Aplicación de filtros y ordenamiento de datos en hoja de cálculo
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img50.png', alt='Tabla de datos con menús desplegables de filtro y opciones de orden ascendente o descendente aplicadas a registros. ').m-auto
    p.mb-5 En este video se explicará cómo organizar información en Microsoft Excel mediante dos herramientas fundamentales: el ordenamiento simple y el ordenamiento multinivel.
    .caja-tema1-12.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img43.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ordenamiento simple y multinivel
          p.mb-0 En este video se explicará cómo organizar información en Microsoft Excel mediante dos herramientas fundamentales: el ordenamiento simple y el ordenamiento multinivel.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=6fUnZBP-f8s&t=25s ')" target="_blank" type="website")
            span Ver video
            i.fas.fa-link
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Filtrado de datos
    p.mb-5 El filtrado permite presentar únicamente los registros que cumplen determinadas condiciones, lo cual simplifica el análisis y agiliza la búsqueda de información relevante.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-6
        .caja-tema2-1(data-aos="zoom-in")
          p.mb-0.text-center #[b Ruta de acceso: Datos → Filtro]
    p.mb-5.text-center Los tipos de filtros más utilizados se presentan a continuación:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img51.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img52.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Filtro por texto
                p.mb-0.text-center Ubica registros según palabras, letras o contenido textual.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img53.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Filtro por número
                p.mb-0.text-center Selecciona valores numéricos según rangos o condiciones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img54.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Filtro por fecha
                p.mb-0.text-center Permite segmentar información por periodos o fechas específicas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img55.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Filtros personalizados
                p.mb-0.text-center Combina condiciones definidas por el usuario.
        .row.justify-content-center.mb-5
          .col-xl-10
            .caja-tema1-8(data-aos="zoom-in").mb-3
              .row.align-items-center
                .col-xl.order-2.order-lg-1
                  p.ajustes-p-2 #[b Ejemplo práctico]
                  p.mb-0.ajustes-p-2 Para mostrar únicamente ventas mayores a #[b 1000], siga esta ruta:
                  p.mb-0 #[b Filtro → Número → Mayor que → 1000]
                .col-xl-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/img56.jpg', alt='').m-auto
    .caja-tema1-4.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Filtros avanzados
    p.mb-5 Los filtros avanzados permiten aplicar varias condiciones al mismo tiempo, lo que incrementa la precisión del análisis.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-4.mb-4.mb-lg-0
        .caja-tema2-2(data-aos="zoom-in")
          h5 Ejemplo:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Ventas mayores a #[b 1000]. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Ciudad igual a #[b Neiva].
      .col-xl-8
        .caja-tema2-3(data-aos="zoom-in")
          p El uso combinado del ordenamiento y el filtrado aporta ventajas operativas y analíticas, entre ellas:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Analizar grandes volúmenes de datos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Identificar patrones y tendencias. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Optimizar la toma de decisiones. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Mejorar la presentación de la información. 
    p.mb-0  En conjunto, estas herramientas fortalecen la gestión eficiente de datos y facilitan procesos de análisis en entornos administrativos, académicos y empresariales.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Formato de celdas (numérico, texto, fecha)
    p.mb-5 El formato de celdas permite modificar la manera en que se presentan los datos en una hoja de cálculo, sin alterar su valor real. Esta herramienta facilita la organización de la información, mejora la lectura y contribuye a una interpretación adecuada de los registros. A continuación, se relacionan los principales tipos de formato disponibles:
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema2-6(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b General]: formato predeterminado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Número]: permite decimales y separadores. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Moneda]: representa valores financieros. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fecha]: organiza información temporal. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Porcentaje]: expresa proporciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Texto]: evita que Excel interprete el dato como número.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img57.jpg', alt='').m-auto
    p.mb-5 A continuación, se presentan aspectos clave relacionados con la configuración y aplicación del formato de celdas en una hoja de cálculo:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Configuración avanzada
                p.mb-0 Se accede mediante la ruta #[b clic derecho sobre la celda → Formato de celdas]. Desde allí es posible definir cantidad de decimales, símbolos monetarios, formatos personalizados, estilos de fecha y alineación del contenido.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img58.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ejemplo práctico
                p Si se ingresa el valor 1000, al aplicar distintos formatos se obtiene:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Número]: 1000.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Moneda]: $ 1.000.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Porcentaje]: 100000 %
                p.mb-0 Esto indica que cambia la presentación, no el valor real.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img59.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Errores comunes
                p.mb-0 Números almacenados como texto, fechas mal interpretadas, formatos inconsistentes en una misma columna y uso innecesario de decimales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img60.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Análisis técnico
                p.mb-0 El formato de celdas permite mejorar la presentación de los datos, facilitar la lectura, reducir errores de interpretación, estandarizar la información y optimizar reportes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img61.png', alt='' style="max-width: 500px").m-auto    
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Uso de tablas estructuradas
    p.mb-5 Una tabla estructurada es un rango de datos convertido en una estructura dinámica que facilita la organización, manipulación y análisis de la información. Su uso permite trabajar de forma más eficiente con conjuntos de datos y optimiza múltiples procesos dentro de la hoja de cálculo. Para crear una tabla estructurada, siga estos pasos:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-6
        .caja-tema2-4(data-aos="zoom-in")
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span A
              | 
              p.mb-0 Seleccione el rango de datos. 
            li 
              .lista-ol--cuadro__vineta
                span B
              | 
              p.mb-0 Diríjase a Inicio → #[b Dar formato como tabla]. 
            li 
              .lista-ol--cuadro__vineta
                span C
              | 
              p.mb-0 Confirme que la tabla contiene encabezados. 
    .row.justify-content-center.mb-5
      .col-xl-9
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 20.
          span Creación de tabla estructurada a partir de un rango de datos 
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img62.png', alt='Rango de datos convertido en tabla estructurada con encabezados definidos, filtros automáticos y formato visual uniforme. ').m-auto
    p.mb-5 A continuación, se presentan los aspectos más relevantes relacionados con el uso de tablas estructuradas:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2-5.h-100
          h4.mb-0.text-center Características
          p.mb-0.text-center Incluyen encabezados con filtros automáticos, formato visual uniforme, expansión automática al agregar nuevos datos y uso de referencias estructuradas.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2-5.h-100
          h4.mb-0.text-center Funciones avanzadas
          p.mb-0.text-center Permiten utilizar nombres de columnas en fórmulas, integrar gráficos y emplear la información en tablas dinámicas.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2-5.h-100
          h4.mb-0.text-center Ventajas
          p.mb-0.text-center Favorecen una organización clara de la información, automatización de cálculos, mejor control de datos y escalabilidad del registro.
      .col-xl-3.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img63.png" ).m-auto
    .row.justify-content-center.align-items-center.mb-0
      .col-xl-10
        .caja-tema1-11(data-aos="zoom-in")
          h5 Ejemplo práctico
          p En una tabla de inventario, al convertir el rango en tabla, se activan filtros automáticos, se conserva el formato aplicado y las fórmulas se replican automáticamente en nuevas filas.
          .row.justify-content-center.mb-3
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 21.
                span Aplicación de estilos rápidos para el formato de tablas 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img64.png', alt='Tabla de Excel con estilos prediseñados de colores, filas resaltadas y encabezados personalizados. ').m-auto
          p.mb-0 Las tablas estructuradas permiten manejar grandes volúmenes de datos, automatizar procesos, integrar herramientas de análisis y fortalecer la toma de decisiones.

</template>

<script>
export default {
  name: 'Tema2',
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
