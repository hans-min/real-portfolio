<script>
  import crashedWorld from "$lib/images/crashedWorld.png";
  import myOty from "$lib/images/myoty.webp";
  import poule from "$lib/images/poule.png";
  import squiddy from "$lib/images/squiddy.png";
  import ProjectCard from "./ProjectCard.svelte";
</script>

<div>
  <ProjectCard
    projectName="Squiddy"
    workplace="Akensys"
    descLocaleName="squiddy"
    imgSrc={squiddy}
    altText="Squiddy App"
    link="http://squiddy.fr/"
    toolsUsed="Swift"
  />
  <ProjectCard
    projectName="Crashed World"
    workplace="CNAM ENJMIN"
    descLocaleName="crashedWorld"
    imgSrc={crashedWorld}
    altText="Crashed World Game"
    link="https://hans-min.itch.io/crashed-world"
    toolsUsed="Godot"
  />
  <ProjectCard
    projectName="MyOty"
    workplace="Akensys"
    descLocaleName="myoty"
    imgSrc={myOty}
    altText="MyOty App"
    link="https://play.google.com/store/apps/details?id=net.akensys.myotyv2&hl=en&gl=US"
    toolsUsed="Flutter"
  />
  <ProjectCard
    projectName="Ca roule ma poule"
    workplace="INSA Lyon"
    descLocaleName="poule"
    imgSrc={poule}
    altText="movable chicken coop"
    toolsUsed="Solid Edge"
  />
</div>
