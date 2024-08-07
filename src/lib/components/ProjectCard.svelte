<script lang="ts">
  export let projectName;
  export let link: string|null = null;
  export let workplace;
  export let imgSrc;
  export let altText;
  export let descLocaleName;
  export let toolsUsed;
  import { _ } from 'svelte-i18n';
</script>

<div class="row fadeIn addMargin">
  <div class="col">
    <a class="subTitle" href={link} target="_blank">{projectName}</a>
    <p class="workplace">{workplace}</p>
    <p class="projectDescription">
      {$_(`projectsDescription.${descLocaleName}`)}
    </p>
    <div class="button">{toolsUsed}</div>
  </div>
  <a class="col is-center" href={link} target="_blank">
    <img class="thumbnail" src={imgSrc} alt={altText} />
  </a>
</div>

<style>
  .addMargin {
    margin-bottom: 4em;
  }
  .workplace {
    font-size: 0.9em;
  }

  .subTitle {
    font-size: 1.3em;
    font-weight: bold;
  }

  .thumbnail {
    width: 15em;
    border-radius: 0.5em;
  }

  .button {
    background-color: #ff906b;
    border-radius: 1em;
    padding: auto 0.5em;
    margin: 0;
    display: inline-block;
  }

  @media (max-width: 600px) {
    .thumbnail {
      width: 100%;
    }
  }
</style>
