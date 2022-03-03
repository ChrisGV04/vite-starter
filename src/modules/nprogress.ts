import NProgress from 'nprogress';
import { UserModule } from '~/types/vite-ssg';

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(() => {
      NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }
};
