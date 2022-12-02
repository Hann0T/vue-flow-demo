<script setup>
import { Handle, Position } from '@vue-flow/core';
import { onMounted } from 'vue';
onMounted(() => {
    console.log('asdf', props.data.label);
});

const props = defineProps({
    data: {
        type: Object,
    },
});
const emit = defineEmits(['change']);

const onChange = (ev) => {
    emit('change', ev.target.value);
};
</script>

<template>
  <div
    class="flex border border-black p-2.5 rounded-[3px] bg-white justify-center items-center w-[150px]"
  >
    <input type="text" :value="data?.label" class="text-center text-sm w-full" @input="onChange">

    <Handle id="a" type="source" :position="Position.Left" class="bg-black" />
    <Handle id="b" type="source" :position="Position.Right" class="bg-black" />
  </div>
</template>
