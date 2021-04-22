import { IProduct } from './../Interfaces/Product.Interface';
import { IMerchant } from './../Interfaces/Merchant.interface';
import { IDevice } from './../Interfaces/Device.Interface';
import { ICoupon } from './../Interfaces/Coupons.interface';
import { ICategories } from './../Interfaces/Categories.Interface';
import { ICart } from './../Interfaces/Cart.Interface';
import { IAddress } from './../Interfaces/Address.Interface';
import { IUser } from '../Interfaces/User.Interface';
import {IProductInfo} from '../Interfaces/ProductInfo.interface'
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
import { IGroupProduct } from '../Interfaces/GroupProduct.Interface';
import { IOrder } from '../Interfaces/Order.Interface';
import { ITransport } from '../Interfaces/Transport.interface';



const Schema = mongoose.Schema;

const createSchema = (schema: any) => {
	const model = new Schema(schema, { timestamps: true });
	return model;
};

const User = mongoose.model<IUser>('User', createSchema(UserSchema));
const Address = mongoose.model<IAddress>('Address', createSchema(AddressSchema));
const Cart = mongoose.model<ICart>('Cart', createSchema(CartSchema));
const Categories = mongoose.model<ICategories>('Categories', createSchema(CategoriesSchema));
const Coupons = mongoose.model<ICoupon>('Coupons', createSchema(CouponsSchema));
const Devices = mongoose.model<IDevice>('Devices', createSchema(DevicesSchema));
const GroupProduct = mongoose.model<IGroupProduct>(
	'GroupProduct',
	createSchema(GroupProductSchema)
);
const Merchant = mongoose.model<IMerchant>('Merchant', createSchema(MerchantSchema));
const Order = mongoose.model<IOrder>('Order', createSchema(OrderSchema));
const Product = mongoose.model<IProduct>('Product', createSchema(ProductSchema));
const Transport = mongoose.model<ITransport>('Transport', createSchema(TransportSchema));
const ProductInfo= mongoose.model<IProductInfo>('ProductInfo',createSchema(ProductInfoSchema))
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
	Transport,
	ProductInfo
};
