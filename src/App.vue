<template>
  <div id="app">
    <div class="header">
      <div class="logoContainer">
        <img class="logoSymbol" src="@/assets/skizzle.svg">
        <div class="logoText">skizzle</div>
      </div>
    </div>
    <div class="content">
      <div class="line1">{{ sender }} has shared ({{ count }}) encrypted attachments with you via Skizzle.</div>
      <div class="line2">Files shared via Skizzle are end-to-end encrypted and so, you need to install Skizzle's chrome extension before you can securely view them.</div>
      <br/>
      <div class="line3">Here are the steps to get started:</div>
      <ol class="steps">
        <li>Install the extension from <a class="extLink" target="_blank" href="https://chrome.google.com/webstore/detail/skizzle/mjkcepplkockpofgjhbnbjajfljleegm/">here</a>.</li>
        <li>Click the Skizzle icon in the extensions area of your browser and follow through on the signup steps there.</li>
        <li>Signup using the same email you received the encrypted attachments on.</li>
        <li>Refresh Gmail. You will now see the attachment(s) in your email.</li>
      </ol>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      sender: '',
      count: 0
    };
  },
  methods: {
    installExt() {
      // eslint-disable-next-line no-undef
      chrome.webstore.install("https://chrome.google.com/webstore/detail/mjkcepplkockpofgjhbnbjajfljleegm");
    }
  },
  mounted() {
    this.sender = this.$route.query.sender;
    this.count = this.$route.query.count;
    console.log('docref2', document.referrer);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Code:300,500,700&display=swap');

body {
  margin-left: 12.5%;
  margin-right: 12.5%;
  margin-top: 0;
  font-family: 'Fira Code', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
}

#app {
  text-align: center;
}

.header {
  width: 100%;
  border-bottom: 1px dashed #aaaaaa;
}

.logoContainer {
  height: 100%;
  text-align: center;
  padding: 12px;
}

.logoSymbol {
  height: 36px;
}

.logoText {
  font-weight: 500;
  font-size: 20px;
}

.line1 {
  font-weight: 500;
  margin: 20px;
}

.line2, .line3 {
  margin-left: 10%;
  margin-right: 10%;
  font-weight: 300;
}

.steps {
  margin-left: 20%;
  margin-right: 20%;
}

.steps li {
  text-align: left;
  padding: 12px;
}

.extLink {
  color: black;
  font-weight: 700;
}

@media only screen and (max-width: 768px) {
  .steps {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
