<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Asistencia como función de guía
    .row.bg6
      .col-lg-6(data-aos="flip-up")
        img(src='@/assets/curso/tema1/img1.png', alt='Texto que describa la imagen')
      .col-lg-6
        p.mt-2 Existen dos conceptos fundamentales para entender la asistencia como función de guía, estos conceptos son asistencia y asistir. Según la Real Academia Española, la asistencia, se define como “la acción de prestar socorro, favor o ayuda”, y asistir como “servir o atender a alguien, especialmente de un modo eventual o desempeñando tareas específicas”, siendo esta, una de las funciones del guía de turismo en el ejercicio del guionaje turístico. 
        .cajon.color-primario.p-4.mb-4
          p Por normativa se han fijado en cuatro las funciones del guía por el ente rector del sector turismo, según el Ministerio de Comercio, Industria y Turismo: 
          .col-sm.mb-5.mb-sm-0
            ul.lista-ul--color
              li 
                i.fab.fa-telegram
                | Orientar.
              li 
                i.fab.fa-telegram
                | Conducir.
              li 
                i.fab.fa-telegram
                | Instruir.
              li 
                i.fab.fa-telegram
                | Asistir*.       
    p.mt-4 *Esta última se relaciona con el plan de viaje o servicios convenidos, atención a las eventualidades e imprevistos que se deriven de estos y en general a atender en pleno al cliente, como se puede observar en la siguiente figura.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-5(data-aos="flip-down")
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Función de asistencia      
        img(src='@/assets/curso/tema1/img2.svg', alt='Texto que describa la imagen')
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Elementos de protección personal del guía y los usuarios
    p Para que el guía pueda prestar los servicios de asistencia es vital la preparación individual, además de los conocimientos e inspección del sitio. También debe preparar elementos de protección personal según el tipo de servicio que vaya a prestar, que permita garantizar seguridad a sí mismo y, por lo tanto, brindar la asistencia al usuario. 
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Todos los empleados, por disposición de la Organización Internacional del Trabajo (2021), deben usar un Equipo de Protección Personal o EPP que tiene por objetivo la protección de las diferentes partes del cuerpo evitando factores de riesgo que lo puedan lesionar, evitar enfermedades o efectos adversos para la salud. Es importante recordar que estos no evitan accidentes y ayudan a que la lesión sea menos grave. 
    p.mt-4 El suministro y uso está a cargo de los empleadores, pero en caso que el guía preste sus servicios de manera independiente, dentro de los costos de su servicio debe incluir la partida necesaria para garantizar que él como guía, cuente con dichos elementos según el contexto y actividades que incluyan el servicio. Asimismo, debe informar al contratante y a los usuarios, en las recomendaciones previas al servicio guiado, los EPP que requieran los usuarios durante el servicio y asegurarse que se proporcionen. 
    .row.bg2.p-2.mt-5
      .col-lg-4.mt-5(data-aos="flip-right")
        img(src='@/assets/curso/tema1/img4.svg', alt='Texto que describa la imagen')
      .col-lg-7.mb-5.mt-5
        p Por ejemplo, el casco, el ingreso de la mina o el chaleco al abordar una lancha, el guía no está en la obligación de proporcionarlos, pero en su función de asistencia debe ejercer una vigilancia que se proporcionen, verificar que se da la respectiva explicación de uso y que efectivamente el turista los use.
        p Para que el guía pueda determinar quién debe usar los EPP durante el servicio, debe preguntarse: 
        p.text-center.mb-0 <strong>¿Qué personas están expuestas?</strong>
        p.text-center.mb-0 <strong>¿Cuánto tiempo dura la exposición?</strong>
        p.text-center.mb-0 <strong>¿En qué medida están expuestas?</strong>
    p.mt-4 De esta manera, puede asistir al usuario en el uso de los elementos, además debe tener en cuenta al momento de exigir los EPP lo siguiente:
    .row.mt-3
      .col-lg-4
        img(src='@/assets/curso/tema1/img5.png', alt='Texto que describa la imagen')
      .col-lg-8.mt-2
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-5
            .row.justify-content-center.mb-3
            p <strong>1.</strong> Los productos para proteger contra los riesgos deben corresponder a las normas técnicas establecidas. Los proveedores pueden asesorar al respecto.
            .row.mb-5
          .tarjeta.color-acento-botones.p-5
            .row.justify-content-center.mb-3
            p <strong>2.</strong>  Los equipos se deben adaptar bien al usuario, respecto a la talla, forma y peso del elemento de protección.
            .row.mb-5
            .row.mb-5
          .tarjeta.color-acento-botones.p-5
            .row.justify-content-center.mb-3
            p <strong>3.</strong>  No permitir que un usuario realice una actividad sin dichos elementos, aunque se supone que solo va a participar unos minutos y no en la actividad completa. 
            .row.mb-5
          .tarjeta.color-acento-botones.p-5
            .row.justify-content-center.mb-3
            p <strong>4.</strong>   En caso de dudas sobre el uso del EPP buscar la opinión de un asesor especializado en la actividad (Organización Internacional del Trabajo, 2021).
            .row.mb-5  
            .row.mb-4     
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
            p <strong>5.</strong>  Asegurarse que puede llevarse más de un elemento al mismo tiempo (por ejemplo, las gafas de seguridad pueden alterar el sellamiento del oxígeno, en una actividad de montaña). En ese caso es necesario entrenar al usuario en el uso del mismo, explicando por qué son necesarios, cuándo utilizarlos y qué limitaciones tienen.
    p.mt-2 Los tipos de EPP en la guianza están identificados de acuerdo con la actividad y varían en cada caso, sin embargo, se mencionan a continuación algunas generalidades según la parte del cuerpo a proteger:
    TabsB.color-acento-contenido.mb-5(data-aos="flip-right")
      .py-4.py-md-5(titulo="Cabeza y cuello" :icono="require('@/assets/curso/tema1/i1.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0.col-11
            h4 Cabeza y cuello
            p Los peligros relacionados son impacto de objetos que caen o salen proyectados, riesgo de sufrir un golpe en la cabeza, de que el pelo se enrede en un equipo o elemento, de recibir gotas o salpicaduras de productos químicos, el clima o la temperatura.
            p La primera medida es un casco de seguridad con un diseño adecuado a los golpes y fuertes caídas que se puedan dar durante la actividad, por ejemplo, se recomienda en canotaje, la escalada, rapel y ciclismo.  
            p También una gorra o gorro dependiendo del clima es ideal para mantener la temperatura. El guía para su cuello debe usar un pañuelo o cinta tubular de tejido elástico, que lo proteja del sol y mantenga la temperatura cercana a sus cuerdas vocales equilibrada para garantizar su óptimo desempeño (SENA, 2011).
          .col-lg-6.col-9
            figure
              img(src='@/assets/curso/tema1/img6.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Ojos" :icono="require('@/assets/curso/tema1/i2.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0.col-11
            h4 Ojos
            p Los peligros constantes son salpicaduras, polvo, proyecciones, gases y vapores, y radiaciones procedentes de productos o el ambiente donde se lleva a cabo la actividad turística.
            p Para este caso, las gafas son el medio de protección ideal y se eligen de acuerdo con el tipo de labor a realizar. Si el guía en su día a día trabaja en espacios abiertos debe usar gafas para proteger su vista de protección ultravioleta.  Por el contrario, el servicio guiado incluye la visita a espacios industriales o artesanales en los que exista exposiciones a químicos o sustancias nocivas deberá averiguar cuál es la protección adecuada.
            p La misma exposición a peligros puede afectar el rostro, en ese caso el EPP será una careta y para cubrirse de los rayos ultravioleta y el protector solar.
          .col-lg-6.col-9
            figure
              img(src='@/assets/curso/tema1/img7.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Oídos" :icono="require('@/assets/curso/tema1/i3.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0.col-11
            h4 Oídos
            p El ruido es el peligro más evidente. Para determinar la afectación se debe revisar la combinación del nivel del sonido y de la duración de la exposición; los sonidos muy altos son un peligro, aunque su duración sea corta.
            p Los tapones para los oídos, orejeras y auriculares semi insertos, pueden disminuir hasta el 33% de los decibeles. 
            p En recorridos en aeronaves pequeñas las compañías ofrecen tapones como EPP, lo mismo sucede en los atractivos como minas o visitas a lugares industrializados para disminuir la exposición. (SENA, 2011).
          .col-lg-6.col-9
            figure
              img(src='@/assets/curso/tema1/img8.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Pulmones" :icono="require('@/assets/curso/tema1/i4.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0.col-11
            h4 Pulmones
            p En este caso se busca minimizar la exposición directa a polvos, gases y vapores o por el contrario, la falta de oxígeno. 
            p Para ese tipo de caso lo aconsejable es el uso de la mascarilla, cuando en el ambiente hay partículas como polvo, cemento, algodón y otras derivadas. 
            p En caso de que el usuario en su cotidianidad requiera oxígeno o algún tipo de respirador, es necesario verificar que las condiciones del lugar a visitar no empeoren su condición.
          .col-lg-6.col-9
            figure
              img(src='@/assets/curso/tema1/img9.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Manos y brazos" :icono="require('@/assets/curso/tema1/i5.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0.col-11
            h4 Manos y brazos

            p Esta parte del cuerpo está expuesta a abrasiones, temperaturas extremas, cortes y pinchazos, impactos, productos químicos, descargas eléctricas, radiaciones, agentes biológicos e inmersión prolongada en agua.

            p Para determinadas actividades se requiere el uso de guantes por parte de los usuarios, por ejemplo, cuando requieren el uso prolongado de cuerdas. Para actividades de naturaleza, se recomienda el uso de buzos de manga larga o fundas que cubran los brazos.
          .col-lg-6.col-9
            figure
              img(src='@/assets/curso/tema1/img10.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Pies y piernas" :icono="require('@/assets/curso/tema1/i6.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0.col-11
            h4 Pies y piernas
            p Los peligros relacionados con estas zonas se relacionan con la humedad, el calor y el frío, las descargas electroestáticas, los resbalones, los cortes y los pinchazos, la caída de objetos, las cargas pesadas, la proyección de residuos de metales, la salpicadura de productos químicos y los vehículos.
            p Para el guía y los usuarios es vital un calzado adecuado para la actividad. Dentro de las especificaciones generales un calzado cerrado, que cubra hasta el tobillo y de suela labrada disminuye la exposición, permite la adaptabilidad al suelo garantizando la estabilidad y seguridad de los turistas. Será el guía de acuerdo con la planeación de la actividad el que determinará si el uso de otro tipo de calzado representa un riesgo aceptado (Organización Internacional del Trabajo, 2021).
          .col-lg-6.col-9
            figure
              img(src='@/assets/curso/tema1/img11.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Cuerpo" :icono="require('@/assets/curso/tema1/i7.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0.col-11
            h4 Cuerpo
            p Las medidas deben estar enfocadas a disminuir la exposición a peligros como altas o bajas temperaturas, proyección de partículas de metal o salpicaduras de productos químicos y desgaste o enganche de las prendas de vestir.

            p.mb-0 El guía de naturaleza valora el clima y debe utilizar un conjunto de prendas y accesorios para la condición del ambiente, que le otorgue seguridad y comodidad y le permita conservar el rendimiento físico necesario, a esta forma de verter se le denomina capas: 
            .col-sm.mb-5.mb-sm-0
              ul.lista-ul--color
                li 
                  i.fab.fa-telegram
                  p.mb-0 <strong>Primera capa:</strong> aleja el sudor, evita la humedad y el frío. Licras y camisetas.
                li 
                  i.fab.fa-telegram
                  p.mb-0 <strong>Segunda capa:</strong>  retiene el calor, facilita la evacuación del sudor.  Pantalones largos de tejidos resistentes, ligeros, elásticos, repelentes al agua y a la vez transpirables.
                li 
                  i.fab.fa-telegram
                  p.mb-0 <strong>Tercera capa:</strong>   protege de la humedad, viento y lluvia. Ropa impermeable,  chaquetas livianas, resistentes al agua, transpirables, con capucha y con varios bolsillos para tener a mano objetos de uso habitual. 
                    
          .col-lg-6.col-9
            figure
              img(src='@/assets/curso/tema1/img12.png', alt='Texto que describa la imagen')
    .cajon.color-primario.p-4.mb-4
      p En Colombia el turismo de naturaleza tiene un especial protagonismo por las características del país, sin embargo, los turistas, por lo general, no cuentan con la ropa e indumentaria que requiere un tipo de práctica, y los peligros aumentan proporcionalmente con la altitud, por ejemplo, desencadenando episodios de hipotermia por la exposición prolongada del cuerpo al agua o al viento frío. Por tanto, es importante que el guía de turismo esté en la capacidad de contrarrestar este tipo de situaciones, realizando asertivamente unas recomendaciones previas al servicio y un alistamiento muscular pertinente, esto marcará la diferencia (Peña, et al. 2010).
    p.mt-5 Cuando el guía es consciente de los elementos para su protección personal, está preparado para continuar con la verificación de los servicios de los proveedores y prestar la asistencia a los usuarios en todos los casos.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Asistencia del guía al usuario en los establecimientos de proveedores
    .row
      .col-lg-1
      .col-lg-2
        img(src='@/assets/curso/tema1/img13.svg', alt='Texto que describa la imagen')
      .col-lg-8
        p.mt-2 Cabo (2004) expone que la labor del guía se intensifica cuando el usuario contrata productos turísticos que tiene incluido el servicio de alojamiento, restaurante o transporte. Es ideal que el guía reconozca la delimitación de sus acciones, técnicas de control y asistencia del grupo, y las posibles soluciones para el control de cualquier problema que surja en el servicio y con ello minimizar los imprevistos.
        p Para una correcta asistencia a los usuarios, es importante mantener una estrecha relación con los proveedores. Tenga en cuenta las recomendaciones que se dan para la logística.
    .row.mt-5.align-items-center
      .col-lg-6
        .row
          .col-lg-1.col-2
            img.widt1(src='@/assets/curso/tema1/f1.svg', alt='Texto que describa la imagen')
          .col-lg-11.col-10
            h4.mb-0.bi1 Asistencia a usuarios según servicios contratados
    p.mt-3 La logística para una correcta asistencia y guía a los usuarios se verá ajustada según los servicios contratados, por eso ten en cuenta las siguientes recomendaciones:
    .row.justify-content-center.mt-4 
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")(data-aos="flip-right")
          .row.justify-content-center
            .col-lg-7.mb-4.mb-md-0
              p Cuando el servicio de transporte es incluido, el guía debe encargarse de iniciar una relación cercana con el conductor asignado para establecer su conocimiento de la ruta, su experiencia y experticia en relación con el transporte a realizar, haciéndolo sentir parte del servicio y del grupo, así se garantiza un mejor servicio. 

            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img14.png', alt='Texto que describa la imagen')

          .row.justify-content-center
            .col-lg-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img15.png', alt='Texto que describa la imagen')

            .col-lg-7.mb-4.mb-md-0
              p.mt-2 Luego de este acercamiento es necesario revisar el vehículo e información como permisos, seguros, estado de limpieza, funcionamiento de micrófono y sistema audiovisual, aire acondicionado, etc. En el caso de encontrar algún fallo o inconveniente, notificar al contratante del servicio o proveedor, todo esto sin la presencia de los usuarios.

          .row.justify-content-center
            .col-lg-7.mb-4.mb-md-0
              p Luego de aprobadas las condiciones del vehículo se puede, según el protocolo definido, abordar el vehículo dando la información respecto al itinerario, recomendaciones en el caso de que se deba reorganizar su equipaje según paradas o necesidad (por ejemplo la visita a un balneario) y, por supuesto, antes del abordaje verificar documentación y datos de los pasajeros para garantizar su pertenencia al grupo.

            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img16.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img17.png', alt='Texto que describa la imagen')

            .col-lg-7.mb-4.mb-md-0
              p.mt-2 Para el equipaje y según lo acordado con el contratante, es importante hacer la marcación de la maleta y entregar la etiqueta correspondiente, también advertir sobre la importancia de evitar poner dinero, joyas u objetos delicados y valiosos en la bodega y llevarlo preferiblemente en el equipaje de mano.
        p Tras estos pasos, todos los pasajeros deben estar acomodados en sus respectivos asientos. Verificar que todos los usuarios hubiesen llegado y, en caso contrario, activar el protocolo acordado con el contratante. Luego, proceder a la bienvenida y las presentaciones de guía, conductor y servicio, para confirmar que el usuario tiene claro qué incluye y qué no, y la duración, entre otros aspectos.
        p En el caso de que el servicio de alojamiento esté incluido, al igual que en el caso anterior, el guía asume tareas de veedor y prevé las situaciones no conformes.
        p Llamará con anterioridad a la llegada al establecimiento, confirmando la reserva del grupo, lo que minimiza problemas de última hora o posibles equivocaciones, validando número o distribución correcta de camas, alimentación (menús y horarios) y servicios incluidos y no incluidos. Se debe usar la oportunidad para validar la forma más idónea de llegar (direcciones o puntos de referencias) y de ingresar al establecimiento.
        .row
          .col-lg-6
            .row.p-2.baz
              p En el momento de la llegada al alojamiento tener en cuenta:
              ul.lista-ul--color
                li.mb-0 
                  i.fab.fa-telegram
                  p.mb-0 Detener el carro en el lugar más adecuado cercano a la entrada del hotel. En caso de parquear en doble vía, procure que la puerta del carro quede en el lado de la acera, de lo contrario, se advertirá a los pasajeros del posible peligro.
                li.mb-0 
                  i.fab.fa-telegram
                  p.mb-0 Solo haga descender a todos los pasajeros en caso de que todos se alojen en el mismo lugar. De lo contrario, a la llegada se debe bajar solo el guía confirmar datos y luego ayudar a descender a los pasajeros que correspondan, el resto del grupo le esperará en el vehículo.
                li.mb-0 
                  i.fab.fa-telegram
                  p.mb-2 Mientras, los pasajeros descienden y sacan sus equipajes en el caso de que no haya botones. Luego el guía se presentará en recepción y dará la información del grupo para que se haga el alistamiento para un <i>check-in</i> eficiente.
          .col-lg-6
            img(src='@/assets/curso/tema1/img18.png', alt='Texto que describa la imagen')
    p.mt-3 En la asistencia del equipaje, el guía y el encargado deben coordinar el transporte, recogida y entrega del equipaje.
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Estrategias para la recepción y organización de maletas")
        .col-md-11.mb-4.mb-md-0
          p Marcar las maletas con el número de habitación que le corresponde. Confirmar que cada maleta tenga los datos necesarios y contrastarlos con el rooming list en la que aparecen los números de las habitaciones asignadas por nombres, de esa forma el botones podrá subir el equipaje sin equivocarse de habitación.
          p Mientras se realiza el <i>check-in</i>, el grupo de usuarios debe mantenerse alejado del mostrador de recepción para que el guía pueda tomar decisiones con mayor libertad. 
          ul.lista-ul--color
            li 
              i.fab.fa-telegram
              | Junto al recepcionista se asignan las habitaciones de la lista de clientes y según el tipo de habitación. Identifica de forma diferente con algún elemento cada acomodación diferente para un control más rápido y escribe en la lista el número asignado frente al nombre de cada pasajero.
            li 
              i.fab.fa-telegram
              | Antes de que el recepcionista realice la entrega de las llaves, el guía debe tener clara la información sobre los servicios del hotel para orientar al usuario. 
          p Algunas preguntas que debe plantearse:
          ul.lista-ul--color
            li.mb-0
              i.fab.fa-telegram
              | ¿Cómo movilizarse en las áreas del hotel?
            li.mb-0 
              i.fab.fa-telegram
              | ¿Qué servicios y amenidades tienen?
            li.mb-0 
              i.fab.fa-telegram
              | ¿Qué alimentación incluye?
            li.mb-0 
              i.fab.fa-telegram
              | ¿Cuáles son los horarios de todos los servicios?
            li.mb-0 
              i.fab.fa-telegram
              | ¿Qué medios de transporte alternos hay disponibles en la zona?
            li.mb-0 
              i.fab.fa-telegram
              | ¿Dónde se encuentran bancos, casas de cambio y otros lugares de interés?

          p Adicionalmente, antes de entregar las llaves informar al grupo de todas las peculiaridades del alojamiento y las habitaciones, uso del minibar, llamadas de despertar, cajilla de seguridad y otros detalles como controles o aparatos automatizados.
      .row.justify-content-center(titulo="Estrategias para recogida de equipaje a la salida de alojamiento")
        .col-md-11.mb-4.mb-md-0
          p Para evitar que ocurran descuidos o pérdidas de equipajes del grupo, en el momento de la salida de alojamiento los botones recogen todas las maletas de las habitaciones y las dejan al lado del vehículo para que el conductor las vaya cargando en la bodega, este va “anunciando” los números que carga y el guía va punteando su lista; este proceso garantiza:

          ul.lista-ul--color
            li 
              i.fab.fa-telegram
              | Evitar la duda si se han cargado todas las maletas.

            li 
              i.fab.fa-telegram
              | La pertenencia de todas las maletas cargadas al grupo, pues ostentan el número identificativo.
            li 
              i.fab.fa-telegram
              | Identificar inmediatamente si falta una maleta.

          p En el <i>check-out</i> o salida del hotel, y ojalá previamente, se debe verificar que todos los clientes han devuelto la llave y pagado todos los posibles gastos extras que hayan efectuado durante la estancia (como minibar, cafetería, lencería, entre otros). 
          p Además de asegurarse que los servicios conexos sean eficientes, el guía también debe procurar directamente el bienestar del usuario respecto a sus condiciones de salud, determinar a dónde llevar al cliente en caso de emergencia y asegurarse qué cubre el seguro de viajes.
          p Con estas recomendaciones puede establecer un servicio de calidad frente a todos los usuarios de guianza turística.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Atención al usuario en situaciones de emergencia o peligro 
    p El concepto de urgencia y emergencia han sido desde su origen objeto de diferente interpretación tanto para el paciente, familiar y equipo sanitario, y por tanto objeto de confusión, por ello, es imprescindible distinguirlos y detectarlos con base en definiciones de expertos (Hernández, Pérez y Barranco, 2017). 
    p Es importante comprender la diferencia en los conceptos de accidente, urgencia y emergencia, lo que se explican a continuación:
    .row 
      .col-lg-4
        img(src='@/assets/curso/tema1/img19.png', alt='Texto que describa la imagen')
      .col-lg-8.mt-2
        TabsA.color-primario.mb-5

          .tarjeta.color-secundario--borde.p-4(titulo="Accidente")
            h4 Accidente
            p Es cualquier suceso que es provocado por una acción violenta y repentina, ocasionada por un agente externo involuntario y que puede o no dar lugar a una lesión corporal.  
          .tarjeta.color-secundario--borde.p-4(titulo="Urgencia")
            h4 Urgencia
            p Es toda situación que, en opinión del paciente, familia o quien asuma la responsabilidad de llevar a un paciente al hospital, requiere una atención sanitaria inmediata. Es por una patología no necesariamente mortal, pudiendo ser subjetiva según la percepción del usuario.
          .tarjeta.color-secundario--borde.p-4(titulo="Emergencia")
            h4 Emergencia
            p Es toda aquella situación que, en opinión del paciente, familia o quien asuma la responsabilidad de llevar a un paciente al hospital, requiere una atención sanitaria inmediata. En este caso la vida puede estar en peligro o la función vital de algún órgano.
    .row.bg1.align-items-center.mt-3
      .col-lg-4
        img(src='@/assets/curso/tema1/img20.png', alt='Texto que describa la imagen')
      .col-lg-8.mt-3
        p Para que el guía pueda prestar asistencia ante situaciones de emergencia o peligro, es necesario que tenga un entrenamiento de primeros auxilios coherentes con el contexto donde lleve a cabo sus actividades, es decir un guía de montaña requiere un entrenamiento más especializado que un guía de un museo en una ciudad principal. Además de las técnicas determinadas, el guía de turismo debe hacer una planeación de acuerdo con las particularidades de sus usuarios, para esta caracterización la principal herramienta es la ficha médica.
        p Desde la guianza, una ficha médica, es un formato en el que se recolectan los datos sobre el estado de salud de los pasajeros y determinar si cumple con las condiciones para participar del servicio guiado o identificar de los pasajeros que tiene restricciones alimenticias o de ciertas actividades y, por lo tanto, requiere preparar unas actividades alternativas. En este caso es ideal que la ficha médica sea expedida por un profesional de la salud que describa de manera detallada las restricciones del usuario. 
    p.mt-4 La ficha se diligencia antes del empezar el servicio guiado, no en él, durante ni después evitando que, si se tiene un acontecimiento médico, la no apertura de esta se puede calificar legalmente como una negligencia por parte del guía o de la empresa, cuestión que es delicada por las penas pecuniarias y hasta cárcel dependiendo que tan grave sea el caso. 
    p Los principales datos que tiene el formato son:
    .row.justify-content-center
      .col-lg-3.wqa.mt-2
        .row.f1.p-3
          p.mt-5 Número de documento (sin puntos ni comas).
      .col-lg-3.wqa.mt-2
        .row.f1.p-3
          p.mt-4 Nombre completo (como aparece en el documento de identificación).
      .col-lg-3.wqa.mt-2
        .row.f1.p-3
          p.mt-5 Número de contacto personal.
      .col-lg-3.wqa.mt-2
        .row.f1.p-3
          p.mt-4 Fecha de nacimiento (se requiere la edad para activar servicios de asistencia médica).
      .col-lg-3.wqa.mt-2
        .row.f1.p-3
          p.mt-4 EPS que le atiende y lugar en el que lo atiende en caso de urgencia (EPS o Sisbén).
    .row.justify-content-center
      .col-lg-3.wqa.mt-2
        .row.f1.p-3
          p.mt-4 Tiene algún tipo de alergias: medicamentos, alimentos, condiciones ambientales.
      .col-lg-3.wqa.mt-2
        .row.f1.p-3
          p.mt-4 ¿Está tomando medicamentos en este momento?
      .col-lg-3.wqa.mt-2
        .row.f1.p-3
          p.mt-4 Nombre completo de un contacto de emergencias (parentesco, teléfono).
      .col-lg-3.wqa.mt-2
        .row.f1.p-3
          p.mt-4 Tiene restricciones alimenticias o dieta especial.
      .col-lg-3.wqa.mt-2
        .row.f1
          p.mt-4.p-3 ¿Hay alguna información adicional que deban conocer el guía frente a su estado de salud? 
    span.colorn <strong>Nota:</strong> 
    |  a raíz de eventos como la Covid-19 y otro tipo de enfermedades como el dengue, se ha implementado como obligatorio en las actividades turísticas, preguntas como:
    .row.mt-4.justify-content-center
      .col-lg-6
        .row.justify-content-center
          .col-lg-6.col-md-6.col-10
            .row.f2.p-3
              p.mt-4 ¿Ha presentado alguno de los siguientes síntomas en los últimos 15 días? 
          .col-lg-6.col-md-6.col-10
            .row.f2.p-4
              p.mt-4.mb-4 ¿Pertenece a algún grupo de riesgo?
        .row.mt-2.justify-content-center
          .col-lg-6.col-md-6.col-10
            .row.f2.p-3
              p.mt-4.mb-4 ¿Vive con personas menores de 14 años o mayores de 60 años? 
          .col-lg-6.mt-2.col-md-6.col-10
            .row.f2.p-3
              p.mt-4.mb-4 ¿Ha recibido vacuna contra la Covid-19? 
        p.mt-4 Y ahora se solicita carné o esquema completo según sea el caso. 
        .cajon.color-primario.p-4.mb-4
          p Una buena práctica del guía de turismo es dejar constancia de la ficha médica de cada pasajero. Se recomienda una planilla o informe digital a través de un formulario al que pueda acceder el usuario del servicio desde cualquier dispositivo previamente para que pueda contestar las preguntas sin ninguna presión y, a su vez, el guía pueda tener los datos con antelación para realizar sus respectivos planes de acción y de contingencia.    
      .col-lg-6(data-aos="flip-right")
        img(src='@/assets/curso/tema1/img21.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.tarjeta.color-acento-botones
  background-color: #FFE6A1

.tarjeta.color-acento-botones *
  color: #12263F
.slyder-f__btn i
  color: #EB6F2D
.tarjeta--azul
  background-color: #FFF0C6
.tarjeta.color-secundario--borde
  background-color: #CCD3CA
  border: solid 4px #CCD3CA
.tabs-a__tab
  background-color: #D8D8D8
.tabs-a.color-primario .tabs-a__tab__selected
  color: white
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul
  background-color: #F6F6F6
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul.acordion__activo
  background-color: #FFF0C6!important
.tabs-a.color-primario .tabs-a__tab__selected
  background-color: #EB6F2D
.tabs-a.color-primario .tabs-a__tab__selected:before
  background-color: #EB6F2D
.tabs-a.color-primario .tabs-a__tab:hover, .tabs-a.color-primario .tabs-a__tab:active, .tabs-a.color-primario .tabs-a__tab:focus
  background-color: #EB6F2D
.cajon.color-primario
  padding-bottom: 3px!important
.tabs-a.color-primario .tabs-a__tab:hover
  color: white!important
</style>
