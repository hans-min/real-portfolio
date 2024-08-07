  <script>
  import { _ } from 'svelte-i18n';
  import SkillCard from './SkillCard.svelte';

  </script>
  <div class="fadeIn">
    <h3>{$_('languages')}</h3>
    <ul class="row">
      <SkillCard skill="Swift" imgName="swift-15"/>
      <SkillCard skill="Python" imgName="python-5"/>

      <SkillCard skill="Dart" imgName="dart"/>
      <SkillCard skill="Javascript" imgName="logo-javascript"/>

    </ul>
    <h3>{$_('framework')}</h3>
    <ul class="row">
      <SkillCard skill="Flutter" imgName="flutter-logo"/>
      <SkillCard skill="Godot" imgName="godot-1" size=80/>
      <SkillCard skill="Robot Framework" imgName="robot-framework" size=70/>
      <SkillCard skill="Blender" imgName="blender-2" size=60/>
      <SkillCard skill="Svelte" imgName="svelte-1" size=60/>
    </ul>
  </div>

<style>

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  h3 {
    margin: 0 10px;
  }
</style>
