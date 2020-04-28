// controla qual stack de rotas está disponível pra gente
// usuario logado: mostra app.routes
// usuario nao logado: mostra auth.routes

import React, { useContext} from 'react';

import AuthContext from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';


const Routes: React.FC = () => {
  const {signed} = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;