<template>
  <div class="abxy">
    <BasicButton class="button-a" color="#11d100" type="A">A</BasicButton>
    <BasicButton class="button-b" color="#eb4034" type="B">B</BasicButton>
    <BasicButton class="button-x" color="#00aeff" type="X">X</BasicButton>
    <BasicButton class="button-y" color="#fae502" type="Y">Y</BasicButton>
  </div>
</template>

<script>
import BasicButton from "./BasicButton.vue";
export default {
  components: { BasicButton }
}
</script>

<style scoped>
.abxy {
  width: 150px;
  height: 150px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;

}
.button-a{
  grid-column: 2;
  grid-row: 3;
}
.button-b{
  grid-column: 3;
  grid-row: 2;
}
.button-x{
  grid-column: 1;
  grid-row: 2;
}
.button-y{
  grid-column: 2;
  grid-row: 1;
}
</style>