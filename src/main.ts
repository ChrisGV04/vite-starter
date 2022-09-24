// register vue composition api globally
import {} from 'unplugin-icons/types/vue'; // Needed to remove import errors
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { ViteSSG } from 'vite-ssg';
import '~/assets/css/tailwind.css'; // Tailwind CSS Styles
import App from './App.vue';
import type { UserModule } from './types/vite-ssg';

const routes = setupLayouts(generatedRoutes);

// Start Vite SSG
export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, _, savedPos) {
      if (savedPos) return savedPos;
      if (to.hash) return { el: to.hash, behavior: 'smooth', top: 32 };
      return { top: 0 };
    },
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true })).forEach((i) =>
      i.install?.(ctx)
    );
  }
);
