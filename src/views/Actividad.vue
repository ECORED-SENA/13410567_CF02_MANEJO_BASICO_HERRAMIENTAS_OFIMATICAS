<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de conocimientos en Microsoft Excel',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión del aprendiz sobre el uso de Microsoft Excel, incluyendo la interfaz, gestión de datos, fórmulas, funciones y análisis de información, mediante la resolución de un cuestionario.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es Microsoft Excel?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una hoja de cálculo para organizar datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un programa para editar videos digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una red social para empresas globales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un navegador para buscar sitios web.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es la función principal de la cinta de opciones?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mostrar mensajes del sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar herramientas en pestañas y grupos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Guardar archivos automáticamente siempre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar idioma del computador completo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cómo se identifican las columnas en Excel?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Con números consecutivos simples.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Con símbolos especiales variados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Con letras del alfabeto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Con colores predeterminados fijos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cómo se identifican las filas en Excel?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Con letras del alfabeto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Con palabras descriptivas largas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Con códigos automáticos únicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Con números consecutivos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué representa una celda en Excel?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un archivo guardado externo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La intersección entre fila y columna.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un gráfico de barras simple.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una carpeta del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué símbolo inicia una fórmula en Excel?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porcentaje siempre obligatorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Asterisco de multiplicación directa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Signo igual inicial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diagonal invertida especial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál función permite sumar valores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promedio de resultados numéricos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Buscar datos en tablas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contar celdas vacías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'SUMA de rangos numéricos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué función calcula la media aritmética?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CONTAR datos numéricos ingresados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'PROMEDIO de un rango.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'SI condición verdadera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'BUSCARV por columnas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué función cuenta celdas numéricas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'BUSCARX datos relacionados directos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Formato condicional automático visual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'CONTAR valores numéricos existentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'PROMEDIO de resultados finales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué hace la función SI?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ordena registros alfabéticamente siempre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inserta gráficos automáticamente rápido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Protege hojas con clave.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evalúa condiciones y devuelve resultados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es una referencia absoluta?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'A1 como referencia variable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'B2 como dato relativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$A$1 como referencia fija.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'C3 como rango abierto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué hace la tecla F4 en fórmulas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina archivos seleccionados hoy.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Guarda libro sin cambios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambia tipos de referencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cierra el programa Excel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué permite el filtro en Excel?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar color del fondo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mostrar registros según criterios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Insertar imágenes decorativas nuevas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dividir hojas en partes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué permite el ordenamiento?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ocultar columnas sin criterio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar datos por criterios definidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear macros automáticas simples.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proteger archivos compartidos externos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué formato representa valores financieros?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formato general predeterminado básico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Formato texto sin cálculos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Formato moneda para valores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Formato fecha del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué caracteriza una tabla estructurada?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No permite usar filtros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo admite una fila.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bloquea fórmulas internas siempre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Expande datos automáticamente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Para qué sirve una tabla dinámica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escribir textos extensos largos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resumir y analizar datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambiar fondo del libro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reproducir archivos multimedia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué gráfico muestra tendencias en el tiempo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gráfico circular de sectores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gráfico de barras dobles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gráfico de líneas continuas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Gráfico tridimensional libre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué hace la validación de datos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Duplica hojas automáticamente siempre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inserta comentarios ocultos rápidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Restringe entradas incorrectas permitidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Convierte tablas en gráficos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué permite proteger una hoja?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar fuente automáticamente sola.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar tamaño del archivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar fórmulas masivamente rápido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Restringir cambios no autorizados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
