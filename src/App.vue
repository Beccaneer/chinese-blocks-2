<template>
  <v-app>
    <v-app-bar app color="primary" dark>Chinese Blocks</v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="2">
            <v-select :items="sentences" v-model="selectedSentence" label="Select a sentence" />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="6">
            <v-row align="center" justify="center">
              <Foundation :sentence="selectedSentence" :key="selectedSentence" />
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Foundation from "./components/Foundation.vue";
import sentences from "./assets/sentences";
export default {
  name: "App",
  components: {
    Foundation
  },
  data() {
    return {
      selectedSentence: { text: null },
      sentences
    };
  }
};
</script>

