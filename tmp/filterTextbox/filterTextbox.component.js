import template from './filterTextbox.html';
import controller from './filterTextbox.controller';
import './filterTextbox.styl';

let filterTextboxComponent = {
  restrict: 'E',
  bindings: {
    controlType: '@',
    label: '@',
    labelIcon: '@',
    onChange: '&',
    onRemove: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default filterTextboxComponent;
