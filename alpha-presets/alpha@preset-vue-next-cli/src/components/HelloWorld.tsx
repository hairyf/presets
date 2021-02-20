import { onMounted, ref, watchEffect } from "vue"

export default () => {
  const hello = ref<HTMLElement>()
  function onValidationError() {
    // Do some magic
    hello.value?.focus();
    console.log('-----')
}
  return (
    <div>
      <input ref="hello" />
      <span onClick={onValidationError}>focus</span>
    </div>
  )
}