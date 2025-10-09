// import { ChakraProvider } from "@/components/ui/provider"  // renamed it because of redux has also a provider
import { ChakraProvider} from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "./app/store";


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
    <ChakraProvider>  {/*import { defaultBaseConfig } from '@chakra-ui/react'*/}
    <App />
    </ChakraProvider>
    </Provider>
  </StrictMode>,
)
