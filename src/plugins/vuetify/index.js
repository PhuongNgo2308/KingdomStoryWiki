// src/plugins/vuetify.js

import Vue from "vue";
import LRU from "lru-cache";
import minifyTheme from "minify-css-string";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import light from "./theme.light";

Vue.use(Vuetify);

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
});

const opts = {
  theme: {
    themes: { light },
    // disable: true //disable theme creation
    options: {
      minifyTheme,
      themeCache,
      variations: false // disable 9-variants colors generation for each color
    }
  }
};

export default new Vuetify(opts);
