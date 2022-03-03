// register vue composition api globally
import { ViteSSG } from 'vite-ssg';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import App from './App.vue';
import {} from 'unplugin-icons/types/vue'; // Needed to remove import errors

import '~/assets/css/tailwind.css'; // Tailwind CSS Styles
const routes = setupLayouts(generatedRoutes);

// Start Vite SSG
export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, _, savedPos) {
      if (savedPos) return savedPos;
      if (to.hash) return { el: to.hash, behavior: 'smooth', top: 32 };
      return { behavior: 'smooth', top: 0 };
    },
  },
  (ctx) => {
    // Install the modules inside the "modules" folder.
    Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.(ctx));
  }
);
