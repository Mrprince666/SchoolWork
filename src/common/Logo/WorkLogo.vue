<template>
  <div>
    <svg :width="width" :height="width">
      <circle
        :cx="width / 2"
        :cy="width / 2"
        :r="(width * 9) / 20"
        fill="white"
        stroke="rgb(0, 146, 65)"
        :stroke-width="width / 10"
      ></circle>
      <text
        :x="(width * 28) / 100"
        :y="(width * 3) / 5"
        :font-size="`${(width * 3) / 10}px`"
        stroke="rgb(0, 146, 65)"
        fill="rgb(0, 146, 65)"
      >
        D L
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: Number,
  },
};
</script>

<style lang="sass" scoped></style>
