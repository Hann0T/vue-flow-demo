<script setup>
import SideBar from './components/SideBar.vue';
import TopBar from './components/TopBar.vue';
import EditableLabelNode from './components/EditableLabelNode.vue';
import { VueFlow, useVueFlow } from '@vue-flow/core';
import { MarkerType, Position } from '@vue-flow/core';
import { Background } from '@vue-flow/additional-components'
import { ref, nextTick, watch } from 'vue';

let id = 0;
const getId = () => `dndnode_${id++}`;

const { findNode, onConnect, nodes, edges, addEdges, addNodes, viewport, project, vueFlowRef, toObject } = useVueFlow({
    nodes: [
        { id: '1', type: 'input', label: 'Node 1', position: { x: 5, y: 250 }, sourcePosition: Position.Right },
        { id: '2', label: 'Node 2', position: { x: 201, y: 100 }, sourcePosition: Position.Right, targetPosition: Position.Left },
        { id: '3', label: 'Node 3', position: { x: 201, y: 400 }, sourcePosition: Position.Right, targetPosition: Position.Left },
        { id: '4', type: 'output', label: 'Node 4', position: { x: 400, y: 200 }, targetPosition: Position.Left },
    ],
    edges: [
        { id: 'e1-3', source: '1', target: '3', type: 'step' },
        { id: 'e1-2', source: '1', target: '2', type: 'step' },
    ]
})

const onDragOver = (event) => {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move';
  }
}

const onDrop = (event) => {
    console.log('asdf', toObject());
    const type = event.dataTransfer?.getData('application/vueflow');
    const { left, top } = vueFlowRef.value.getBoundingClientRect();

    const position = project({
        x: event.clientX - left,
        y: event.clientY - top,
    });

    const newNode = {
        id: getId(),
        type,
        position,
        sourcePosition: Position.Right, 
        targetPosition: Position.Left,
        label: `${type} node`,
    };

    addNodes([newNode]);

    // align node position after drop, so it's centered to the mouse
    nextTick(() => {
        const node = findNode(newNode.id)
        const stop = watch(
          () => node.dimensions,
          (dimensions) => {
            if (dimensions.width > 0 && dimensions.height > 0) {
              node.position = { x: node.position.x - node.dimensions.width / 2, y: node.position.y - node.dimensions.height / 2 }
              stop()
            }
          },
          { deep: true, flush: 'post' },
        )
    })
};

const onEditableLabelNodeChanges = (newLabel, node) => {
    findNode(node.id).label = newLabel;
};
</script>

<template>
    <section class="relative bg-white h-screen">
        <TopBar class="sticky z-20 top-0 left-0" />

        <SideBar class="fixed z-20 left-0" /> 

        <div class="w-full h-full" @drop.prevent="onDrop">
            <VueFlow 
                auto-connect 
                @dragover.prevent="onDragOver"
            >
                <template #node-label="props">
                    <EditableLabelNode 
                        @change="(ev) => onEditableLabelNodeChanges(ev, props)" 
                        :data="props" 
                    />
                </template>

                <Background pattern-color="#aaa" gap="8" />
            </VueFlow>
        </div>
    </section>
</template>
