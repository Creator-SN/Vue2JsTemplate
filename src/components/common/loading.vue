<script>
/**
 * @description 中间加载过渡效果 [2021-7-24]
 * @name Loading
 */
export default {
    name: "Loading",
};
</script>

<template>
    <div class="loading">
        <img src="@/assets/logo.png" />
    </div>
</template>

<style lang="scss" scoped>
// 居中
.loading {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>