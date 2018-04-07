import { delay } from 'redux-saga';

function* demoSaga() {
  while (true) {
    yield delay(1000);
    console.log('object');
  }
}
export default demoSaga;
