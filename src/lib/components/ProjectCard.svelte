<script lang="ts">
  export let projectName;
  export let link;
  export let workplace;
  export let imgSrc;
  export let altText;
  export let description;
</script>

<div class="row fadeIn">
  <div class="col">
    <a class="subTitle" href={link}>{projectName}</a>
    <p class="workplace">{workplace}</p>
    <p class="projectDescription">
      {description}
    </p>
  </div>
  <a class="col is-center" href={link}>
    <img class="thumbnail" src={imgSrc} alt={altText} />
  </a>
</div>

<style>
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
