import _ from 'lodash';

class FilterTextboxController {

  constructor($resource, ENV) {
    "ngInject";

    this.value = '';
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

export default FilterTextboxController;
