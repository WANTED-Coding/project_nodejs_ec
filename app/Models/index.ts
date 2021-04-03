import mongoose from 'mongoose';

import UserSchema from './User.Model';
import AddressSchema from './Address.Model';
import CartSchema from './Cart.Model';
import CategoriesSchema from './Categories.Model';
import CouponsSchema from './Coupons.Model';
import DevicesSchema from './Devicces.Model';
import GroupProductSchema from './GroupProduct.Model';
import MerchantSchema from './Merchants.Model';
import OrderSchema from './Order.Model';
import ProductSchema from './Product.Model';
import ProductInfoSchema from './ProductInfo.Model';
import TransportSchema from './Transports.Model';

import { IUser } from '../Interfaces/User.Interface';
const Schema = mongoose.Schema;

const createSchema = (schema: Object) => {
	const model = new Schema(schema, { timestamps: true });
	return model;
};

const User = mongoose.model<IUser>('User', createSchema(UserSchema));
const Address = mongoose.model('Address', createSchema(AddressSchema));
const Cart = mongoose.model('Cart', createSchema(CartSchema));
const Categories = mongoose.model('Categories', createSchema(CategoriesSchema));
const Coupons = mongoose.model('Coupons', createSchema(CouponsSchema));
const Devices = mongoose.model('Devices', createSchema(DevicesSchema));
const GroupProduct = mongoose.model(
	'GroupProduct',
	createSchema(GroupProductSchema)
);
const Merchant = mongoose.model('Merchant', createSchema(MerchantSchema));
const Order = mongoose.model('Order', createSchema(OrderSchema));
const Product = mongoose.model('Product', createSchema(ProductSchema));
const Transport = mongoose.model('Transport', createSchema(TransportSchema));


// const a = async () => {
// 	const address = new Merchant();
// 	console.log(`LHA:  ===> file: index.ts ===> line 40 ===> address`, address);
// 	await address.save();
// 	const Categ = new Order();
// 	console.log(`LHA:  ===> file: index.ts ===> line 40 ===> address`, Categ);
// 	await Categ.save();
// 	const Categ1 = new Product();
// 	console.log(`LHA:  ===> file: index.ts ===> line 40 ===> address`, Categ1);
// 	await Categ1.save();
// 	const Devic = new Transport();
// 	console.log(`LHA:  ===> file: index.ts ===> line 40 ===> address`, Devic);
// 	await Devic.save();
// 	const GroupPrct = new GroupProduct();
// 	console.log(`LHA:  ===> file: index.ts ===> line 40 ===> address`, GroupPrct);
// 	await GroupPrct.save();

// 	const address1 = new Devices();
// 	console.log(`LHA:  ===> file: index.ts ===> line 40 ===> address`, address1);
// 	await address1.save();
// 	const Categ14 = new Coupons();
// 	console.log(`LHA:  ===> file: index.ts ===> line 40 ===> address`, Categ14);
// 	await Categ14.save();
// 	const Categ12 = new Categories();
// 	console.log(`LHA:  ===> file: index.ts ===> line 40 ===> address`, Categ12);
// 	await Categ12.save();
// 	const Devic1 = new Cart();
// 	console.log(`LHA:  ===> file: index.ts ===> line 40 ===> address`, Devic1);
// 	await Devic1.save();
// 	const GroupPrct1 = new Address();
// 	console.log(`LHA:  ===> file: index.ts ===> line 40 ===> address`, GroupPrct1);
// 	await GroupPrct1.save();

// 	const GroupPrct12 = new User();
// 	console.log(`LHA:  ===> file: index.ts ===> line 40 ===> address`, GroupPrct12);
// 	await GroupPrct12.save();
// };
// a();
export {
	User,
	Address,
	Cart,
	Categories,
	Coupons,
	Devices,
	GroupProduct,
	Merchant,
	Order,
	Product,
	Transport
};
