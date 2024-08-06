<script>
  import ContactForm from "$lib/components/ContactForm.svelte";
  import Landing from "$lib/components/Landing.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Section from "$lib/components/Section.svelte";
  import Skills from "$lib/components/Skills.svelte";
</script>

<Landing />
<Section sectionName="About">
  <p class="fadeIn">
    Hi, I'm Minh Hanh and I love learning and trying new things. I'm currently working as a test automation
    engineer at EPEX SPOT. I live in Paris, and I was born in Vietnam. I moved to Lyon,
    France in 2019 to study at the engineering school INSA Lyon. In 2021, I reoriented to
    CNAM ENJMIN to study game development and joined Akensys as an apprentice mobile
    developer for 2 years. Then I did my Master at CAWEB, University of Strasbourg and
    have been working at EPEX SPOT since.
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
