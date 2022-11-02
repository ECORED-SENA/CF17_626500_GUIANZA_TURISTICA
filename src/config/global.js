export default {
  global: {
    componenteFormativo: 'Control de imprevistos en el servicio guiado',
    descripcionCurso:
      'La asistencia al viajero y turista en el sector turismo conlleva a conocer información sobre servicios y productos del turismo. Igualmente, se hace prioritario el dominio de saberes y actuaciones relacionados con la orientación, apoyo y solución ante situaciones de emergencia o peligro, en las cuales se requieren habilidades de comunicación para manejarlas. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Asistencia como función del guía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elementos de protección personal del guía y los usuarios',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Asistencia del guía al usuario en los establecimientos de proveedores',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Atención al usuario en situaciones de emergencia o peligro',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Primeros auxilios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Acciones de respuesta ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Manejo del pánico individual ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Manejo del pánico colectivo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan de comunicación en situaciones de emergencia',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
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
        'Cabo, N., M. (2004). Asistencia y guía de grupos asistencia y guía de grupos. Paraninfo. ',
    },
    {
      referencia:
        'Comisión Europea y Defensa Civil del Ecuador. (2007). La comunicación social en la gestión del riesgo. OG Diseño Gráfico.',
      link:
        'https://dipecholac.net/docs/files/258-la-comunicacion-social-en-la-gestion-de-riesgo.pdf',
    },
    {
      referencia:
        'Hernández, M., Pérez, A., M. D. M., y Barranco, M., A. (2017). Primeros auxilios: MF0272_2 módulo transversal. Editorial CEP, S.L.',
    },
    {
      referencia:
        'Ministerio de Turismo del Ecuador. (2021). Conozca la indumentaria adecuada para esta temporada de montaña. ',
      link:
        'https://www.turismo.gob.ec/conozca-la-indumentaria-adecuada-para-esta-temporada-de-montana/',
    },

    {
      referencia:
        'Organización Internacional del Trabajo - OIT. (2021). Equipos de protección personal. Administración e inspección del trabajo. OIT. ',
      link:
        'https://www.ilo.org/global/topics/labour-administration-inspection/resources-library/publications/guide-for-labour-inspectors/personal-protective-equip',
    },
    {
      referencia:
        'Peña, Q., E., Garzón, T., D., y Mayolo, V., A. (2010). Actividad física y síntomas en la aclimatación en turistas que visitan el Nevado del Ruiz - Colombia. Hacia la Promoción de la Salud, 15(2), 64-80. ',
    },
    {
      referencia:
        'Roca, E. (2015). Técnicas para manejar la ansiedad y el pánico. ',
      link: 'http://www.cop.es/colegiados/pv00520/tecnicas%20ansiedad.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje - SENA. (2011). Seguridad en alturas lo que debes saber. SENA. ',
      link: 'https://hdl.handle.net/11404/6155',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje - SENA. (2011). Seguridad en alturas lo que debes saber. SENA.Sociedad Española de Medicina de Urgencia y Emergencia y American Heart Association. (2007). Guía rápida de referencia. Sociedad Española de Medicina de Urgencia y Emergencia y American Heart Association.        ',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres - UNGRD. (2018). Manual de comunicación en emergencia. UNGRD. ',
      link:
        'https://1library.co/document/yj7gm92y-manual-de-comunicacion-en-emergencia.html',
    },
  ],
  glosario: [
    {
      termino: 'Botones',
      significado:
        'en el alojamiento, es la persona encargada de transportar el equipaje desde el vehículo del cliente del hotel, hasta la habitación de este y viceversa. ',
    },
    {
      termino: '<i>Check in</i>',
      significado:
        'proceso que se hace en hoteles y aerolíneas que consiste en registrar a los pasajeros y confirmar su espacio en el vuelo o en el alojamiento.',
    },
    {
      termino: 'DEA',
      significado:
        'Desfibrilador Externo Automático – DEA, es un aparato electrónico portátil que diagnostica una parada cardiorrespiratoria, cuando es generada por una fibrilación ventricular o a una taquicardia ventricular sin pulso, permitiendo que se restablezca el ritmo cardiaco.',
    },
    {
      termino: 'EPS',
      significado:
        'Entidades Promotoras de Salud, EPS, son las encargadas de hacer la afiliación, el registro de los afiliados al Sistema General de Seguridad Social en Salud y el recaudo de los aportes que trabajadores y empleadores deben hacer por ley para acceder al servicio de salud.        ',
    },
    {
      termino: 'Línea de vida',
      significado:
        'son sistemas anticaídas homologados y certificados destinados a la prevención de caídas de las personas cuando se realizan trabajos en altura. Son sistemas de anclaje flexible que utilizan elementos resistentes que cumplen normativa',
    },
    {
      termino: 'Minibar',
      significado:
        'en el hotel, hace referencia a un pequeño refrigerador, privado y con bebidas, que se encuentra en las habitaciones. Está abastecido con un inventario preciso.',
    },
    {
      termino: 'RCP',
      significado: 'Reanimación Cardiopulmonar.',
    },
    {
      termino: 'Riesgo aceptable',
      significado:
        'riesgo que ha sido reducido a un nivel que la organización puede tolerar respecto a sus obligaciones legales y su propia política en seguridad y salud ocupacional (NTC-OHSAS 18001).',
    },
  ],
  complementario: [
    {
      tema: 'Elementos de protección personal del guía y los usuarios',
      referencia: 'Organización Mundial de la Salud. (2006). Sol y salud. ',
      tipo: 'Documento en línea',
      link: 'https://www.who.int/phe/publications/solaruvflyer2006_es.pdf?ua=1',
    },
    {
      tema: 'Elementos de protección personal del guía y los usuarios',
      referencia: 'OIT. (s.f.) Equipos de protección personal. ',
      tipo: 'Artículo',
      link:
        'https://www.ilo.org/global/topics/labour-administration-inspection/resources-library/publications/guide-for-labour-inspectors/personal-protective-equipment/lang--es/index.htm',
    },
    {
      tema: 'Plan de comunicación en situaciones de emergencia',
      referencia: 'UNGRD. (2017). Manual de comunicación en emergencia. UNGRD.',
      tipo: 'Documento en línea',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/handle/20.500.11762/26454?show=full',
    },
    {
      tema: 'Plan de comunicación en situaciones de emergencia',
      referencia:
        'CISP Ecuador. (2007). La comunicación social en la gestión del riesgo. ',
      tipo: 'PDF',
      link:
        'https://dipecholac.net/docs/files/258-la-comunicacion-social-en-la-gestion-de-riesgo.pdf',
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
      {
        nombre: 'Ana Milena Sánchez Parada',
        cargo: 'Instructora Técnico',
        centro:
          'Regional Distrito Capital. Centro Nacional de Hotelería, Turismo y Alimentos.',
      },
      {
        nombre: 'Wilson Pacheco Gutiérrez',
        cargo: 'Instructora Técnico',
        centro:
          'Regional Distrito Capital. Centro Nacional de Hotelería, Turismo y Alimentos.',
      },
      {
        nombre: 'Samira Pineda Cuevas',
        cargo: 'Instructora Bilingüismo',
        centro:
          'Regional Distrito Capital. Centro Nacional de Hotelería, Turismo y Alimentos.',
      },
      {
        nombre: 'Claudia Patricia Porras Otálora',
        cargo: 'Instructora Técnico',
        centro:
          'Regional Distrito Capital. Centro Nacional de Hotelería, Turismo y Alimentos.',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Distrito Capital. Centro de Gestión Industrial.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Metodóloga para la formación virtual',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
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
        nombre: ['Marcela Alarcon Granados'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Validación de diseño ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Ovalle',
        cargo: 'Validación de contenido ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
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
