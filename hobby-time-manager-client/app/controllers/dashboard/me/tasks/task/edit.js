import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    cancel() {
      this.transitionToRoute('dashboard.me.tasks');
    }
  }
});
