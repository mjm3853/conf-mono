'use strict';

import { index } from './conf-list.controller';
import router from 'koa-router';

const confList = router();

confList.get('/', index);

export default confList;
