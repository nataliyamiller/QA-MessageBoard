import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  questionAuthor: DS.attr(),
  notes: DS.attr()  
});
