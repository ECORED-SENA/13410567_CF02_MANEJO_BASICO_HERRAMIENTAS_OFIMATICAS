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
        titulo: 'Fórmulas y funciones esenciales',
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
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
