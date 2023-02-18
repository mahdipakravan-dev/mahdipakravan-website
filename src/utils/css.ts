export const buildClassNames = (
  ...args: Array<string | undefined | boolean>
) => {
  return args.filter(Boolean).join(" ");
};
