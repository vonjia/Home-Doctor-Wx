Page({
  data: {
    consult_id: '',
    date: '2020-09-20 22:38',
    phone: '18126733233',
    comment: '整挺好！',
    rate: 3
  },
  onLoad(options) {
    this.setData({ consult_id: options.id})
  }
})