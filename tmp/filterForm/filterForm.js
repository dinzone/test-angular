import angular from 'angular';
import filterFormComponent from './filterForm.component';
import filterSelectbox from './filterSelectbox/filterSelectbox';
import filterTextbox from './filterTextbox/filterTextbox';
import filterSwitch from './filterSwitch/filterSwitch';
import filterNumInterval from './filterNumInterval/filterNumInterval';
import filterGraphicButton from './filterGraphicButton/filterGraphicButton';
import filterTimeRange from './filterTimeRange/filterTimeRange';
import FilterFormService from './filterForm.service';

let filterFormModule = angular.module('filterForm', [
  filterSelectbox.name,
  filterNumInterval.name,
  filterTimeRange.name,
  filterGraphicButton.name,
  filterTextbox.name,
  filterSwitch.name
])
  .service({FilterFormService})
  .component('filterForm', filterFormComponent);

export default filterFormModule;
