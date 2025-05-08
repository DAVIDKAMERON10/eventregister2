import mongoose from 'mongoose';

const SHSSchema = new mongoose.Schema({
  idNumber: String,
  firstName: String,
  middleInitial: String,
  lastName: String,
  qrCode: String
});

export default mongoose.model('SHS', SHSSchema);
