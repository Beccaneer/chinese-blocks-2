<template>
  <v-menu open-on-hover bottom offset-y :disabled="!editable">
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined x-large class="block" v-bind="attrs" v-on="on" :disabled="!editable">
        <div class="block-hanzi">{{hanzi}}</div>
        <div class="block-pinyin">{{pinyin}}</div>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in allWords" :key="index" @click="changeWord(item)">
        <v-list-item-title>{{ item.hanzi }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import adj from "../assets/adjectives.js";
import verb from "../assets/verbs.js";
import noun from "../assets/nouns.js";
import aux from "../assets/auxiliaries.js";
import adverb from "../assets/adverbs.js";
export default {
  name: "Block",
  props: {
    wordKey: {
      type: String
    },
    editable: {
      type: Boolean
    },
    type: {
      type: String
    }
  },
  data() {
    return {
      adj,
      verb,
      noun,
      aux,
      adverb,
      hanzi: "",
      pinyin: ""
    };
  },
  methods: {
    getRandomCharacter(type) {
      const keys = Object.keys(this[type]);
      const randomIndex = keys[Math.floor(Math.random() * keys.length)];
      return this[type][randomIndex].hanzi;
    },
    setHanzi(word) {
      this.hanzi = word
        ? word.hanzi
        : this.editable
        ? this.getRandomCharacter(this.type)
        : this.wordKey;
    },
    setPinyin() {
      this.pinyin = this[this.type][this.hanzi].pinyin;
    },
    setEnglish() {
      this.$emit(
        "set-english",
        this.wordKey,
        this[this.type][this.hanzi].english
      );
    },
    changeWord(word) {
      console.log(word);
      this.setHanzi(word);
      this.setPinyin();
      this.setEnglish();
    }
  },
  computed: {
    allWords() {
      return this[this.type];
    }
  },
  mounted() {
    console.log("block mount", this.wordKey, this.editable, this.type);
    this.setHanzi();
    this.setPinyin();
    if (this.editable) this.setEnglish();
  }
};
</script>
<style scoped lang="scss">
.block {
  display: inline-block;
}
</style>
<style lang="scss">
.v-btn {
  text-transform: none !important;
  margin: 0 5px;
}
.v-btn__content {
  flex-direction: column;
}
</style>