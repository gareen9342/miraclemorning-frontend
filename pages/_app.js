import {Provider} from 'mobx-react';
import { useStore } from '../store/store';
export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
