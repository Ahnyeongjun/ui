export const useRouter = () => ({
  push: () => {},
  replace: () => {},
  back: () => {},
  pathname: '/',
});

export const usePathname = () => '/';
export const useSearchParams = () => new URLSearchParams();
