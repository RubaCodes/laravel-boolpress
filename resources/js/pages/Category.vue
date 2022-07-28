<template>
  <div class="post">
    <div v-if="category" class="container">
      <h1 class="text-white text-center py-2 font-weight-bold">
        {{ category.name }}
      </h1>

      <ul>
        <li class="text-white" v-for="post in category.posts" :key="post.id">
          <router-link :to="{ name: 'post', params: { slug: post.slug } }">
            {{ post.title }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Category",
  data() {
    return {
      category: null,
    };
  },
  created() {
    axios
      .get(`/api/categories/${this.$route.params.slug}`)
      .then((res) => {
        console.log(res.data);
        this.category = res.data;
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
