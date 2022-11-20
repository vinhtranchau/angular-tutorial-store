import { Injectable } from '@angular/core';

import { Hero } from '../models/hero.model';
import { heroes } from '../../pages/hero/hero.data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = heroes;

  constructor() { }

  getHeroes() {
    return this.heroes;
  }
}
