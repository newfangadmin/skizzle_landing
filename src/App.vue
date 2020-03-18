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
      <div class="line2">You need to install Skizzle's chrome extension before you can securely view them.</div>
      <div class="line3">Here are the steps to get started:</div>
      <ul class="steps">
        <li>Download the Skizzle extension from <a href="skizzle.zip" target="_blank">here</a>.</li>
        <li>Unzip the downloaded file. Open the chrome://extensions tab in your browser and drag the extracted folder into this page.</li>
        <li>Go back to you gmail and refresh the page.</li>
        <li>Click the Skizzle icon in the extensions area of your browser and follow through on the signup steps there.</li>
        <li> Once signed up, close the extension and you will see the attachments in your email.</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.sender = urlParams.get('sender');
    this.count = urlParams.get('count');
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
  font-size: 14px;
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
  font-size: 16px;
  margin: 20px;
}

.line2, .line3 {
  font-weight: 300;
}

.steps {
  margin-left: 10%;
  margin-right: 10%;
}

.steps li {
  text-align: left;
  padding: 12px;
  list-style: square;
}

@media only screen and (max-width: 768px) {
  .steps {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
