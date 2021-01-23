import Api from './index'

export default {
  testPosting () {
    const item = { id: '1352543093774376960' }
    return Api().post('/test', item)
  }
}