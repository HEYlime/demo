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
  'GET /api/table/list': (req: any, res: any) => {
    // console.log(req);
    // console.log(res)
    console.log(req.url);
    console.log(req.query);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send({
      'list': getTabelList()
    });
  }
}

export default delay(proxy, 1000);