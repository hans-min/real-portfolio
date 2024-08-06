<script lang="ts">
  import { _ } from 'svelte-i18n';
  
  import LocaleSelector from "$lib/components/LocaleSelector.svelte";

  export let items: string[] = ["about", "skills", "projects", "contact"];

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
            href="/#{$_(`sections.${item}`)}"
            class={item === activeItem ? "active" : ""}
            on:click={() => setActiveItem(item)}
          >
            {$_(`sections.${item}`)}
          </a>
        {/each}
      </div>
    </div>
    <div class="nav-right">
        <LocaleSelector/>
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
