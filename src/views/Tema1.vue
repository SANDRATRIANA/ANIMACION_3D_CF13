<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    .titulo-principal
      .h3 1.	Formatos y exportación
    
    .row.BG01.align-items-center.mb-4
      .col-lg-6
        p.mb-4 Los formatos de video son archivos de producción comprimidos y descomprimidos mediante un códec, todo lo cual se agrupa gracias a un contenedor. En estos se contienen metadatos, audios e información. Es decir, códec + contenedor = formato de video.
      .col.lg-6
        img(src="@/assets/curso/tema1/img01.png")

    #t_1_1.titulo-segundo
      .h4 1.1 Relación de aspecto (Aspect ratio) 

    .row.mb-4
      .col.lg-5
        img(src="@/assets/curso/tema1/img_02.png")
      .col-lg-7
        p.mb-4 Es la relación entre el ancho y el alto de la imagen, donde X es el ancho y Y es el alto, por ejemplo 1:1 significa que tiene proporciones iguales, como 500 x 500 px (pixeles) o 1920 x 1920 px. Un video con una relación de 1920 x 1080 px tiene una relación de aspecto de 16:9, esto quiere decir que el alto es 1.77.1 veces más alto. A raíz de ello se ven formatos cuadrados y rectangulares. 
        .cajon.color-acento-botones.p-4
          p Generalmente se ven  dos relaciones la 4:3 (los que se manejaban en televisión antigua) que en cine se expresaría como 1,33:1 y la 16:9 que vendría siendo 1,77:1. Esta medida resulta de dividir el ancho (4) por el alto (3). Si se tiene una resolución de 1280 px, que sería el ancho, y se quiere con formato de 16:9 se divide 1080 (ancho) / 1.777 = dará 720. (alto) es decir 1080 x 720px. Si se hace lo mismo, pero se quiere con un aspecto ratio de 4:3 con una resolución de 1280 px (ancho) lo dividido por 1.333, y da 960 px, es decir 1280 x 720 px. 

    .row.mb-4
      .col-lg-4.BG04.p-2
        h4.text-white.mb-0 De igual forma existen otras como son:

    .row.mb-5
      .col-md-6.mb-5.mb-md-0
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Relación Aspecto 1:1:") significa que la altura y el ancho son iguales, lo cual crea un cuadrado visualmente, una de las resoluciones más comunes son 1080 x 1080, la típica imagen como foto de perfil de Instagram. También es muy común el uso de impresión fotográfica, pantallas de móviles, plataformas sociales, pero no se recomienda para televisión o formatos digitales  
          p.text-small(numero="2" titulo="Relación Aspecto 3:2:") es el formato estándar gracias a las cámaras filmadoras que utilizaban películas de 35 milímetros, representado en píxeles su tamaño común es de 1080 x 720 px.
          p.text-small(numero="3" titulo="Relación Aspecto 4:3 (1.33:1):") Relación Aspecto 4:3 (1.33:1):
          p.text-small(numero="4" titulo="Relación aspecto 16:9 (1.77:1):") este es el formato de pantalla estándar utilizado de televisión de alta definición, su tamaño más común en pixeles es 1920x1080 px y 1280 x 720 px.
          p.text-small(numero="5" titulo="Relación aspecto 21:9 (2.35:1):") este es el formato más usado en cine, con una dimensión en píxeles de 2560 x 1080 px o 3440 x 1440 tienen un formato de tamaño mucho más apaisado que el de 16:9.
      .col-md-6.mb-5.mb-md-0
        img(src="@/assets/curso/tema1/img04.png")

    p.mb-4 A continuación, en la figura 1 se puede observar una comparativa de relación de aspecto (aspect ratio) con una resolución de tamaño proporcional a 720 px. donde se logra apreciar que algunos formatos son cuadrados, rectangulares o muy apaisados: 
   
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-secundario
          h5 Figura 1.
          span Relación Aspecto con resolución 720 px 
        figure.mb-5
          img(src="@/assets/curso/tema1/img05.svg")
    
    p.mb-4 La forma de exportar videos desde Blender varía en función a la plataforma en que se van a reproducir los proyectos audiovisuales, no es lo mismo exportar para redes sociales, que hacerlo para blu ray o pantalla grande, pero para todos los casos es importante y funcional, así que se hace necesario conocer los parámetros que debe ajustarse para ello:

    .row.justify-content-center.mb-4
      .col-lg-4
        SlyderF.mb-5(columnas="col-12")
          .BG02.p-4
            figure.mb-4
              img(src='@/assets/curso/tema1/img_05.jpg')
            p.text-center  Antiguamente con los televisores de caja, tenían un aspecto casi cuadrado, el cual era de 4:3, es decir que tenían 4 unidades de ancho por 3 de alto. 
          .BG02.p-4
            figure.mb-4
              img(src='@/assets/curso/tema1/img_06.jpg')
            p.text-center  Pero ahora las pantallas de los últimos 20 años suelen ser de 16:9, que es el estándar por excelencia, lo que ha generalizado las emisiones televisivas, y el streaming.  Este tipo de aspecto, tiene una visión panorámica.
          .BG02.p-4
            figure.mb-4
              img(src='@/assets/curso/tema1/img_07.jpg')
            p.text-center Aun así, seguimos viendo en ellas, las famosas bandas de color negro alrededor de la imagen, con la finalidad de que las películas, que se han hecho con un aspecto diferente, puedan visualizarse de forma completa, pero perdiendo parte de pantalla en ella. 

    .row.justify-content-center.mb-4
      .col-lg-10
        .row.align-items-center.BG03.p-3
          .col-1
            img(src='@/assets/curso/tema1/img08.png')
          .col-7
            h4 Aspect ratio
            p En los siguientes videos, podremos observar cómo ajustar los parámetros para realizar la salida de video desde Blender, ajustando el aspect ratio, codec y contenedor.
          .col-1
          .col-3
            .mb-3
              a.boton.BG04.me-3(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                span.text-white Ver video
    
    separador
    h3 1.2 Tipos de Formato

    .row.align-items-center.BG05.p-4.mb-4      
      .col-md-6.mb-4.mb-md-0
        p   Hay diversidad de formatos que se pueden utilizar para exportar e importar imágenes y videos, para que al reproducirlos dependiendo de la plataforma que se establezca para ello, se visualicen de manera óptima y correcta, entre ellos se va a encontrar los siguientes:
      .col-md-6
        figure
          img(src='@/assets/curso/tema1/img_08.png', alt='Texto que describa la imagen')
    
    .row.mb-4
      .col-lg-4.BG04.p-2
        h4.text-white.mb-0 Formatos de video: 

    p.mb-4 A continuación, se podrán observar los conceptos de los formatos de video existentes:
    
    .row.mb-5
      .col-lg-5
        figure.mb-5
          img(src="@/assets/curso/tema1/img_10.svg")
      .col-lg-6.mb-5.mb-md-0
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Contenedor MP4:") Conservan alta calidad, manteniendo un tamaño reducido. Es de los más utilizados actualmente, se usa frecuentemente para compartir en línea, puede contener datos adicionales como subtítulos e imágenes estáticas. Es combinado generalmente con h.264 y h.265.
          p.text-small(numero="2" titulo="Contenedor AVI:") Formato de video posicionado y antiguo, tiende a generar archivos grandes, pero soportados por gran variedad de códecs. No es útil para la transmisión en línea.
          p.text-small(numero="3" titulo="Contenedor MKV:") Formato de video profesional de código abierto llamado matroska en el cual se pueden almacenar anexados al canal de audio, varios tipos de subtítulos, varias pistas de audio.
          p.text-small(numero="4" titulo="Contenedor FLV:") Actualmente de reducido su uso, fue el formato más común en reproductores en línea, no se recomienda trabajar en este formato puesto que se ha terminado la compatibilidad para él.
          p.text-small(numero="5" titulo="Contenedor MOV:") Calidad alta pero limitada compatibilidad, además de generar archivos muy grandes. ideal para archivar videos de alta calidad.
          p.text-small(numero="6" titulo="Contenedor WMV:") Este tipo de formato genera videos pequeños ideales para ser enviados por correo, como muestra de avances. Pierde calidad significativamente al ser archivos pequeños.
          p.text-small(numero="7" titulo="Contenedor DIVX/XviD:") Codec antiguo que aún circula, diseñado para tener calidad de video alta, pero a su vez tamaños de archivos grandes. Usado frecuentemente para el almacenamiento y transporte en discos duros.
          p.text-small(numero="8" titulo="H.264 (MPEG-4):") Formato muy usado, con pérdida de calidad, pero ampliamente compatible, de uso estandarizado para blu ray y servidores web. Se puede utilizar a tasas de bits tanto altas como bajas, se utiliza con contenedores .mp4 y .mov.
            
    .row.mb-4
      .col-lg-4.BG04.p-2
        h4.text-white.mb-0 Formatos de imagen 

    p.mb-4 El formato hace referencia a la forma en que se almacenarán los datos que hacen parte de una imagen. Existen dos tipos de imágenes, los mapas de bits (bitmaps) o imágenes rasterizadas, que están conformadas por un conjunto de puntos diminutos conocidos como píxeles ordenados en una malla, a los cuales se les atribuye un color por medio de coordenadas, por lo que no se puede aumentar su tamaño sin que se disminuya su calidad, y los vectores, los cuales están formados por polígonos de puntos en vez de pixeles, por lo que se pueden redimensionar o escalar infinitamente ya que no pierden su calidad.
      
    h3 Existen diferentes formatos en los cuales se pueden almacenar datos de imagen: 

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema1/img_11.jpg' alt='AvatarTop')
        h2.text-center JPEG/JPG:
        p.text-center Es uno de los formatos más comunes, usado generalmente en las cámaras fotográficas digitales que comprime los archivos manteniéndolos ligeros para que puedan ser fácilmente visualizados, compartidos y publicados en red; sin embargo, su principal inconveniente es que cada vez que el archivo se edita y se vuelve a guardar va perdiendo calidad, además no es apto para guardar texto, ilustraciones o gráficos simples.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema1/img_12.jpg' alt='AvatarTop')
        h2.text-center GIF:
        p.text-center Es un formato de compresión sin pérdidas manteniendo los archivos ligeros, y es altamente compatible por lo que a menudo se usa para compartir principalmente, gráficos webs sencillos y animaciones cortas sin sonido (GIF animados).
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema1/img_13.jpg')
        h2.text-center PNG:
        p.text-center Se trata de un formato de compresión diseñado para gráficos web usado como mejora del GIF, y al igual que éste, no presenta pérdidas de calidad al editarse, permitiendo archivos más grandes e imágenes más complejas con colores sólidos y líneas nítidas; a diferencia de los GIF, pueden contener un grado de transparencia brindando mayor flexibilidad al editar o crear imágenes y gráficos en la web, aunque sin permitir la animación de los mismos, además solo admiten colores RGB y su compatibilidad es limitada.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema1/img_14.jpg' alt='AvatarTop')
        h2.text-center BMP:
        p.text-center Se trata de un formato sin compresión o su tasa es demasiado baja, en el cual se registra cada píxel de la matriz que compone una imagen. Es altamente compatible por lo que anteriormente se utilizaba mucho en la edición de imágenes, aunque presenta un gran problema debido a que el tamaño de los archivos es enorme y por lo tanto, son muy pesados.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema1/img_15.jpg' alt='AvatarTop')
        h2.text-center TIF/TIFF: 
        p.text-center Es un formato de compresión sin pérdidas, utilizado principalmente para datos de imagen sin procesar, lo que permite trabajar con imágenes de alta calidad y archivos de impresión ya que mantiene la resolución y la calidad; además, es altamente compatible con ordenadores permitiendo guardar varias imágenes y páginas en un mismo archivo. Las imágenes que se trabajan con este formato son bastante grandes ya que contienen más detalles, más colores, mayor calidad y resolución, por lo que, aunque, es un formato de compresión, los archivos quedan bastante pesados

</template>

<script>
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
