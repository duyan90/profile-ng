import { Injectable } from '@angular/core';

export type ThemeMode = 'system' | 'light' | 'dark' | 'pink';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private storageKey = 'theme';
  private mediaQuery = '(prefers-color-scheme: dark)';
  private mediaListener?: (this: MediaQueryList, ev: MediaQueryListEvent) => any;
  private current: ThemeMode = 'system';

  get currentMode(): ThemeMode {
    return this.current;
  }

  init(): void {
    const saved = this.readPersisted();
    this.setTheme(saved ?? 'system');
  }

  setTheme(mode: ThemeMode): void {
    this.current = mode;
    this.persist(mode);
    this.apply(mode);
    this.bindSystemListenerIfNeeded(mode);
  }

  private apply(mode: ThemeMode): void {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const body = document.body;
    
    // Clear existing theme classes
    root.classList.remove('dark', 'pink');
    body.classList.remove('dark', 'pink');
    
    // Apply new theme classes
    if (mode === 'dark' || (mode === 'system' && this.systemPrefersDark())) {
      root.classList.add('dark');
      body.classList.add('dark');
    } else if (mode === 'pink') {
      root.classList.add('pink');
      body.classList.add('pink');
    }
  }

  private bindSystemListenerIfNeeded(mode: ThemeMode): void {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia(this.mediaQuery);
    if (this.mediaListener) {
      mq.removeEventListener?.('change', this.mediaListener);
      // Fallback for older Safari
      // @ts-ignore
      mq.removeListener?.(this.mediaListener);
      this.mediaListener = undefined;
    }
    if (mode === 'system') {
      this.mediaListener = () => this.apply('system');
      mq.addEventListener?.('change', this.mediaListener);
      // Fallback for older Safari
      // @ts-ignore
      mq.addListener?.(this.mediaListener);
    }
  }

  private systemPrefersDark(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia && window.matchMedia(this.mediaQuery).matches;
  }

  private persist(mode: ThemeMode): void {
    if (typeof localStorage === 'undefined') return;
    try { localStorage.setItem(this.storageKey, mode); } catch {}
  }

  private readPersisted(): ThemeMode | null {
    if (typeof localStorage === 'undefined') return null;
    try {
      const v = localStorage.getItem(this.storageKey) as ThemeMode | null;
      return v === 'light' || v === 'dark' || v === 'system' || v === 'pink' ? v : null;
    } catch { return null; }
  }
}


