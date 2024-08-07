<script>
  import { _ } from "svelte-i18n";
</script>

<form method="post" action="https://api.staticforms.xyz/submit" target="_blank">
  <input type="hidden" name="accessKey" value="ae05d516-c6c3-44fa-9b1e-634e11974611">
  <div class="row">
    <label for="name" class="col">
      <span>{$_("contact.name")}</span>
      <input type="text" id="name" name="name" aria-label="name" placeholder="Name" />
    </label>

    <label for="email" class="col">
      <span>{$_("contact.email")}</span>
      <input
        type="email"
        id="email"
        name="email"
        aria-label="email"
        placeholder="Email"
        required
      />
    </label>

    <!-- If we receive data in this field submission will be ignored -->
    <input type="text" name="honeypot" style="display: none;">

    <label for="reason" class="col">
      <span>{$_("contact.reason")}</span>
      <select id="reason" name="reason" aria-label="reason">
        <option disabled selected value="">Contact reason</option>
        <option value="hi">Say hi!</option>
        <option value="collaboration">Collaboration request</option>
        <option value="speak">Speaking opportunity</option>
      </select>
    </label>
  </div>

  <label for="message">
    <span>Message</span>
    <textarea
      id="message"
      name="message"
      aria-label="message"
      placeholder="Hey! I'd love to talk about..."
      required
    />
  </label>

  <button type="submit">{$_("contact.send")}</button>
  </form>

<style>
  textarea {
    min-height: 100px;
    min-width: 200px;
    width: 100%;
    margin-bottom: 20px;
  }
</style>
