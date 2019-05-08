<template>
  <div id="Kitchen">
    <Search @press="getValue" :SearchShow="SearchShow" class="toparea"></Search>
  </div>
</template>
<script>
import Search from "../components/searchComponents/Search";
export default {
  name: "Kitchen",
  data() {
    return {
      SearchShow: [],
    
    };
  },
  methods: {
    getValue(searchValue) {
      // console.log(searchValue);
      this.axios(
        "/api/cook/query?key=7f77bf6937dac7744326950fb583e21a&menu=" +
          searchValue +
          "&rn=8&pn=1"
      ).then(result => {
        // console.log(result.data.result.data);
        for (let i = 0; i < result.data.result.data.length; i++) {
          // this.SearchShow.push(result.data.result.data[i]);
          if (this.SearchShow.length <= result.data.result.data.length) {
            this.SearchShow.push(result.data.result.data[i]);
          } else if (this.SearchShow.length > result.data.result.data.length) {
            this.SearchShow = [];
            this.SearchShow.push(result.data.result.data[i]);
          }
        }
        // console.log(this.SearchShow);
      });
    },
     
  },
  // created() {
  //   this.axios("/api/cook/query?key=7f77bf6937dac7744326950fb583e21a&menu=面&rn=8&pn=1").then(res =>{
  //     console.log(res)
  //   })
  // },
  components: {
    Search,
  }
};
</script>

<style scoped>
.toparea{
  border: 2px solid rgba(199, 43, 43, 0.137);
  border-radius: 5px;
}
</style>
