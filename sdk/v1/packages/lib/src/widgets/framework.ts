abstract class Key {
    constructor() {
    }
}

abstract class Widget {
    key?: Key;
}

abstract class StatefulWidget extends Widget {
    constructor(key?: Key) {
        super();
        this.key = key;
    }
    //   const StatefulWidget({Key? key}) : super(key: key);

    /// Creates the mutable state for this widget.
    //   State createState();
//   @protected
//   @factory
  createState(): State<any> {};
}