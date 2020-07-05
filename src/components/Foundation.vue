<template>
  <div class="foundation">
    <v-container>
      <v-row>
        <br />
        <div v-for="(word, index) in sentence.structure" :key="index">
          <Block
            :wordKey="word.key"
            :type="word.type"
            :editable="word.editable"
            @set-english="setEnglish"
          />
        </div>
      </v-row>
      <v-row>
        <div
          class="foundation-translation"
        >{{ $t(`sentence.${sentence.translationKey}`, translations) }}</div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Block from "./Block.vue";
export default {
  name: "Foundation",
  components: {
    Block
  },
  props: {
    sentence: {
      type: Object
    }
  },
  data() {
    return {
      translations: {}
    };
  },
  methods: {
    setEnglish(wordKey, english) {
      this.$set(this.translations, `${wordKey}`, english);
    }
  }
};
</script>
<style lang="scss">
.foundation {
  display: inherit;
}

.foundation-structure {
  margin: auto !important;
}
</style>