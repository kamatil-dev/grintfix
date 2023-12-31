import objectPath from "object-path";

export const useLanguage = (messages: any) => {
  const Messages = useState("LanguageMessages");

  const isObject = (item: any) => {
    return item && typeof item === "object" && !Array.isArray(item);
  };

  const mergeDeep: any = (target: any, ...sources: any) => {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return mergeDeep(target, ...sources);
  };
  if (Messages.value) Messages.value = mergeDeep(Messages.value, messages);
  else Messages.value = messages;
};

export const t = (key: string) => {
  const Messages = useState("LanguageMessages");
  const Language = useGlobalCookie("Language");

  return objectPath.get(
    Messages.value as object,
    `${Language.value}.${key}`,
    key
  );
};

export const to = (path: any) => {
  const Language = useGlobalCookie("Language");
  if (typeof path === "string")
    return (
      (!Language.value || Language.value === "ar" ? "/" : "/en/") + (path ?? "")
    );
  else {
    if (Array.isArray(path.params.slug) && path.params.slug[0] === "en")
      return path.path.replace("/en/", "/");
    else return "/en" + path.path;
  }
};
