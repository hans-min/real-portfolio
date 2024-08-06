<script>
  import { base } from "$app/paths";
</script>

<footer>
  <p>Social<span class="fade-out">ly arkward</span></p>
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
  <a href="{base}/privacyPolicy">Privacy Policy</a>
  <a href="{base}/legalNotice">Legal Notice</a>
  <p> © 2024 Nguyen Minh Hanh. All rights reserved.</p>
</footer>

<style>
.fade-out {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.02));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }
</style>
