<template>
    <h1 class="text-3xl font-bold underline">
         Home
    </h1>
    <div>
        pinia: {{ Test.current }} -{{ Test.name }}
    </div>
</template>

<script setup lang="ts">
import { useTestStore } from "@/store/mod";

const Test = useTestStore();
</script>

<style>
</style>