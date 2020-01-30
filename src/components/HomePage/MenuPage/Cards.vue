<template>
    <div class="card">
        <p>
           <slot></slot>
        <p/>
    </div>
</template>

<script>
export default {
    name: 'Cards',
    props: 'title'
}
</script>

<style  type="text/scss" lang="scss" scoped>
.card {
    display: block;
}
p {
    pointer-events: none;
}

</style>