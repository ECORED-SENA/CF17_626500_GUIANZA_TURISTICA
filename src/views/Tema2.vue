<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Primeros auxilios
    .row.bg6
      .col-lg-6
        p Como se mencionó anteriormente, se requiere de una caracterización médica del usuario del servicio para realizar una planeación asertiva. Adicionalmente el guía de acuerdo con su entrenamiento debe hacer un alistamiento de los equipos y elementos que se requieran en caso de la necesidad de un primer auxilio a sus usuarios o como primer respondiente.
        .cajon.color-primario.p-4.mb-4
          p Según Hernández, Pérez y Barranco (2017), los primeros auxilios se entienden como:
          p.mb-0 El conjunto de técnicas y procedimientos de carácter inmediato que se llevan a cabo en los primeros momentos en que una persona, en el caso del servicio guiado el usuario, sufre una enfermedad o un accidente, con el fin de salvar su vida o minimizar el riesgo de sus lesiones (s. p.).
        
               
      .col-lg-6(data-aos="flip-up")
        img(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')
    p Dentro de la función de la asistencia, el guía también debe estar preparado para atender o asistir a uno o varios turistas que se encuentren enfermos o hayan sufrido una o varias lesiones a causa de un accidente ocurrido durante una actividad turística en la cual el guía estaba a cargo. Esta atención debe ser adecuada y acorde al lugar donde se encuentre la víctima, el guía se puede ver enfrentado a diferentes retos según el escenario, la actividad, el paciente, la ubicación del lugar, entre otros.
    .row
      .col-lg-8
        p Es indispensable que el guía tenga un curso en primeros auxilios, para estar en capacidad de preservar la vida, aliviar el dolor, asegurar la escena y hacer una evacuación en caso de ser necesaria. Y esta capacitación debe ser en una escuela reconocida con experiencia en este tipo de cursos, debe ser una capacitación con varias horas de práctica y el guía debe ser consciente de que debe actualizar su curso cada dos años o según lo recomiende la ley. La constante capacitación es necesaria ya que lo que no se practica con frecuencia se olvida. No se debe olvidar consultar la normatividad vigente al respecto, para conocer las obligaciones al respecto.
        p Es fundamental tener conocimientos en primeros auxilios, pero esto acarrea una responsabilidad importante, y se debe estar al tanto de las implicaciones legales que tiene tomar la decisión de auxiliar a una víctima, por ende, la capacitación debe ser muy completa y profesional y el guía debe ser muy responsable y prudente al momento de actuar.
      .col-lg-4(data-aos="flip-up")
        img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')
    p.mt-2 Algunos aspectos legales que se deben considerar cuando se tiene una mala práctica en la atención de una situación de emergencia son:
    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.col-md-6.col-10
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img3.png' alt='AvatarTop' style='width:300px')
          .tarjetas-up_card.bg--2-claro.p-3
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3.mb-4
                i.fas.fa-caret-down.fa-2x.color-primario.me-3.mb-4
              h4.mb-0.text-center.mb-4 Negligencia por omisión
            p.text-center  No prestar el auxilio o la asistencia.
      .col-lg-3.mb-3.col-md-6.col-10
        .tarjetas-up
          img(src='@/assets/curso/tema2/img4.png' alt='AvatarTop' style='width:300px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3.mb-4
                i.fas.fa-caret-down.fa-2x.color-primario.me-3.mb-4
              h4.mb-0.text-center.mb-4  Negligencia
            
            p.text-center  Lo que se debe hacer no se hace, o sabiendo lo que no se debe hacer se hace.
      .col-lg-3.mb-3.col-md-6.col-10
        .tarjetas-up
          img(src='@/assets/curso/tema2/img5.png' alt='AvatarTop' style='width:300px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3.mb-4
                i.fas.fa-caret-down.fa-2x.color-primario.me-3.mb-4
              h4.mb-0.text-center.mb-4  Impericia
            
            p.text-center   Falta de conocimiento o de experiencia para realizar una acción necesaria.
      .col-lg-3.mb-3.col-md-6.col-10
        .tarjetas-up
          img(src='@/assets/curso/tema2/img6.png' alt='AvatarTop' style='width:300px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3.mb-4
                i.fas.fa-caret-down.fa-2x.color-primario.me-3.mb-4
              h4.mb-0.text-center.mb-4  Imprudencia
            
            p.text-center  Acciones realizadas sin precaución y sin medir las consecuencias.
    .cajon.color-primario.p-4.mb-4
      p No es fácil atender una situación de emergencia cuando se tiene la responsabilidad de asistir a los turistas, lo mejor es estar preparado con una muy buena capacitación que tenga simulacros y prácticas y no dejar de estudiar ya que no se sabe en qué momento sean necesarios estos conocimientos.
    separador    
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Acciones de respuesta
    .row.bg6
      .col-lg-6(data-aos="flip-up")
        img(src='@/assets/curso/tema2/img7.png' alt='AvatarTop' )

      .col-lg-6
        p.mt-2 Las acciones de respuesta son aquellos procedimientos que se deben tener en cuenta al momento de que una situación de emergencia se presente. Las organizaciones o agencias de viajes para las cuales el guía de turismo trabaja, están en la obligación de tenerlos y socializarlos para que se maneje un mismo lenguaje. Las acciones para llevar a cabo en situaciones de emergencia varían dependiendo de la actividad en la que se encuentre el grupo de visitantes, no será lo mismo definir un paso a paso para actividades de turismo cultural en donde el acceso a una atención especializada es más fácil, que proponer acciones para actividades que se realizan en entornos con evacuaciones más complejas.
        p Los procedimientos y protocolos son claros, precisos y escritos en un lenguaje comprensible para que cualquier persona los pueda usar y, lo más importante, aplicar. Igualmente, es fundamental tener claro los diferentes roles que intervienen en dichas acciones de respuesta y una vez se estén realizando evitar choques que pueden tener graves consecuencias, al faltar uno de los pasos en el orden de acciones a seguir.
        .cajon.color-primario.p-4
          p.mb-0 No se debe olvidar que la recomendación siempre es tomarse unos instantes para analizar las situaciones antes de actuar.
    p.mt-4 A continuación, se dan algunas recomendaciones que son efectivas cuando la persona tiene conocimientos básicos de un primer auxilio o está acompañado por una profesional de la salud. (Ver tabla 1)
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-3.col-lg-3
          img(src="@/assets/curso/tema2/img8.png")
        .col.mt-5
          .row.justify-content-between.align-items-center.mt-5
            .col.mb-3.mb-sm-0
              h3.mb-1 Tabla 1
              p A continuación le invitamos a profundizar sobre el procedimientos generales de primeros auxilios teniendo encuentra las recomendaciones que encontraras en la siguiente tabla.
            .col-sm-auto.mt-5.mtaz
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Anexo_Tabla1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    .row.justify-content-center
      .col-lg-10
        p Ahora, se invita a conocer las acciones de respuesta de una atención rápida.
    .row.justify-content-center.bg3
      .col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Ruta de atención rápida 
        img(src='@/assets/curso/tema2/img9.svg', alt='Texto que describa la imagen')
        figcaption.mt-2 Nota. Adaptada de Hernández, Pérez y Barranco (2017).
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Manejo del pánico individual
    .row.bg6
      .col-lg-6
        p La labor de asistencia del guía no está relacionada únicamente con la atención en caso de una emergencia, de hecho, debe persistir en evitar que la situación se dé por medio de la adecuada planeación. Sin embargo, el contexto o situaciones fuera de su alcance puede desatar episodios de pánico, donde el guía también su función de conducción, como buen líder logra hacer un manejo adecuado de la situación.
        .cajon.color-primario.p-4.mb-4
          p Según Roca (2015), la palabra pánico:
          p.mb-0 Está directamente relacionada con las emergencias, por antecedentes históricos donde la multitud o una persona al mando actúan desesperada y descontroladamente, ocasiona heridos y en casos más graves. Y esto está relacionado con que todo ser humano ante una situación de peligro real o imaginaria, responde con miedo, es una respuesta biológicamente congénita, nos protege como especie y ha permitido nuestra sobrevivencia. En términos generales sentir miedo es bueno y hasta beneficioso, porque evita que cometamos actos imprudentes, nos permite evaluar la situación de urgencia y nos prepara para la lucha o para la huida. El problema es cuando es desproporcionado y sale fuera de nuestro control nos produce ceguera psicológica es decir nos incapacita para evaluar el peligro en forma real y escoger la mejor alternativa para enfrentarlo o huir de él (s. p.). 
               
      .col-lg-6
        img.fine(src='@/assets/curso/tema2/img10.png', alt='Texto que describa la imagen')
    .row.mt-2
      .col-lg-1
      .col-lg-2
        img.fine(src='@/assets/curso/tema2/img11.svg', alt='Texto que describa la imagen')
      .col-lg-8
        p Por otro lado, la conducta de pánico provoca la ruptura de las relaciones sociales cooperativas y desemboca en comportamientos de egoísmo y falta de consideración cuando se empuja, se derriba, se pisotea y las salidas quedan obstruidas. 
        p Entre las situaciones propicias para este tipo de situaciones están: lugares públicos atiborrados de personas, salidas pequeñas o pocas vías de evacuación, el contacto unos con otros y poco espacio vital o personal, presentación de un conflicto común sumado a la agresividad.
    p Ante situaciones como las descritas anteriormente, se presentan algunas recomendaciones:
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LWEvm5VfdVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Manejo del pánico colectivo
    p Las técnicas para el manejo del pánico colectivo se basan en la calma y trabajo en equipo, los expertos recomiendan, entre otras acciones, las siguientes:
    PasosB.color-acento-contenido.bg4.mt-5

      .row.justify-content-center.mt-5.mb-5(titulo="Voz de mando")
        .col-lg-5.mb-4.mb-md-0.col-11
          p Requiere de voz serena, fuerte y equilibrada que diga sencillamente: “por aquí” es suficiente para que los que no hayan podido reaccionar, perciban esa orden y la sigan. Siguen a una persona que sabe lo que se debe hacer.
      
        .col-lg-6.col-9
          figure
            img(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
      .row.justify-content-center.mt-5(titulo="Razón")
        .col-lg-5.mb-4.mb-md-0.col-11
          p Si hay varios que dicen “por aquí”, porque conocen las técnicas de gestión de la emergencia, no importa, siempre obedecerá a criterios procedentes de la razón. 
      
        .col-lg-6.col-9
          figure
            img(src='@/assets/curso/tema2/img13.png', alt='Texto que describa la imagen')
      .row.justify-content-center.mt-5(titulo="Dudas")
        .col-lg-5.mb-4.mb-md-0.col-11
          p Habrá dudas, pero hay que llenar la mente de las personas y evitar el progreso hacia el pánico. 
        .col-lg-6.col-9
          figure
            img(src='@/assets/curso/tema2/img14.png', alt='Texto que describa la imagen')
      .row.justify-content-center.mt-5(titulo="Movilización")
        .col-lg-5.mb-4.mb-md-0.col-11
          p En caso de que el grupo ya esté descontrolado, evite ponerse delante de ellos y evitar que corran; posiblemente pasarán por encima suyo. La mejor táctica es asociarnos a ellos, gesticular más que ellos, gritar más que ellos, si se encuentran parados nos ponemos en el medio e impulsamos a los de adelante a seguir la dirección correcta, así arrastraremos a los de atrás a seguirnos. Si están en movimiento, nos ubicamos a la cabeza del grupo, entre las primeras filas. 
        .col-lg-6.col-9
          figure
            img(src='@/assets/curso/tema2/img15.png', alt='Texto que describa la imagen')
      .row.justify-content-center.mt-5(titulo="Pictóricos")
        .col-lg-5.mb-4.mb-md-0.col-11
          p Si van en sentido adecuado apresuramos el paso. Si van en sentido contrario, los conduciremos en la dirección más conveniente para que cambien el sentido de la marcha. Una vez fuera del peligro, tratar de calmarnos y, a su vez, calmar a los demás.
        .col-lg-6.col-9
          figure
            img(src='@/assets/curso/tema2/img16.png', alt='Texto que describa la imagen')
      .row.justify-content-center.mt-5(titulo="Calma")
        .col-lg-5.mb-4.mb-md-0.col-11
          p La mayoría se tranquilizará y empezará a preocuparse por la situación, sea claro con las explicaciones para no dar paso nuevamente al pánico (Roca, 2015).
        .col-lg-6.col-9
          figure
            img(src='@/assets/curso/tema2/img17.png', alt='Texto que describa la imagen')
    p.mt-4 Del dominio interno dependerá asumir con éxito este tipo de eventualidades, para las que el profesional debe estar preparado psicológica y físicamente. 



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

<style lang="sass">
.tarjeta.color-primario
  background-color: transparent
  background-image: url("../assets/curso/tema2/bg9.png") !important
  background-repeat: no-repeat

  background-position-y: 144px
  @media screen and ( max-width: 992px)
    background-color: #FFB338
.pasos-b.color-acento-contenido .pasos-b__header__item--active .pasos-b__header__item__dot
  background-color: white
.cajon.color-primario
  padding-bottom: 3px!important
</style>
