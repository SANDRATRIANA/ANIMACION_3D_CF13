export default {
  global: {
    componenteFormativo: 'Entrega final e industria.',
    descripcionCurso:
      'En este material de formación se revisarán los formatos más comunes y las características a la hora de exportar un proyecto audiovisual, entendiendo qué es codec y contenedor de exportación para diferentes plataformas, como son redes sociales, blu ray, cine entre otras.',
    imagenBannerPrincipal: require('@/assets/curso/banner-primcipal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Formatos y exportación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Relación de aspecto (Aspect ratio)',
            hash: 'Relación de aspecto (Aspect ratio)',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de formato',
            hash: 'Tipos de formato',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Plataformas de distribución, festivales y medios de financiación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Proyectos para convocatorias y concursos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Convocatorias anuales para proyectos artísticos, culturales y festivales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Convocatorias para proyectos audiovisuales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plataformas de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fuentes de financiación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Marketing digital',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Demo Reel',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Cortés, J. (2021). 8 Consejos para Trabajar en la Industria de la Animación. Notodoanimacion.',
      link:
        'https://www.notodoanimacion.es/consejos-para-trabajar-industria-animacion/ ',
    },
    {
      referencia:
        'Alonso, N. (2021). Los 10 tipos de formato de vídeo más utilizados. Grupo Atico34',
      link: 'https://protecciondatos-lopd.com/empresas/tipos-formato-video/',
    },
    {
      referencia:
        'YouTube (2021). Especificaciones de los formatos de video y audio - Ayuda de YouTube.',
      link: 'https://support.google.com/youtube/answer/4603579?hl=es-419',
    },
  ],
  glosario: [
    {
      termino: 'Codec',
      significado:
        'Algoritmo diseñado para codificar señales de datos digitales comprimiendo y descomprimiendo la información, durante la reproducción; por ejemplo de un video.',
    },
    {
      termino: 'Crowfunding',
      significado:
        'Cooperación colectiva para recaudar dinero por medio de las redes, con la finalidad de financiar un proyecto a personas como a colectivos.',
    },
    {
      termino: 'Frecuencia',
      significado:
        'Se refiere al número de vibraciones que produce un cuerpo por segundo y que afecta el tono.',
    },
    {
      termino: 'Pixeles',
      significado:
        'La unidad más pequeña de una imagen formada por un cuadrado, al unir esta pieza única que contiene información de colores y valores, con otras unidades se forman las imágenes.',
    },
    {
      termino: 'Marketing',
      significado:
        'Es el estudio que se le hace al mercado, con la finalidad de buscar necesidades, problemáticas y soluciones del mercado. Lo que busca es atraer los clientes y mantenerlos a la marca o producto, para que estos sigan consumiendo.',
    },
    {
      termino: 'Startup',
      significado:
        'Es una empresa de nueva generación que busca a través de las tecnologías de la información y la comunicación (TIC) innovar en el mercado con estas tecnologías.',
    },
  ],
  complementario: [
    {
      texto: 'Vigara, J. (2018). Animation Reel.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=c4f3cM4T0Pk&t=1s',
    },
    {
      texto: 'Alvaro Films. (2021). After Effects Demo Reel 2021.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=51XWb2npjfU ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
