<template>
  <h1>Phronesis project #9</h1>
  <div>
    <br />
    <div>
      Teammates:
      <ul>
        <li>Alexander Kochetov</li>
        <li>Kris Smietana</li>
      </ul>
    </div>
    <br />
    <div>
      What made you smile?
      <ul>
        <li>Mostly everything was clear</li>
      </ul>
    </div>
    <br />
    <div>
      What did you find confusing? Did you encounter any issues?
      <ul>
        <li>Conditions for shipping rates are quite confusing, some description would be helpful. When adding addon offer, shipping rate turns to 0 from 4.99</li>
      </ul>
    </div>
  </div>
  <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0">Back to debriefs</router-link>
  <router-link :to="{ name: 'Project9' }" class="btn btn-primary text-center m-4">Go to project #9</router-link>
</template>
<script setup lang="ts">
</script>