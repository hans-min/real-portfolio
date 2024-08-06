<script>
  export let sectionName;
</script>

<section id={sectionName}>
  <h2 class="is-center">{sectionName}</h2>
  <slot></slot>
</section>