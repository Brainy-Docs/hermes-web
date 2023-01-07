export const localPersist = ({onSet, setSelf, node}:any) => {
  const storedData = localStorage.getItem(node.key)
  if (storedData != null){
    setSelf(JSON.parse(storedData))
  }
  onSet((newData:any, __:any, isReset:any) => {
    isReset
      ? localStorage.removeItem(node.key)
      : localStorage.setItem(node.key, JSON.stringify(newData));
  })
}