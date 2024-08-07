<script lang="ts">
  export let skill;
  export let imgName;
  export let size = "50";
</script>

<div class="card">
  <!-- <h4>{skill}</h4> -->
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
    margin-right: 20px;
    box-shadow: none;
    background-color: transparent;
  }
</style>
