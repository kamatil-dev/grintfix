export const useGlobalCookie = (cookieName: string) => {
  const cookie = useState(
    cookieName,
    () => useCookie(cookieName).value ?? null
  );

  watch(
    cookie,
    (newValue) => {
      useCookie(cookieName).value = newValue;
    },
    { deep: true }
  );

  return cookie;
};
