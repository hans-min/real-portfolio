<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<div class="hero is-full-screen">
  <div class="frontSplash">
    <h3>{$_('landing.hi')}</h3>
    <h1 class="nameTitle">Minh Hanh</h1>
    <h3>{$_('landing.jobTitle')}</h3>
    <div>
      <a href="https://www.linkedin.com/in/hanjismin/">
        <img
          src="https://icongr.am/devicon/linkedin-original.svg?size=24"
          alt="linkedIn"
        />
      </a>
      &nbsp;
      <a href="https://github.com/hans-min">
        <img src="https://icongr.am/devicon/github-original.svg?size=24" alt="github" />
      </a>
    </div>
  </div>
</div>

<style>
  .hero {
    display: flex;
    flex-direction: column;
  }
  .frontSplash {
    padding: 4em;
    margin: auto;
  }
  .nameTitle {
    padding: 0;
    margin: 0;
    font-size: 4em;
  }

  h2 {
    margin: 0;
  }
</style>
