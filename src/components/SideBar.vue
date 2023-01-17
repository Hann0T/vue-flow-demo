<script setup>
import { useNodeStore } from '../stores/nodes.js';

const nodeStore = useNodeStore();

const onDragStart = (event, nodeType) => {
    if (event.dataTransfer) {
        event.dataTransfer.setData('application/vueflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    }
};

const onEdgeTypeChange = (event) => {
    nodeStore.setCurrentEdgeType(event.target.value);
};
</script>

<template>
    <aside 
        class="h-full w-auto flex flex-col gap-4 items-center bg-gray-600 p-4 text-gray-200"
    >
        <div>
            <h4>Nodes:</h4>
        </div>
        <div 
            class="vue-flow__node-input shadow-md" 
            :draggable="true" 
            @dragstart="onDragStart($event, 'input')"
        >
            Input Node
        </div>
        <div 
            class="vue-flow__node-default shadow-md" 
            :draggable="true" 
            @dragstart="onDragStart($event, 'default')"
        >
            Default Node
        </div>
        <div 
            class="vue-flow__node-default shadow-md" 
            :draggable="true" 
            @dragstart="onDragStart($event, 'label')"
        >
            Label Node
        </div>
        <div 
            class="vue-flow__node-output shadow-md" 
            :draggable="true" 
            @dragstart="onDragStart($event, 'output')"
        >
            Output Node
        </div>
        <div>
            <h4>Edges:</h4>
        </div>
        <div class="w-full flex items-center pl-4 rounded border border-white">
            <input 
                checked
                id="bordered-radio-3"
                type="radio" 
                value="default" 
                @change="onEdgeTypeChange"
                name="bordered-radio" 
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            >
            <label for="bordered-radio-3" class="py-4 ml-2 w-full text-sm font-medium text-gray-200">
                Default
            </label>
        </div>
        <div class="w-full flex items-center pl-4 rounded border border-white">
            <input 
                id="bordered-radio-1" 
                type="radio" 
                value="step" 
                @change="onEdgeTypeChange"
                name="bordered-radio" 
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            >
            <label for="bordered-radio-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-200">
                Step
            </label>
        </div>
        <div class="w-full flex items-center pl-4 rounded border border-white">
            <input 
                id="bordered-radio-2" 
                type="radio" 
                value="smoothstep" 
                @change="onEdgeTypeChange"
                name="bordered-radio" 
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            >
            <label for="bordered-radio-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-200">
                Smoothstep
            </label>
        </div>
        <div class="w-full flex items-center pl-4 rounded border border-white">
            <input 
                id="bordered-radio-4"
                type="radio" 
                value="straight" 
                @change="onEdgeTypeChange"
                name="bordered-radio" 
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            >
            <label for="bordered-radio-4" class="py-4 ml-2 w-full text-sm font-medium text-gray-200">
                Straight
            </label>
        </div>
    </aside>
</template>
