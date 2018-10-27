import { View } from "backbone";
import _ from "underscore";

import './title.css';

export const Title = View.extend({
  template: _.template("<h1><%- title %></h1>"),
  className: 'Title',
  initialize() {
    this.render();
    return this;
  },
  render() {
    this.$el.html(this.template(this.model));
  }
});
