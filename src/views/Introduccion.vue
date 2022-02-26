<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.BGIMG01.p-4 
      .col-lg-10
        <br><br><br><br>
        .row
          .col-lg-5
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                p.mb-0 Estimado aprendiz, en el siguiente video se cuenta con una visión general del componente formativo que da cierre a este interesante curso #[strong Animación 3D:]        
      .col-lg-10
        <br><br><br><br><br>
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
   
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
