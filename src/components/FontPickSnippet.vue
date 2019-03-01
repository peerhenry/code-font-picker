<template>
  <div>
    <div class="font-selector">
      <v-select
        v-model="selected"
        :options="['monospace', 'consolas', 'firacode', 'yellowtail', 'monoid']"
      ></v-select>
    </div>
    <Snippet class="snippet" :font="selected" />
  </div>
</template>

<script>
import Snippet from '@/components/Snippet.vue'

export default {
  components: { Snippet },
  data() {
    return {
      selected: 'Monospace'
    }
  }
}
</script>

<style lang="scss">
.font-selector {
  margin-bottom: 3em;
}
</style>
