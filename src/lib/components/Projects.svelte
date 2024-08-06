<script>
  import ProjectCard from "./ProjectCard.svelte";
  import squiddy from "$lib/images/squiddy.png";
  import crashedWorld from "$lib/images/crashedWorld.png";
  import myOty from "$lib/images/myoty.webp";
  import poule from "$lib/images/poule.png";
</script>

<div>
  <ProjectCard
    projectName="Squiddy"
    workplace="Akensys"
    description="Create a Bluetooth library in Swift to facilitate the development of iOS applications that use Bluetooth/BLE"
    imgSrc={squiddy}
    altText="Squiddy App"
    link="http://squiddy.fr/"
  />
  <ProjectCard
    projectName="Crashed World"
    workplace="CNAM ENJMIN"
    description="Basically 2D Minecraft. I was in charge of the procedural generation of the map."
    imgSrc={crashedWorld}
    altText="Crashed World Game"
    link="https://hans-min.itch.io/crashed-world"
  />
  <ProjectCard
    projectName="MyOty"
    workplace="Akensys"
    description="Developed MyOty, an mobile application used to detect (map view), read and 
    visualize data from Bluetooth sensors and equipments (Flutter). Also work with the Flutter 
    platform channel to integrate third-party Swift libraries into the app."
    imgSrc={myOty}
    altText="MyOty App"
    link="https://play.google.com/store/apps/details?id=net.akensys.myotyv2&hl=en&gl=US"
  />
  <ProjectCard
    projectName="Ca roule ma poule"
    workplace="INSA Lyon"
    description="We created a 1:5 model of a fully functional, movable smart chicken coop. The coop was equiped with a solar panel, 
    an automatic feeding sytem, a water dispenser, ventilation system and a mobile application for the farmers."
    imgSrc={poule}
    altText="movable chicken coop"

  />
</div>
