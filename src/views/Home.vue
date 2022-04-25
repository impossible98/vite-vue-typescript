<template>
  <div>
      Home
  </div>

  <div>
      pinia: {{Test.current}} -{{Test.name}}
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from "@/store/mod";

const Test = useTestStore();
</script>

<style></style>