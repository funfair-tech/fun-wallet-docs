export default ({ Vue, isServer }) => {
  if (!isServer) {
    import('vue-toasted').then((module) => {
      Vue.use(module.default);
    });
  }
};
