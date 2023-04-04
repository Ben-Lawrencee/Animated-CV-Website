<template>
    <sidebar/>
    <main>
        <header>
            <div class="header__title">
                Ben Lawrence
            </div>
            <ul class="header__details">
                <li>
                    Phone number: 0223802487
                </li>
            </ul>
        </header>
    </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
    name: "Cover",
    components: { Sidebar },
}
</script>

<style lang="scss">
@import '@/GlobalVariables.scss';

main {
    color: white;
}

header {
    width: clamp(250px, 30vw, 500px);
    aspect-ratio: 1 / 1.5;

    * {
        box-shadow: $card-box-shadow;
    }
}

.header__title {

}

</style>