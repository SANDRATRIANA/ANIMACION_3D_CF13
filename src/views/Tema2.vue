<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plataformas de distribución, festivales y medios de financiación

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A continuación, se podrán observar las plataformas de distribución, festivales de animación y cine, así como también varias maneras de gestionar medios de financiación para nuestros proyectos. Para ello hay ciertas pautas y requerimientos que dependiendo de las plataformas serán más o menos iguales, hay que tener en cuenta en cada uno los requisitos solicitados a la hora de aplicar para ellos. 
          br
          br
          br

    #t_2_1.titulo-segundo
    .h4 2.1 Proyectos para convocatorias y concursos
    p.mb-4 A raíz de la implementación de la Ley 1834 de 2017 con la que se fomenta la economía creativa y se regula la Ley Naranja, el país ha abierto espacios significativos para el desarrollo de las industrias culturales y creativas. A continuación, se verá una explicación al respecto:
      img(src="@/assets/curso/tema2/img03.svg")

    .row.mb-4
      .col-4
        .BG07.p-4.mb-4  
          h4 Creación de convocatorias
        p Entre esos espacios se encuentra la creación de convocatorias para el desarrollo y fortalecimiento de proyectos artísticos y culturales, que se suman a las que ya venían de años anteriores como la Ley Filmación Colombia (2012) y el programa de Estímulos del Ministerio de Cultura.
      
      .col-4
        .BG07.p-4.mb-4  
          h4 Requerimientos
        p Los requerimientos para presentarse en una convocatoria en Colombia son distintos, dependiendo de las condiciones que establezca la propia convocatoria, pero en general tienen que ver con tener un documento del proyecto o propuesta, ser ciudadano colombiano mayor de edad, no tener impedimentos para concursar con el Estado, no haber sido ganador en convocatorias anteriores y cumplir con los requisitos documentales que se soliciten.  
     
      .col-4
        .BG07.p-4.mb-4  
          h4 Restricciones
        p Muchas convocatorias están restringidas a personas jurídicas o grupos constituidos, pero otras dan libre acceso también a personas naturales. 
    

    
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

<style lang="sass"></style>
