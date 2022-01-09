export const calculateElementScrollPosition = (
  element: Element | null
): number | null => {
  if (element) {
    const { scrollTop, scrollHeight, clientHeight } = element;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
  }

  return null;
};
