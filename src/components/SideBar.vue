<script setup>
const onDragStart = (event, nodeType) => {
    if (event.dataTransfer) {
        event.dataTransfer.setData('application/vueflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    }
}
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
    </aside>
</template>
