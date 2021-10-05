<template>
<div class="editor-wrapper">
  <mavon-editor
      style="height: 100%;width: 100%"
      v-model="value"/>
</div>
</template>

<script>
export default {
  name: "Editor",
  data(){
    return { value: '' }
  }
}
</script>

<style scoped>
.editor-wrapper{
  width: 100%;
  height: 90vh;
}
</style>