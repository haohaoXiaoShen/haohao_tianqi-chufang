<template>
  <div>
    <ul id="searchList">
      <li v-for="item in SearchShow " :key="item.index">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShowInfo",
  props: ["SearchShow"],
};
</script>