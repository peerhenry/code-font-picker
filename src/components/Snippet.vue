<template>
  <div class="snippet-content">
    <pre class="code-block">
      <code class="html" :style="fontStyle">
        {{
          codeExample
        }}
      </code>
    </pre>
  </div>
</template>

<script>
import txt from '!raw-loader!@/assets/dummy.txt'
// import txt from '!raw-loader!./Main.vue'

export default {
  props: {
    font: {
      type: String,
      default: 'Monospace',
      required: true
    }
  },
  data() {
    return {
      codeExample: txt
    }
  },
  computed: {
    fontStyle() {
      return {
        'font-family': this.font
      }
    }
  }
}
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
