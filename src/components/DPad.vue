<template>
  <div class="d-pad">
    <BasicButton class="button-up button" type="DPAD_UP">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-caret-up-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
        />
      </svg>
    </BasicButton>
    <BasicButton class="button-right button" type="DPAD_RIGHT">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-caret-right-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
        />
      </svg>
    </BasicButton>
    <BasicButton class="button-down button" type="DPAD_DOWN">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-caret-down-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
        />
      </svg>
    </BasicButton>
    <BasicButton class="button-left button" type="DPAD_LEFT">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-caret-left-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
        />
      </svg>
    </BasicButton>
  </div>
</template>

<script>
import BasicButton from "./BasicButton.vue";
export default {
  name: 'DPad',
  props: {},
  data() {
    return {

    }
  },
  components: { BasicButton },
  watch: {},
  mounted() { },
  methods: {}
}
</script>

<style scoped>
.d-pad {
  width: 150px;
  height: 150px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-up {
  grid-column: 2;
  grid-row: 1;
}
.button-right {
  grid-column: 3;
  grid-row: 2;
}
.button-down {
  grid-column: 2;
  grid-row: 3;
}
.button-left {
  grid-column: 1;
  grid-row: 2;
}
</style>
