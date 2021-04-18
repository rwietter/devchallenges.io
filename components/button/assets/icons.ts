/* eslint-disable import/extensions */
import { Github } from '../../../public/github';
import { LocalStore } from '../../../public/local_grocery_store_black';
import { MenuApp } from '../../../public/menu';
import { Terminal } from '../../../public/terminal';

const icons = {
  store: LocalStore,
  menu: MenuApp,
  github: Github,
  terminal: Terminal
};

export default icons;
