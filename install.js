import AallaamRichtext from "./src/components/AallaamRichtext.vue";

const AallaamRichtextComponent = {
 install(Vue) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("aallaam-richtext", AallaamRichtext);
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(AallaamRichtextComponent);
}

export default AallaamRichtext;