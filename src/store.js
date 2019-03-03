import { decorate, observable, computed } from "mobx";

class Elementsadded {
  objs = [];

  addObject = id => this.objs.push(id);
}

decorate(Elementsadded, {
  objs: observable
});

export default new Elementsadded();
