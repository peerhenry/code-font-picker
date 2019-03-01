<template>
  <div class="container">
    <FontPickSnippet class="leftside" />
    <FontPickSnippet class="rightside" />
  </div>
</template>

<script>
import FontPickSnippet from '@/components/FontPickSnippet.vue'

export default {
  components: { FontPickSnippet }
}
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 10vw 38vw 4vw 38vw 10vw;
}

.leftside {
  grid-column-start: 2;
  grid-column-end: 3;
}

.rightside {
  grid-column-start: 4;
  grid-column-end: 5;
}
</style>
