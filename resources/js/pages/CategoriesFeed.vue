<template>
  <section class="post-feed py-5">
    <div class="container">
      <ul class="row">
        <li v-for="category in categories" :key="category.id" class="col-6">
          <div class="card mt-2 p-2 text center">
            <h2>
              {{ category.name }}
            </h2>
            <router-link
              :to="{ name: 'category', params: { slug: category.slug } }"
              >Visualizza post associati</router-link
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "CategoriesFeed",
  data() {
    return {
      categories: null,
    };
  },
  created() {
    axios
      .get("/api/categories")
      .then((res) => {
        console.log(res.data);
        this.categories = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: rgb(29, 94, 179);
  .container {
    height: calc(100vh - 230px);
  }
  ul {
    list-style: none;
  }
}
</style>
