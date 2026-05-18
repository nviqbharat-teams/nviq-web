import { Injectable, signal } from '@angular/core';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toast = signal<Toast | null>(null);

  /**
   * Displays a toast notification with automated dismissal.
   */
  show(message: string, type: 'success' | 'error' | 'info' = 'success', duration = 5000): void {
    this.toast.set({ message, type, duration });
    
    // Automatically dismiss the toast after the specified duration
    setTimeout(() => {
      const current = this.toast();
      if (current && current.message === message) {
        this.toast.set(null);
      }
    }, duration);
  }

  /**
   * Explicitly clears/hides any active toast.
   */
  clear(): void {
    this.toast.set(null);
  }
}
