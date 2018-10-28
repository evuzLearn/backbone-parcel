import { View } from 'backbone';
import _ from 'underscore';

import { Title } from './components/Title';

import './styles.css';

export const App = View.extend({
  initialize() {
    this.title_one = new Title({ model: { title: 'Hello World' } });
    this.title_two = new Title({ model: { title: 'Second Hello World' } });
    this.render();
    return this;
  },
  render() {
    const tmpl = _.template(`
      <div class="first-title"></div>
      <div class="second-title"></div>
    `);
    this.$el.html(tmpl);
    this.$('.first-title').replaceWith(this.title_one.el);
    this.$('.second-title').replaceWith(this.title_two.el);
  },
});

export default App;
