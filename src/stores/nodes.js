import { defineStore } from 'pinia';
import { Position } from '@vue-flow/core';
import { ref } from 'vue';

export const useNodeStore = defineStore('nodeStore', () => {
    const nodes = ref({
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
    });

    const currentEdgeType = ref('default');

    const setNodes = (n) => {
        nodes.value = { ...n };
    };

    const setCurrentEdgeType = (edgeType) => {
        currentEdgeType.value = edgeType;
    };

    return {
        nodes,
        setNodes,
        currentEdgeType,
        setCurrentEdgeType
    }
});
