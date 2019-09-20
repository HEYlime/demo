import mockjs, { mock } from 'mockjs';

const getTabelList = () => {
  let tableList = [];
  for (let i = 0; i < 10; i++) {
    tableList.push(
      {
        'key': i,
        'age': mockjs.Random.integer(0, 100),
        'address': mockjs.Random.county(true),
        'name': mockjs.Random.name(),
        'tags': [mockjs.Random.word(3, 7), mockjs.Random.word(3, 7)],
        'random': mockjs.Random.word()
      }
    )
  }
  return tableList;
}

export default {
  'GET /api/img': mockjs.mock({
    'list|10': [{ src: '@image' }],
  }),
  'POST /api/table/list': mockjs.mock({
    'list': getTabelList()
  })
}