<template>
    <div>
        <h1>I am the parent view</h1>
        <br />

        <Icon icon="mdi-light:home" />

        <nav>
            <ul>
                <li>
                    <NuxtLink to="/nested/child">Child</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/nested/child2">Child 2</NuxtLink>
                </li>
            </ul>
        </nav>
        <NuxtChild />
    </div>
</template>

<script>
// test import iconify
import { Icon } from "@iconify/vue2";

export default {
    // name: 'IndexPage'
};
</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}
li {
    margin: 0 0.5rem;
    padding: 0.25rem;
    font-size: 1rem;
}
</style>
