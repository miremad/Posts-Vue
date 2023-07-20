<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-8">
      <div class="row justify-content-center">
        <div class="col-1"><BackButton /></div>
        <div class="col-8 d-flex align-items-center">
          <span class="text-size-bold-18 text-color-black-1">New post</span>
        </div>
        <div class="col-3 justify-content-end d-flex">
          <Button
            :props="{
              fullWidth: false,
              onClick: submit,
              text: 'Publish post',
              hasStartIcon: false,
              variant: 'contained'
            }"
          />
        </div>
      </div>
    </div>
    <div class="col-8 mt-2">
      <form @submit.prevent="submit">
        <SimpleInput @onChange="getTitle" />
        <Textarea @onChange="getText" />
        <TagsInput @onChange="getTags" />
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { BackButton, Button } from '@/components/button'
import { SimpleInput, TagsInput, Textarea } from '@/components/inputs'
import { apiClient } from '@/server/axios/axios'
import type { PostRequestType, PostResponseType } from '@/server/types'
import { randomInt } from 'crypto'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AddPost',
  components: {
    Textarea,
    SimpleInput,
    TagsInput,
    BackButton,
    Button
  },
  data() {
    return {
      form: {
        id: Math.floor(Math.random() * 100),
        image: 'http://placeimg.com/640/480/technics',
        likes: 17,
        publishDate: new Date(),
        title: '',
        text: '',
        tags: [],
        userId: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.form)
      apiClient.post<PostResponseType>('/posts', this.form).then(
        (res) => {
          console.log('succ', res)
          this.$router.replace('/')
        },
        (err) => {
          console.log('err', err)
        }
      )
    },
    getTitle(title: string) {
      this.form.title = title
    },
    getTags(tags: string[]) {
      this.form.tags = tags
    },
    getText(text: string) {
      this.form.text = text
    }
  }
})
</script>
<style>
textarea {
  resize: none;
}
</style>
