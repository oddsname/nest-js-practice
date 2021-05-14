<template>
    <a :href="href" download>
      <slot />
    </a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: 'Download',
    },
  },

  methods: {
    onClick() {

    }
  }
}
</script>