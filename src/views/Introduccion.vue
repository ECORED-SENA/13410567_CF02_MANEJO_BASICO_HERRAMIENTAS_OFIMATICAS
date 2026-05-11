<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 En la actualidad, el manejo de herramientas tecnológicas constituye una competencia esencial en los ámbitos académicos, laborales y organizacionales. En este contexto, Microsoft Excel se destaca como una hoja de cálculo ampliamente utilizada por su versatilidad para organizar datos, realizar cálculos automáticos, generar gráficos y optimizar procesos. Su uso adecuado contribuye a mejorar la productividad, disminuir errores y facilitar la toma de decisiones basada en información estructurada. 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente formativo se orienta al desarrollo de competencias en el manejo de Excel, iniciando con el reconocimiento de su interfaz y entorno de trabajo. Posteriormente, profundiza en la gestión y organización de datos mediante validaciones, filtros, tablas estructuradas y formatos. Además, aborda el uso de fórmulas y funciones, herramientas clave para transformar datos en información útil, así como técnicas de análisis como tablas dinámicas, segmentación y filtros avanzados para identificar patrones y tendencias. 
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .caja-intro(data-aos="fade-right")
          p.mb-0 También se incluye la representación gráfica de datos mediante gráficos y paneles visuales, junto con herramientas de automatización y control como formato condicional, protección de hojas y validación de datos. Finalmente, el aprendizaje se consolida a través de ejercicios prácticos donde se integran estas herramientas para resolver situaciones reales. De esta manera, el dominio de Excel fortalece las competencias digitales del aprendiz y mejora su preparación frente a las exigencias del entorno actual.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img2.svg', alt='').m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
