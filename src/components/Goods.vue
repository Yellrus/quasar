<template>
  <div class="q-pa-md" style="max-width: 700px">
     <q-circular-progress
      v-if="loading"
      indeterminate
      size="90px"
      :thickness="0.2"
      color="lime"
      center-color="grey-8"
      track-color="transparent"
      class="q-ma-md"
    />

    <div class="q-pa-md">
      <q-dialog v-model="showDialog">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ detail?.code }}</div>
          </q-card-section>
          <q-card-section>
            {{ detail }}
          </q-card-section>
          <q-card-section class="row items-center q-gutter-sm">
            <q-btn v-close-popup label="Close" color="primary" />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>

    <div class="row q-col-gutter-sm" style="cursor: pointer">
      <div class="col-6 col-sm-3 col-md-3" v-for="item in goods" :key="item.code">
          <q-card
            @click="viewDetail(item.code)"
            class="text-white my-card"
            style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section>
            <div class="text-subtitle2">{{ item.name }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </div>
</template>

<script>
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {
  setup () {
    const store = useStore();
    const detail = ref({});
    const showDialog = ref(false);
    const fetchData = () => store.dispatch('goods/fetchGoods');
    const goods = computed(() => store.getters['goods/getGoods']);
    const loading = computed(() => store.getters['goods/getLoading']);
    const viewDetail = (code) => {
      detail.value = {};
      const currentData = goods.value.find(el => el.code === code);
      if (!currentData) return;
      showDialog.value = true;
      detail.value = currentData;
    }
    onMounted(() => {
      fetchData();
    })

    return { goods, viewDetail, detail, showDialog, loading }
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
}
</style>
