import angular from 'angular';
import uiRouter from 'angular-ui-router';
import filterTextboxComponent from './filterTextbox.component';

let filterTextboxModule = angular.module('filterTextbox', [
  uiRouter
])

.component('filterTextbox', filterTextboxComponent);

export default filterTextboxModule;
