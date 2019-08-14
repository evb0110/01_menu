import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <nav class="menu">
      <NavLink
        className="menu__item"
        activeClassName="menu__item-active"
        exact
        to="/"
      >
        Домашняя страница
      </NavLink>
      <NavLink
        className="menu__item"
        activeClassName="menu__item-active"
        exact
        to="/drift"
      >
        Drift Page
      </NavLink>
      <NavLink
        className="menu__item"
        activeClassName="menu__item-active"
        exact
        to="/timeattack"
      >
        Time Attack
      </NavLink>
      <NavLink
        className="menu__item"
        activeClassName="menu__item-active"
        exact
        to="/forza"
      >
        Forza
      </NavLink>
    </nav>
  );
}
