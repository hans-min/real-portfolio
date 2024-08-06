<script>
  import { locale, locales } from "svelte-i18n";
</script>

<label for="language">
  <select bind:value={$locale} id="language" name="language" aria-label="language">
    {#each $locales as locale}
      <option value={locale}>{locale}</option>
    {/each}
  </select>
</label>

<style>
  select {
    min-width: 50px;
  }
</style>
