<template>
  <q-page class="flex flex-center">
    <goods />
  </q-page>
</template>

<script>
import Goods from 'src/components/Goods.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Goods },
  name: 'PageIndex'
})
</script>
