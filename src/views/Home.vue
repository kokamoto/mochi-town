<template>
  <div class="home">
    <img src="../assets/logo.png">
    <hello-world msg="Welcome to Mochi-Town"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    'hello-world': HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
