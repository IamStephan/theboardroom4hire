import { action, observable } from 'mobx';

class AppStore {
  @observable drawer = {
    isOpen: false
  }

  @action openDrawer () {
    this.drawer.isOpen = true
  }

  @action closeDrawer () {
    this.drawer.isOpen = false
  }
}

const store = new AppStore()

export default store