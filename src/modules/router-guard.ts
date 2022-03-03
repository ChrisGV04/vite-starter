import { UserModule } from '~/types/vite-ssg';

export const install: UserModule = ({ router, isClient }) => {
  if (isClient) {
    router.beforeEach(async (to) => {
      // Your router guards go here
      return true;
    });
  }
};
