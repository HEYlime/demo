import mockjs, { mock } from 'mockjs';
import { delay } from 'roadhog-api-doc';

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

const proxy = {
  'GET /api/img': mockjs.mock({
    'list|10': [{ src: '@image' }],
  }),
  'POST /api/table/list': (req: any, res: any) => {
    // console.log(req);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
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