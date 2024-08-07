<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "chota";
  import "./styles.css";
  import { onMount } from "svelte";
  import "$lib/locale/i18n";

  onMount(() => {
    document.body.style.opacity = "1";
    // https://www.nucleiotechnologies.com/fade-in-animation-when-scroll-in-your-website/
    function reveal() {
      var reveals = document.querySelectorAll(".fadeIn");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 128;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("onScreen");
        }
      }
    }

    window.addEventListener("scroll", reveal);
  });

</script>

<div>
  <Header />
  <main class="container">
    <div class="is-center is-horizontal-align">
      <slot />
    </div>
  </main>
  <Footer />
</div>

<style>
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
</style>
