export default {
  global: {
    Name: 'Uso de herramientas ofimáticas - Microsoft Excel',
    Description:
      'Este componente formativo permite reconocer, comprender y aplicar las herramientas de Microsoft Excel, mediante el uso de funciones, fórmulas y herramientas de análisis de datos. Se desarrollan habilidades para la organización, procesamiento e interpretación de información, facilitando la toma de decisiones en contextos académicos y laborales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Hoja de cálculo – Microsoft Excel',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Interfaz y entorno de trabajo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Cinta de opciones y organización de herramientas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión y organización de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ordenamiento y filtrado de información',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Formato de celdas (numérico, texto, fecha)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Uso de tablas estructuradas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Formulas y funciones esenciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estructura de una fórmula',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Referencias relativas, absolutas y mixtas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Funciones básicas (SUMA, PROMEDIO, CONTAR)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Funciones lógicas (SI)',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Funciones de búsqueda (BUSCARV, BUSCARX)',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis y representación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Análisis de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Uso de filtros avanzados',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Introducción a tablas dinámicas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Representación gráfica de datos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Herramientas de automatización y control',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Aplicación práctica análisis de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Organización de datos en una hoja de cálculo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Aplicación de fórmulas para el cálculo de resultados',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Generación de gráficos para la interpretación de datos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Presentación de resultados',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Celda',
      significado:
        'Espacio individual de la hoja de cálculo donde se ingresan datos.',
    },
    {
      termino: 'Columna',
      significado: 'Conjunto vertical de celdas identificado con letras.',
    },
    {
      termino: 'Fila',
      significado: 'Conjunto horizontal de celdas identificado con números.',
    },
    {
      termino: 'Filtro',
      significado:
        'Herramienta que permite seleccionar registros según criterios.',
    },
    {
      termino: 'Formato condicional',
      significado:
        'Opción que aplica estilos automáticos según reglas establecidas.',
    },
    {
      termino: 'Fórmula',
      significado: 'Expresión que realiza cálculos automáticos en Excel.',
    },
    {
      termino: 'Función',
      significado: 'Fórmula predefinida que facilita operaciones específicas.',
    },
    {
      termino: 'Gráfico',
      significado: 'Representación visual de datos numéricos.',
    },
    {
      termino: 'Rango',
      significado: 'Grupo de celdas seleccionadas para trabajar en conjunto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Santos, D. (18 de 06 de 2025). HubSpot. Para qué sirve Excel, principales características y cómo funciona.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
