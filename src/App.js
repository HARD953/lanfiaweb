import React,{Suspense, useEffect, useState} from 'react';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import { Loader } from 'rsuite';
import './App.css';
import FooterApp from './components/footer/FooterApp';
import NavbarApp from "./components/navbar/NavbarApp";
import useToken from './hooks/useToken';
import routes from './routes';

import ProtectedRoute from './services/ProtectedRoute'


const loaderApp = (
  <div>
    <Loader backdrop={true} size="lg" vertical content="Chargement" />
  </div>
);



function App() {
  const [isLoadingRefresh,setIsLoadingRefresh] = useState(false)
  const {token, setToken} = useToken()
  

  return (
    <div className="">

      <NavbarApp
      setIsLoadingRefresh ={ setIsLoadingRefresh } 
      isLoadingRefresh ={ isLoadingRefresh }
      />
      <Suspense fallback={loaderApp} >
                <Routes>
                    {routes.map((route, index)=> 
                        !route.private 
                          && <Route 
                                      key={index}
                                      exact={route.exact}
                                      path={route.path}
                                      element={
                                      <route.element setIsLoadingRefresh ={ setIsLoadingRefresh } 
                                      isLoadingRefresh ={ isLoadingRefresh }
                                      />}
                                      name={route.name}
                              />
                            
                        )
                    }

                <Route element={<ProtectedRoute isAllowed={!!token} />}>
                  { routes.map((route, index)=> 
                            route.private
                             && <Route 
                                      key={index}
                                      exact={route.exact}
                                      path={route.path}
                                      element={<route.element/>}
                                      name={route.name}
                                  />
                                                    
                            )
                    }
                </Route>
                  
                 
                </Routes>
        </Suspense>
        <FooterApp/>
    </div>
  );
}

export default App;
