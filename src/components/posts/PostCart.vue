<template>
  <div class="wrapper p-12 mx-10 my-24 d-flex justify-content-between">
    <div class="row">
      <div class="col-12">
        <img v-if="!isLoaded" :src="image" class="image" alt="post" @error="isLoaded = false" />
        <img
          v-show="isLoaded"
          :src="post?.image"
          class="image"
          alt="post"
          @error="isLoaded = false"
          @load="isLoaded = true"
        />
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div class="row mt-10px">
              <div class="col-12 py-2">
                <span class="text-size-bold-18 text-color-black-1">{{ post?.title }}</span>
              </div>
            </div>
            <div class="row mt-10px">
              <div class="col-12">
                <span class="text-size-reg-14 text-color-gray" v-html="postValue?.text"></span>
              </div>
            </div>
            <div class="row mt-10px">
              <div class="col-12 py-1">
                <Tag v-for="tag in post?.tags" :text="tag" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-10px justify-content-center align-items-center">
      <div class="col-3 px-3 userPhoto">
        <img v-if="!isLoadedAvatar" class="image" alt="user" :src="userPhoto" />
        <img
          v-show="isLoadedAvatar"
          class="image-avatar"
          alt="user"
          @error="isLoadedAvatar = false"
          @load="isLoadedAvatar = true"
          :src="post?.user.avatar"
        />
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 px-0 d-flex py-1">
            <span class="text-color-black-2 text-size-bold-10"
              >{{ post?.user.firstName }} {{ post?.user.lastName }}</span
            >
          </div>
          <div class="col-12 px-0 d-flex py-1">
            <span class="text-color-gray text-size-reg-10">{{
              new Date(post?.publishDate).toDateString()
            }}</span>
          </div>
        </div>
      </div>
      <div class="col-3 d-flex justify-content-end">
        <span class="text-color-gray text-size-reg-12">{{ post?.likes }}</span
        ><IconHeart />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import imageUrl from '@/assets/rectangle.jpg'
import circleImageUrl from '@/assets/circle.jpg'
import { Tag } from '@/components/tag'
import { IconHeart } from '../icons'
import type { PostResponseType } from '@/server/types'

export default defineComponent({
  name: 'PostCart',
  props: {
    post: Object as PropType<PostResponseType>,
    searchTerm: Object as PropType<string>
  },

  data() {
    return {
      isLoaded: false,
      isLoadedAvatar: false,
      image: imageUrl,
      userPhoto: circleImageUrl
    }
  },
  components: {
    Tag,
    IconHeart
  },
  computed: {
    postValue() {
      return this.searchTerm?.length > 0
        ? ({
            ...this.post,
            text: this.post?.text.replace(
              new RegExp('(' + this.searchTerm + ')', 'ig'),
              "<span class='text-size-bold-14 text-color-black-1'>$1</span>"
            )
          } as PostResponseType)
        : this.post
    },
    textBoldNumbers() {
      return this.detailText.replace(/([0-9])/g, '<b>$1</b>')
    }
  }
})
</script>
<style>
.p-12 {
  padding: 12px;
}
.mx-10 {
  margin-left: 5px;
  margin-right: 5px;
}
.my-24 {
  margin-top: 12px;
  margin-bottom: 12px;
}

.wrapper {
  flex-direction: column;
  display: flex;
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--light-gray, #e7e7e7);
}

.image {
  width: 100%;
}

.image-avatar {
  width: 24px;
  height: 24px;
}
.userPhoto {
  border-radius: 100%;
}
</style>
