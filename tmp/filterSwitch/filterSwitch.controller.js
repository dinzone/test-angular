import _ from 'lodash';

class FilterSwitchController {

  constructor($resource, ENV) {
    "ngInject";

    this.value = false;
    this.changed();
  }

  changed() {
    this.onChange({
      controlType:  this.controlType,
      value:        this.value
    });
  }

  removeFilter(controlType) {
    this.onRemove({
      controlType:  controlType
    });
  }

}

export default FilterSwitchController;
