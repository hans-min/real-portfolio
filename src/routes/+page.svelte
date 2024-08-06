<script>
  import ContactForm from "$lib/components/ContactForm.svelte";
  import Landing from "$lib/components/Landing.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Section from "$lib/components/Section.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import '$lib/locale/i18n';
  import { _ } from 'svelte-i18n';
</script>

<Landing />
<Section sectionName="About">
  <p class="fadeIn">
    {$_('about')}
  </p>
</Section>
<Section sectionName="Skills">
  <Skills />
</Section>
<Section sectionName="Projects">
  <Projects />
</Section>
<Section sectionName="Contact">
  <ContactForm />
</Section>
