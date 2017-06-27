<template>
  <div class='mock'>
    <p>{{message}}</p>
  </div>
</template>

<script type='text/ecmascript-6'>
  import json from '../common/js/data.json';
  export default {
    name: 'mock',
    data () {
      return {message: json};
    }
  };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='less'>
  p {
    font-size: 2px;
  }
</style>
