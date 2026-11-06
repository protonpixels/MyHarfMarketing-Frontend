<template>
  <div class="home">
    <div class="hero">
      <h1 class="welcome">Hi, Omar! You ready to work?</h1>
      <section class="questions">
        <h3 class="title"></h3>
        <div class="content">
          <div class="question" v-for="question in questions">
            <h3>{{ question }}</h3>
            <textarea name="answer" id="" placeholder="Put your answer here..."></textarea>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const questions = ref(['What Products Have You Purchased Most Recently?', '', '', '', '', '', ''])
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  max-width: 100vw;
  width: 100%;
  padding: 0 calc($navheight * 0.618);
  padding-top: $navheight;
}
.hero {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: calc($navheight * 0.618);
  .welcome {
    font-weight: 200;
  }
}

section.questions {
  width: 100%;
  border-bottom: 3px solid #0001026f;
  height: 600px;
  padding: 15px 30px;
  border-radius: 15px;
  box-shadow: 0 0 30px 1px #0001026f;
  background: #0001026f;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  .title {
    border-bottom: 3px solid #fff;
    padding: 6px 3px;
    max-width: fit-content;
    margin: 0 auto;
    font-size: 30px;
  }
  .content {
    display: flex;
    gap: 15px;
    overflow: scroll;
  }
  .question {
    background-color: #fff;
    max-width: 450px;
    min-width: 450px;
    padding: 30px;
    height: 480px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;
    h3 {
      color: #000102;
      font-weight: 200;
      padding: 0 15px 0 0;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 24px;
    }
    textarea {
      height: 61.8%;
      font-size: 18px;
      padding: 12px;
      border-radius: 9px;
      background-color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      border: 1px solid #0001026f;
      color: #000102;
      resize: none;
    }
  }
}
</style>
