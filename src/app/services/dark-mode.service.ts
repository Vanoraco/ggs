// src/app/dark-mode.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
