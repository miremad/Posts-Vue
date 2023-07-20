<template>
  <div class="row header">
    <div class="col-4">
      <SearchInput @onChange="search" />
    </div>
    <div class="col-8 d-flex justify-content-end">
      <Button
        :props="{
          fullWidth: false,
          onClick: addPost,
          text: 'Add post',
          variant: 'contained',
          hasStartIcon: true
        }"
      />
    </div>
  </div>
  <div class="row scroll-posts" @scroll="scroll">
    <div class="col-3 d-flex px-0" v-for="post in posts">
      <PostCart :post="post" :searchTerm="searchTermValue" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, type Component, markRaw } from 'vue'
import { PostCart } from '@/components/posts'
import type { PostResponseType } from '@/server/types'
import { IconHeart, IconSearch } from '@/components/icons'
import { Button } from '@/components/button'
import { SearchInput } from '@/components/inputs'
import { apiClient } from '@/server/axios/axios'

export default defineComponent({
  name: 'Posts',
  methods: {
    scroll(payload: UIEvent) {
      if (
        payload.currentTarget.clientHeight + payload.currentTarget.scrollTop >
        payload.currentTarget.scrollHeight - 100
      ) {
        if (this.isFetching === false) this.isFetching = true
        this.pageIndex++
        window.setTimeout(() => {
          this.isFetching = false
        }, 1000)
      }
    },
    addPost() {
      this.$router.push('add-post')
    },
    async search(searchTerm: string) {
      this.searchTermValue = searchTerm
      this.data = await apiClient
        .get<PostResponseType[]>(
          `posts?_expand=user&${searchTerm.length > 0 ? 'q=' + searchTerm : ''}`
        )
        .then((res) => {
          return res.data
        })
    }
  },
  data() {
    return {
      startIcon: IconHeart,

      data: [] as PostResponseType[],
      searchTermValue: '',
      pageIndex: 1,
      isFetching: false
    }
  },
  components: {
    PostCart,
    IconHeart,
    Button,
    SearchInput
  },
  async mounted() {
    this.search('')
  },
  computed: {
    posts() {
      return this.data.filter((item, index) => index < this.pageIndex * 20)
    },
    icon(): Component {
      return markRaw<Component>(IconHeart)
    }
  }
})
</script>
<style>
.header {
  height: 50px;
}
.scroll-posts {
  height: 95%;
  overflow-y: scroll;
}
.scroll-posts::-webkit-scrollbar {
  display: none;
}
</style>
