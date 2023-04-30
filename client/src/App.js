import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from "./redux/store";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
  );
}

export default App;
