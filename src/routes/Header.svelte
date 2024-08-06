<script lang="ts">
  import logo from "$lib/images/logo.svg";
  export let items = [
    { name: "About", url: "/#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];

  let activeItem = items[0].name; // default active item
  function setActiveItem(name: string) {
    activeItem = name;
  }
</script>

<header class="sticky">
  <nav class="nav">
    <div class="nav-center">
      <div class="tabs">
        {#each items as item}
          <a
            href={item.url}
            class={item.name === activeItem ? "active" : ""}
            on:click={() => setActiveItem(item.name)}
          >
            {item.name}
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

</style>