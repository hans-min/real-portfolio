<form method="POST" action="/contact" enctype="multipart/form-data">
  <div class="row">
    <label for="name" class="col">
      <span>Name</span>
      <input
        type="text"
        id="name"
        name="name"
        aria-label="name"
        placeholder="Name"
      />
    </label>

    <label for="email" class="col">
      <span>Email</span>
      <input
        type="email"
        id="email"
        name="email"
        aria-label="email"
        placeholder="Email"
        required
      />
    </label>

    <!-- honeypot, the value should be empty -->
    <input type="text" name="subject" id="subject" class="is-hidden" value="speak" />
    <label for="reason" class="col">
      <span>Reason</span>
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

  <button type="submit">Submit</button>
</form>

<style>
  textarea {
    min-height: 100px;
    min-width: 200px;
    width: 100%;
    margin-bottom: 20px;
  }
</style>
