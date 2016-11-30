import template from './filterSwitch.html';
import controller from './filterSwitch.controller';
import './filterSwitch.styl';

let filterSwitchComponent = {
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

export default filterSwitchComponent;
