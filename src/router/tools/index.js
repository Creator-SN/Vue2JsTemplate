/**
 * @description async factory 
 * @author CreatorSn
 */
import loading from "@/components/common/loading.vue";

const AsyncLoad = function (component) {
  const Handler = () => ({
    component: component,
    loading: loading,
    error: loading,
    delay: 200,
    timeout: 10000
  })
  return Promise.resolve({
    render(h) {
      return h(Handler)
    }
  })
}

export default { AsyncLoad }


