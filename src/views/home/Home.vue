<template>
  <div class="wrapper">
    <Static-part />
    <Nearby />
  </div>
  <Docker :currentIndex="0"/>
</template>

<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from '../../components/Docker'
export default {
  name: 'Home',
  components: {
    StaticPart: StaticPart,
    Nearby: Nearby,
    Docker: Docker
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.wrapper{
  overflow-y: auto;
  color: $content-fontcolor;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  //background-color: green;
  padding:0 .18rem;
  padding-bottom: .4rem;
}
</style>
