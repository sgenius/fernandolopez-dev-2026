import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import styles from "./mosaicAbout.module.css";

export default async function MosaicPage() {
  const t = await getTranslations("projects.mosaic.about");
  const tMosaic = await getTranslations("projects.mosaic");
  const locale = await getLocale();
  return (
    <>
      <header className={`block-wrapper ${styles.aboutHeader}`}>
        <section id="back-to-home" >
          {locale === "en" ? "Projects" : "Proyectos"}{` `}&gt;{` `}<Link href="/projects/mosaic"><span className={styles.projectName}>{tMosaic("title")}</span></Link>{` `}&gt;{` `}{tMosaic("about.title")}
        </section>
        <section className="section">
          <h1 className="section-title">{tMosaic("title")}</h1>
          <p className="titleSlug">{tMosaic("slug")}</p>
        </section>
      </header>
      <div className={`block-wrapper ${styles.aboutContent}`} id="mosaic-about-content">
        <section className="section" id="explanation-map">
          <h2>{t("theMap")}</h2>
          { locale === "en" ?
            <>
                <p>I&apos;ve loved maps since I was a child. I tend to doodle geographical forms, which sometimes matured into imaginary places.</p>
                <p>At some point, inspired by <Link href='http://www.jerrysmap.com/' target="_blank" rel="noopener noreferrer">Jerry&apos;s Map</Link>, I started a long term project to have these places live in a world to discover.</p>
            </>
          : 
            <>
                <p>Desde niño me gustan los mapas. Tiendo a dibujar formas geográficas que a veces se convierten en lugares imaginarios.</p>
                <p>En algún momento, inspirado por <Link href='http://www.jerrysmap.com/' target="_blank" rel="noopener noreferrer">Jerry&apos;s Map</Link>, comencé un proyecto a largo plazo para tener estos lugares vivos en un mundo para descubrir.</p>
            </>
          }
          <h3>{t("buildingTheMap")}</h3>
          <Image className={styles.horizontal} src="/images/drawing-a-new-card.jpg" alt={locale === "en" ? "Some map cards assembled in a grid, on a desk, plus a new card with a map in progress." : "Algunas tarjetas de mapa ensambladas en una cuadrícula, sobre un escritorio, además de una tarjeta nueva con un mapa en progreso."} title={locale === "en" ? "Drawing new cards requires the context of its surrounding maps. This is how my desk looks like." : "Dibujar tarjetas nuevas requiere el contexto de los mapas que las rodean. Así es como se ve mi escritorio."}  width={688} height={516} />
          { locale === "en" ?
            <>
                <p>Some basic rules for the project:</p>
                <ul>
                    <li><strong>A road map:</strong> I wanted to create a world that anybody could relate to.</li>
                    <li><strong>A unending project:</strong> This world will survive me.</li>
                    <li><strong>Creation over deletion: </strong> I find much more interesting to build up a mosaic (hence, the project name) of the places generated throughout the years.</li>
                    <li><strong>Cheap to build:</strong> The physical version is done with pens and markers on 3x5 inch index cards.</li>
                    <li><strong>Made to last:</strong> Everything gets scanned; the map can be rebuilt from the digital backup.</li>
                    <li><strong>There might be errors: </strong> And that is fine. Same happens with real maps.</li>
                    <li><strong>Not all is represented: </strong> Maps are, by definition, editorialized. There is more than meets the eye; it&apos;s up to the viewer to imagine it.</li>
                </ul>
            </>
          :
            <>
                <p>Algunas reglas básicas para el proyecto:</p>
                <ul>
                    <li><strong>Un mapa cercano:</strong> Quería crear un mundo con el que cualquiera pudiera identificarse.</li>
                    <li><strong>Un proyecto sin fin:</strong> Este mundo me sobrevivirá.</li>
                    <li><strong>Creación sobre eliminación: </strong> Me parece mucho más interesante construir un mosaico (de ahí el nombre del proyecto) de los lugares generados a lo largo de los años.</li>
                    <li><strong>Económico de construir:</strong> La versión física se hace con plumas y marcadores sobre tarjetas de 3x5 pulgadas.</li>
                    <li><strong>Hecho para durar:</strong> Todo se escanea; el mapa puede reconstruirse a partir del respaldo digital.</li>
                    <li><strong>Puede haber errores: </strong> Y está bien. Lo mismo ocurre con los mapas reales.</li>
                    <li><strong>No todo está representado: </strong> Los mapas son, por definición, editorializados. Hay más de lo que parece a simple vista; depende del espectador imaginarlo.</li>
                </ul>
            </>
          }
          <h3>{t("scale")}</h3>
          <Image className={styles.horizontalLeft} src="/images/current-scale-card.jpg" alt={locale === "en" ? "A card showing the coastline of San Francisco and a scale reference. The card is on a desk. A pen and a lamp are partially visible." : "Una tarjeta que muestra la costa de San Francisco y una referencia de escala. La tarjeta está sobre un escritorio. Una pluma y una lámpara son parcialmente visibles."} title={locale === "en" ? "A card showing the coastline of San Francisco and a scale reference." : "Una tarjeta que muestra la costa de San Francisco y una referencia de escala."}  width={688} height={516} />
          { locale === "en" ?
            <>
                <p>Approximately 1:300000. In the physical version, 5 cm represent 15 km. This is about a zoom level of 10.8 if viewing San Francisco in Google Maps or <Link href="https://www.openstreetmap.org/#map=11/37.7959/-122.1772" target="_blank" rel="noopener noreferrer">OpenStreetMap.</Link></p>
                <p>For orography, there are level curves every 50 units. Each unit is two meters. This means each curve represents a 100m elevation change.</p>
                <p>On a web map, zoom changes with latitude. This is not true of this map: the zoom is constant, as if the planet were a cylinder.</p>
            </>
          :
            <>
                <p>Aproximadamente 1:300000. En la versión física, 5 cm representan 15 km. Esto equivale a un nivel de zoom de aproximadamente 10.8 al ver San Francisco en Google Maps u <Link href="https://www.openstreetmap.org/#map=11/37.7959/-122.1772" target="_blank" rel="noopener noreferrer">OpenStreetMap.</Link></p>
                <p>Para la orografía, hay curvas de nivel cada 50 unidades. Cada unidad equivale a dos metros. Esto significa que cada curva representa un cambio de elevación de 100 m.</p>
                <p>En un mapa web, el zoom cambia con la latitud. Esto no ocurre en este mapa: el zoom es constante, como si el planeta fuera un cilindro.</p>
            </>
          }
        </section>
        <section id="explanation-digitization">
            <h2>{t("digitizationAndCompression")}</h2>
            { locale === "en" ?
              <>
                  <p>When I had around 200 map pieces, I got myself a scanner and started digitizing. The scan process results in .png files of <em>about</em> 1500x900 pixels, around 400kb each.</p>
                  <p>Out of these, zoomed-out &quot;thumbnail&quot; versions were created using Python&apos;s <Link href="https://pillow.readthedocs.io/" target="_blank" rel="noopener noreferrer">Pillow</Link> library; each thumb measures no more than 8kb.</p>
              </>
            :
              <>
                  <p>Cuando tenía alrededor de 200 piezas de mapa, conseguí un escáner y comencé a digitalizar. El proceso de escaneo genera archivos .png de <em>aproximadamente</em> 1500x900 píxeles, de unos 400 kb cada uno.</p>
                  <p>A partir de estas, se crearon versiones &quot;miniatura&quot; alejadas usando la biblioteca <Link href="https://pillow.readthedocs.io/" target="_blank" rel="noopener noreferrer">Pillow</Link> de Python; cada miniatura no supera los 8 kb.</p>
              </>
            }
        </section>
        <section id="explanation-mosaic">
            <h2>{t("theMosaicViewer")}</h2>
            <Image className={styles.horizontal} src="/images/early-mosaic.jpg" alt={locale === "en" ? "A series of map cards ordered in a grid on a wooden floor." : "Una serie de tarjetas de mapa ordenadas en una cuadrícula sobre un piso de madera."} title={locale === "en" ? "Soon, tiling the cards on the floor became impractical." : "Pronto, acomodar las tarjetas en el piso se volvió poco práctico."}  width={688} height={516} />
            { locale === "en" ?
              <>
                  <p>The viewer exists to inform about the map as a whole (without having to lay down all cards in the floor) and to show it to the world. Zooming and panning are included; at low zoom levels, the thumb images are used; the image set is swapped when the zoom is high enough.</p>
                  <h3>{t("theFirstVersion")}</h3>
                  <p>This was created with <Link href="http://fabricjs.com/" target="_blank" rel="noopener noreferrer">Fabric</Link>, chosen for its OOP-style abstractions on top of the canvas API and its powerful utilities.</p>
                  <p>Fabric worked great, but it has its challenges. Using it with React required a wrapper based on <Link href="https://stackoverflow.com/questions/37565041/how-can-i-use-fabric-js-with-react">this</Link>.&nbsp;Also, swapping between image sets when zooming presented memory issues.</p>
                  <h3>{t("theCurrentVersion")}</h3>
                  <p>When rebuilding this website in 2023, Fabric would not play well with Next.js, so I moved to <Link href="https://konvajs.org/">Konva</Link>.</p>
                  <p>Thanks to <Link href="https://konvajs.org/docs/react/Intro.html" target="_blank" rel="noopener noreferrer">Konva&apos;s React integration</Link>, the memory management problem was gone. Each tile is a component, and tilesets are set declaratively; React takes care of the rest.</p>
                  <p>For the 2026 website rebuild I focused on porting the existing functionality and updating dependencies.</p>
              </>
            :
              <>
                  <p>El visor existe para mostrar el mapa en su conjunto (sin tener que extender todas las tarjetas en el piso) y para enseñarlo al mundo. Incluye zoom y desplazamiento; en niveles de zoom bajos se usan las imágenes en miniatura; el conjunto de imágenes se intercambia cuando el zoom es suficientemente alto.</p>
                  <h3>{t("theFirstVersion")}</h3>
                  <p>Esto se creó con <Link href="http://fabricjs.com/" target="_blank" rel="noopener noreferrer">Fabric</Link>, elegido por sus abstracciones de estilo orientado a objetos sobre la API de canvas y sus poderosas utilidades.</p>
                  <p>Fabric funcionó muy bien, pero tiene sus desafíos. Usarlo con React requirió un envoltorio basado en <Link href="https://stackoverflow.com/questions/37565041/how-can-i-use-fabric-js-with-react">esto</Link>.&nbsp;Además, el intercambio entre conjuntos de imágenes al hacer zoom presentaba problemas de memoria.</p>
                  <h3>{t("theCurrentVersion")}</h3>
                  <p>Al reconstruir este sitio web en 2023, Fabric no se llevaba bien con Next.js, así que me cambié a <Link href="https://konvajs.org/">Konva</Link>.</p>
                  <p>Gracias a <Link href="https://konvajs.org/docs/react/Intro.html" target="_blank" rel="noopener noreferrer">la integración de Konva con React</Link>, el problema de gestión de memoria desapareció. Cada tesela es un componente y los conjuntos de teselas se definen de forma declarativa; React se encarga del resto.</p>
                  <p>Para la reconstrucción del sitio web de 2026 me enfoqué en portar la funcionalidad existente y actualizar las dependencias.</p>
              </>
            }
            <h3>{t("futurePlans")}</h3>
            { locale === "en" ?
              <>
                  <p>Some planned features include:</p>
                  <ul>
                      <li>Dealing with further memory issues.</li>
                      <li>The aforementioned tile switcher, to select different tile styles.</li>
                      <li>Additional metadata per tile, including their date of creation, as well as an interface to explore the metadata on the map.</li>
                      <li>A slider to explore how the map tiles were created.</li>
                      <li>If there is demand for it, releasing this as a project of its own, so that it could potentially be used by other hobbyists like me.</li>
                  </ul>
              </>
            :
              <>
                  <p>Algunas funciones planeadas incluyen:</p>
                  <ul>
                      <li>Abordar más problemas de memoria.</li>
                      <li>El selector de teselas antes mencionado, para elegir diferentes estilos de tesela.</li>
                      <li>Metadatos adicionales por tesela, incluyendo su fecha de creación, así como una interfaz para explorar los metadatos en el mapa.</li>
                      <li>Un control deslizante para explorar cómo se crearon las teselas del mapa.</li>
                      <li>Si hay demanda, lanzar esto como un proyecto independiente, para que potencialmente pueda ser utilizado por otros aficionados como yo.</li>
                  </ul>
              </>
            }
        </section>
      </div>
    </>
  );
}