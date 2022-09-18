export type TabsData<T, P> = Record<string, {
  id: string,
  tab: T,
  panel: P,
  hasPopUp?: boolean
}>
