'use strict';

import mongoose from 'mongoose';

var ShopifyhookSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Shopifyhook', ShopifyhookSchema);
