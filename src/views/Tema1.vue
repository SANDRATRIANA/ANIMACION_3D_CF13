<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    .titulo-principal
      .h3 1.	Formatos y exportación
    p.mb-4 Los formatos de video son archivos de producción comprimidos y descomprimidos mediante un códec, todo lo cual se agrupa gracias a un contenedor. En estos se contienen metadatos, audios e información. Es decir, códec + contenedor = formato de video.
    #t_1_1.titulo-segundo
      .h4 1.1 Relación de aspecto (Aspect ratio) 
    
    p.mb-4 Es la relación entre el ancho y el alto de la imagen, donde X es el ancho y Y es el alto, por ejemplo 1:1 significa que tiene proporciones iguales, como 500 x 500 px (pixeles) o 1920 x 1920 px. Un video con una relación de 1920 x 1080 px tiene una relación de aspecto de 16:9, esto quiere decir que el alto es 1.77.1 veces más alto. A raíz de ello se ven formatos cuadrados y rectangulares. 
    p.mb-4 Generalmente se ven  dos relaciones la 4:3 (los que se manejaban en televisión antigua) que en cine se expresaría como 1,33:1 y la 16:9 que vendría siendo 1,77:1. Esta medida resulta de dividir el ancho (4) por el alto (3). Si se tiene una resolución de 1280 px, que sería el ancho, y se quiere con formato de 16:9 se divide 1080 (ancho) / 1.777 = dará 720. (alto) es decir 1080 x 720px. Si se hace lo mismo, pero se quiere con un aspecto ratio de 4:3 con una resolución de 1280 px (ancho) lo dividido por 1.333, y da 960 px, es decir 1280 x 720 px. 

    figure.mb-5
      img(src="@/assets/curso/tema1/img_02.png", alt="alt")
     
    h3 De igual forma existen otras como son:
      .row.mb-5
        .col-md-6.mb-5.mb-md-0
          
          acento-botones
          LineaTiempoD.color-primario
            p.text-small(numero="1" titulo="Relación Aspecto 1:1:") significa que la altura y el ancho son iguales, lo cual crea un cuadrado visualmente, una de las resoluciones más comunes son 1080 x 1080, la típica imagen como foto de perfil de Instagram. También es muy común el uso de impresión fotográfica, pantallas de móviles, plataformas sociales, pero no se recomienda para televisión o formatos digitales  
            p.text-small(numero="2" titulo="Relación Aspecto 3:2:") es el formato estándar gracias a las cámaras filmadoras que utilizaban películas de 35 milímetros, representado en píxeles su tamaño común es de 1080 x 720 px.
            p.text-small(numero="3" titulo="Relación Aspecto 4:3 (1.33:1):") Relación Aspecto 4:3 (1.33:1):
            p.text-small(numero="4" titulo="Relación aspecto 16:9 (1.77:1):") este es el formato de pantalla estándar utilizado de televisión de alta definición, su tamaño más común en pixeles es 1920x1080 px y 1280 x 720 px.
            p.text-small(numero="5" titulo="Relación aspecto 21:9 (2.35:1):") este es el formato más usado en cine, con una dimensión en píxeles de 2560 x 1080 px o 3440 x 1440 tienen un formato de tamaño mucho más apaisado que el de 16:9.
    p.mb-4 A continuación, en la figura 1 se puede observar una comparativa de relación de aspecto (aspect ratio) con una resolución de tamaño proporcional a 720 px. donde se logra apreciar que algunos formatos son cuadrados, rectangulares o muy apaisados: 
    h3 Figura 1
    p.mb-4 Relación Aspecto con resolución 720 px

     figure.mb-5
      img(src="@/assets/curso/tema1/img_03.png", alt="alt")
    p.mb-4 La forma de exportar videos desde Blender varía en función a la plataforma en que se van a reproducir los proyectos audiovisuales, no es lo mismo exportar para redes sociales, que hacerlo para blu ray o pantalla grande, pero para todos los casos es importante y funcional, así que se hace necesario conocer los parámetros que debe ajustarse para ello:

    #t_2_2.titulo-segundo


      .h4 2.2 Video Motion

    p.mb-4 Animación digital que crea la ilusión de movimiento mediante imágenes, fotografías, títulos, colores y diseños.

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: '1FormatosYExportaciN',
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

<style lang="sass"></style>
