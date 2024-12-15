import _get from 'lodash/get';

export default function getBasePath() {
  return _get(process.env, 'BASE_PATH', '');
}
