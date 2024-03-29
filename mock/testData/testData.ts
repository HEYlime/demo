import mockjs, { mock } from 'mockjs';
import { delay } from 'roadhog-api-doc';

const getTabelList = () => {
  let tableList = [];
  for (let i = 0; i < 50; i++) {
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

const proxy = {
  'POST /api/test/list': (req: any, res: any) => {
    res.send({
      status: 'success',
      info: 'ok',
      'data': {
        list: getTabelList()
      },
    });
  }
}

export default delay(proxy, 1000);