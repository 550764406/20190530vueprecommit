<!-- @format -->

<template>
  <div name="test02div">
    <span class="test02span">
      {{ msg }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'test02',
  data() {
    return {
      msg: 'test02'
    };
  },
  methods: {
    test02Fn() {
      console.log('');
    },
    test02fn1() {
      () => {
        console.log('aaa');
      };
    },

    test02fn2() {
      (aa) => {
        console.log('aaa11');
      };
    }
  }
};
</script>

<style scoped></style>
