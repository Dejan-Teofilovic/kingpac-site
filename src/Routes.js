import React from 'react';
import { useRoutes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Game from './pages/Game';
import AuthGuard from './guards/AuthGuard';
import GameLayout from './layouts/GameLayout';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: '/game',
      element: <AuthGuard><GameLayout /></AuthGuard>,
      children: [
        {
          path: '/game',
          element: <Game />
        }
      ]
    }
  ]);
}