import angular from 'angular';
import uiRouter from 'angular-ui-router';
import filterSwitchComponent from './filterSwitch.component';

let filterSwitchModule = angular.module('filterSwitch', [
  uiRouter
])

.component('filterSwitch', filterSwitchComponent);

export default filterSwitchModule;
