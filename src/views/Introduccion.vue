<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p La asistencia al viajero y turista en el sector turismo conlleva conocer sobre información de servicios y productos del turismo, el dominio de saberes y actuaciones relacionadas con la orientación, apoyo y solución ante situaciones de emergencia o peligro, en las cuales se requieren habilidades de comunicación para manejarlas.
    figure(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0bUfRiDlkGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
