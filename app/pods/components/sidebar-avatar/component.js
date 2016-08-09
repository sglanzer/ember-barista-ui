import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'i',
  classNames: [
    'material-icons',
    'circle'
  ],
  icon: Ember.computed('type', function () {
    let t = this.get('type')
    return {
      'Text Field': 'input',
      'Button': 'explicit',
      'Link': 'web',
      "Page": 'snooze'
    }[t]
  })
});
