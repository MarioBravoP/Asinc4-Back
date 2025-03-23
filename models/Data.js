const mongoose = require('mongoose');

const ExtraSchema = new mongoose.Schema({
  src: String,
  alt: String,
  icon: String
}, { _id: false });

const BannerSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  alt: String,
  extra: [ExtraSchema]
}, { _id: false });

const FeatureSchema = new mongoose.Schema({
  title: String,
  icon: String,
  background: String,
  color: String
}, { _id: false });

const TestimonialItemSchema = new mongoose.Schema({
  text: String,
  img: String
}, { _id: false });

const TestimonialSchema = new mongoose.Schema({
  title: String,
  items: [TestimonialItemSchema]
}, { _id: false });

const FooterLinkSchema = new mongoose.Schema({
  text: String
}, { _id: false });

const FooterSocialSchema = new mongoose.Schema({
  icon: String
}, { _id: false });

const FooterSchema = new mongoose.Schema({
  links: [FooterLinkSchema],
  social: [FooterSocialSchema]
}, { _id: false });

const DataSchema = new mongoose.Schema({
  banners: [BannerSchema],
  features: [FeatureSchema],
  testimonials: [TestimonialSchema],
  footer: FooterSchema
}, { collection: 'data' });

module.exports = mongoose.model('Data', DataSchema);
