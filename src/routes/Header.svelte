<script lang="ts">
  export let items = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  let activeItem = items[0]; // default active item
  function setActiveItem(name: string) {
    activeItem = name;
  }
</script>

<header class="sticky glass">
  <nav class="nav">
    <div class="nav-center">
      <div class="tabs">
        {#each items as item}
          <a
            href="#{item}"
            class={item === activeItem ? "active" : ""}
            on:click={() => setActiveItem(item)}
          >
            {item}
          </a>
        {/each}
      </div>
    </div>
  </nav>
</header>

<style>
  header.sticky {
    position: -webkit-sticky;
    position: sticky;
    z-index: 1101;
    top: 0;
  }

  header.glass {
    backdrop-filter: blur(20px);
  }
</style>