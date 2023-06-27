<template>
  <div class="or-box">
    <div class="line-through"></div>
    <p>OR</p>
    <div class="line-through"></div>
  </div>
</template>

<style>
.or-box {
  display: flex;
  color: dimgray;
  font-weight: bold;
  justify-content: center;
  margin: 10px 20px 20px;
}

.line-through {
  width: 100%;
  margin: 0 10px;
  border-top: 2px solid lightgrey;
  transform: translateY(50%);
}
</style>
