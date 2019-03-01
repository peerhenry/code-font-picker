<template>
  <div class="snippet-content">
    <pre class="code-block">
      <code class="html">
        {{
          codeExample
        }}
      </code>
    </pre>
  </div>
</template>

<script>
import txt from "!raw-loader!@/assets/dummy.txt";
// import txt from '!raw-loader!./Main.vue'

export default {
  data() {
    return {
      codeExample: txt
    };
  }
};
</script>

<style lang="scss">
.snippet-content {
  padding: 3em;
  background: #333;
  color: white;
  vertical-align: baseline;
  text-align: left;
}

.code-block {
  white-space: pre;
  word-wrap: normal;
  display: block;
}
</style>
