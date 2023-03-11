<template>
  <div id="app">
    <AallaamRichtext :withImage="true"/>
  </div>
</template>

<script>
import AallaamRichtext from './components/AallaamRichtext.vue'

export default {
  name: 'App',
  components: {
    AallaamRichtext
  },
  data() {
    return {
      imageUrl: ''
    }
  }
}
</script>
