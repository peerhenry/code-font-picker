<template>
  <div class="container">
    <div class="row">
      <select>
        <option value>Monospace</option>
        <option value>Consolas</option>
        <option value>Firebase</option>
      </select>
    </div>
    <Snippet class="snippet" :font="font"/>
  </div>
</template>

<script>
import Snippet from "@/components/Snippet.vue";

export default {
  components: { Snippet },
  data() {
    return {
      codeExample: txt
    };
  }
};
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
}

.row {
  grid-column-start: 1;
  grid-column-end: 3;
}

.snippet {
  grid-column-start: 2;
  grid-column-end: 3;
}
</style>
