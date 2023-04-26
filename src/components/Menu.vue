<template>
    <div class="fixed bg-white w-screen flex justify-center items-center rounded-t-3xl  border border-t bottom-0 h-20">
        <div class="grid grid-cols-5 w-full items-center justify-center">
            <div class="flex justify-center">
                <OhVueIcon name="fa-map-marked-alt" scale="1.5" class="text-gray-500" />
            </div>
            <div class="flex justify-center">
                <OhVueIcon name="md-history-round" scale="1.5" class="text-gray-500" />
            </div>
            <div class="flex justify-center">
                <OhVueIcon name="fa-home" scale="2.5" class="text-[#7F7FD5]" />
            </div>
            <div class="flex justify-center">
                <OhVueIcon name="fa-user-circle" scale="1.5" class="text-gray-500" />
            </div>
            <div class="flex justify-center">
                <OhVueIcon name="hi-logout" scale="1.5" class="text-gray-500" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import OhVueIcon from "../plugins/oh-vue-icon"
</script>

<style lang="scss"></style>