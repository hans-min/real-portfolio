<script lang="ts">
  export let projectName;
  export let link: string|null = null;
  export let workplace;
  export let imgSrc;
  export let altText;
  export let descLocaleName;
  import { _ } from 'svelte-i18n';
</script>

<div class="row fadeIn addMargin">
  <div class="col">
    <a class="subTitle" href={link} target="_blank">{projectName}</a>
    <p class="workplace">{workplace}</p>
    <p class="projectDescription">
      {$_(`projectsDescription.${descLocaleName}`)}
    </p>
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

  @media (max-width: 600px) {
    .thumbnail {
      width: 100%;
    }
  }
</style>
