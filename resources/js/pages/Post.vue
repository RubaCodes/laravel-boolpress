<template>
  <div class="post">
    <div v-if="post" class="container">
      <h1 class="text-white text-center py-2 font-weight-bold">
        {{ post.title }}
      </h1>
      <p class="text-white py-2">{{ post.content }}</p>
      <img :src="`images/${post.image}`" alt="" />
      <div class="info d-flex justify-content-between align-items-center">
        <h4 class="text-white">
          <span>Categoria:</span> {{ post.category.name }}
        </h4>
        <div class="text-white">
          Tags:
          <span
            class="btn btn-info mx-1"
            v-for="tag in post.tags"
            :key="tag.id"
            >{{ tag.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Post",
  data() {
    return {
      post: null,
    };
  },
  created() {
    axios
      .get(`/api/posts/${this.$route.params.slug}`)
      .then((res) => {
        console.log(res.data);
        this.post = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

//
<style lang="scss" scoped>
.post {
  background-color: rgb(29, 94, 179);
  .container {
    padding: 3rem 0;
    height: calc(100vh - 120px);
  }
  h4 {
    span {
      color: white;
    }
  }
}
</style>
