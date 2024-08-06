<script>
  import ContactForm from "$lib/components/ContactForm.svelte";
  import Landing from "$lib/components/Landing.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Section from "$lib/components/Section.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import "$lib/locale/i18n";
  import { _ } from "svelte-i18n";
  export let form;
</script>

<Landing />
<Section sectionName={$_("sections.about")}>
  <p class="fadeIn">
    {$_("about")}
  </p>
</Section>
<Section sectionName={$_("sections.skills")}>
  <Skills />
</Section>
<Section sectionName={$_("sections.projects")}>
  <Projects />
</Section>
<Section sectionName={$_("sections.contact")}>
  <ContactForm />
  {#if form}
    <p>Form submitted successfully!</p>
  {/if}
</Section>
