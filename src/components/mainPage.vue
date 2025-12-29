<template>
  <header-tags :tags="tags"/>

  <cardTemplate :data="card" v-show="showCard(card)" v-for="card in cards"/>
  <br>
  <router-link :to="'/otherpage/globaladvice'" style="text-decoration: none;">没有你想要的功能?点这里提交建议</router-link>
</template>

<script setup>

import {ref} from "vue";
import HeaderTags from "@/components/headerTags.vue";
import CardTemplate from "@/components/cardTemplate.vue";
import axios from "axios";

const showCard = (card) => {
    let isNotAllTag = false
    let isShow = false
    tags.value.forEach((value) => {
        isNotAllTag = isNotAllTag || value[1]
    })
    if (!isNotAllTag) {
        return true
    }

    tags.value.forEach((value) => {
        if (card.tag.indexOf(value[0]) !== -1) {
            if (!value[1]) {
                return
            }
            isShow = true
        }
    })
    return isShow
}
const getTags = () => {
    let tagSet = new Set()
    cards.forEach(card => {
        card.tag.split(" ").forEach(value => {
            tagSet.add(value)
        })
    })
    tagSet.forEach(value => {
        tags.value.push([value, false])
    })
}
const tags = ref([])
const cards = [
    {
        "name": "今天吃什么",
        "desc": "不知道吃什么点这里就对了",
        "icon": "/utensils-solid.svg",
        "tag": "全部 特色工具",
        "url": "/tools/whateat",
    },
    {
        "name": "食物热量查询",
        "desc": "查查食物的卡路里",
        "icon": "/fire.svg",
        "tag": "全部 特色工具",
        "url": "/tools/foodCalorieQuery",
    },
    {
        "name": "称谓计算器",
        "desc": "查查就知道亲戚怎么称呼",
        "icon": "users-solid.svg",
        "tag": "全部 特色工具",
        "url": "/tools/relationship",
    },
    {
        "name": "电子签名生成",
        "desc": "快速制作电子签名",
        "icon": "paintbrush-solid.svg",
        "tag": "全部 特色工具",
        "url": "/tools/signs",
    },
    {
        "name": "图片文字提取",
        "desc": "使用ocr识别图片",
        "icon": "image-regular.svg",
        "tag": "全部 特色工具",
        "url": "/tools/ocrs",
    },
]

getTags()
</script>

<style scoped>

</style>