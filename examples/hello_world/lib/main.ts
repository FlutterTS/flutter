// import { Flutter, Widget, Text, Container } from '@flutterjs/ts';
import "flutterjs/ts";

class MyApp extends StatefulWidget {
  build() {
    return Container({
      padding: 16,
      child: Text("Hello from TypeScript!"),
    });
  }
}

runApp(new MyApp());
