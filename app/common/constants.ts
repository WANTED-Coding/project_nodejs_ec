export const ACCESS_TOKEN_SECRET=process.env.ACCESS_TOKEN_SECRET
export const defaultModel = {
  date: { type: Date },
  string: { type: String, default: '' },
  stringR: { type: String, required: true },
  stringRef: { type: String, required: true ,match:/^[a-fA-F0-9]{24}$/},
  stringPhone: { type: String, required: true ,match:/^0\d{9}$/},
  stringUnique: { type: String, required: true, unique: true },
  array: { type: Array, default: [] },
  number: { type: Number, default: 0 },
  boolean: { type: Boolean, default: true },
  booleanFalse: { type: Boolean, default: false },
  object: { type: Object, default: {} }
}