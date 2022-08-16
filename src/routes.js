import {lazy} from 'react'

//import routes
const HomePage = lazy(()=>import('./views/home/Home'));
const MakeDonation = lazy(()=>import('./views/makeDonation/MakeDonation'));
const MyActions = lazy(()=>import('./views/myActions/MyActions'));
const SignIn = lazy(()=>import('./views/signIn/SignIn'));
const SignUp = lazy(()=>import('./views/signUp/SignUp'));
const Compte = lazy(()=>import('./views/compte/compte'));
const RedirectAfterSignIn = lazy(()=>import('./components/redirectComponents/RedirectAfterSignIn'));


const routes = [
    { path: '/', exact: true ,element: HomePage  , name: 'Accueil' ,private: false },
    { path: '/make_donation' ,element: MakeDonation  , name: 'MakeDonation'  },
    { path: '/my_actions' ,element: MyActions  , name: 'MyActions',private: true },
    { path: '/sign_in' ,element: SignIn  , name: 'SignIn' ,private: false },
    { path: '/sign_up' ,element: SignUp  , name: 'SignUp' ,private: false },
    { path: '/monprofil' ,element: Compte  , name: 'Mon Profil',private: true  },
    { path: '/redirect' ,element: RedirectAfterSignIn  , name: 'Redirection',private: false  }
]

export default routes;