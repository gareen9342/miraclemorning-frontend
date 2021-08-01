import {Provider} from 'mobx-react';
import { useStore } from '../store/Store';
export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
