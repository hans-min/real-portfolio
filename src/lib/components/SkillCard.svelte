<script lang="ts">
  export let skill;
  export let imgName;
  export let size = "50";
</script>

<div class="card">
  <img
    src="https://cdn.worldvectorlogo.com/logos/{imgName}.svg"
    alt="{skill} Logo"
    width={size}
    height={size}
  />
  
</div>

<style>
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: none;
    background-color: transparent;
  }
</style>
