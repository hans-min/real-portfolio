<script>
  export let sectionName;
</script>

<section>
  <h2 class="is-center" id={sectionName}>{sectionName}</h2>
  <slot></slot>
</section>