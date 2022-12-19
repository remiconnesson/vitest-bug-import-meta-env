<script setup lang="ts">
import { makeApiURL } from '@/services/api'

const apiUrl = makeApiURL()

</script>

<template>
	<pre>{{ apiUrl }}</pre>
</template>
