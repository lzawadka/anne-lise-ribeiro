<template>
        <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='carte'><slot></slot></div>
</template>

<script>

export default {
  name: 'Carte'
}
</script>

<style type="text/scss" lang="scss" scoped>

.carte {
    height: 47vh;
    width: 18vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

slot {
    height: 45vh;
}

</style>
