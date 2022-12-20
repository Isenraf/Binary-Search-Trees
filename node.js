class Node {
  #value = null;
  #leftNode = null;
  #rightNode = null;

  constructor(value) {
    this.value = value;
  }

  get value() {
    return this.#value;
  }

  set value(_new) {
    this.#value = _new;
  }

  get leftNode() {
    return this.#leftNode;
  }

  set leftNode(_new) {
    this.#leftNode = _new;
  }

  get rightNode() {
    return this.#rightNode;
  }

  set rightNode(_new) {
    this.#rightNode = _new;
  }
}

export default Node;
