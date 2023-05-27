import magDaemonAttack from './magDaemonAttack';

export default class Magician extends magDaemonAttack {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.deffence = 40;
  }
}
