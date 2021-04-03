import { defaultModel } from './../common/constants';

export default {
	FK_merchant:defaultModel.string,
  name:defaultModel.string,
  image:defaultModel.string,
  totalCode:defaultModel.number,
  discountByAmount:defaultModel.boolean,
  discountByPercent:defaultModel.boolean,
  discountAmount:defaultModel.string,
  discountPercent:defaultModel.string,
  status:defaultModel.string,
  expiredDate:defaultModel.string
};
