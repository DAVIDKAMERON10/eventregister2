import College from '../models/College.js';
import SHS from '../models/Shs.js';
import QRCode from 'qrcode';

export const registerCollege = async (req, res) => {
  try {
    const { idNumber, firstName, middleInitial, lastName, program, yearLevel } = req.body;
    const fullName = `${firstName} ${middleInitial}. ${lastName}`;

    const qrData = `College|${idNumber}|${fullName}|${program}|Year ${yearLevel}`;
    const qrCode = await QRCode.toDataURL(qrData);

    const newParticipant = new College({ idNumber, firstName, middleInitial, lastName, program, yearLevel, qrCode });
    const saved = await newParticipant.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const registerSHS = async (req, res) => {
  try {
    const { idNumber, firstName, middleInitial, lastName } = req.body;
    const fullName = `${firstName} ${middleInitial}. ${lastName}`;

    const qrData = `SHS|${idNumber}|${fullName}`;
    const qrCode = await QRCode.toDataURL(qrData);

    const newParticipant = new SHS({ idNumber, firstName, middleInitial, lastName, qrCode });
    const saved = await newParticipant.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getColleges = async (req, res) => {
  const list = await College.find();
  res.json(list);
};

export const getSHS = async (req, res) => {
  const list = await SHS.find();
  res.json(list);
};

export const getParticipantById = async (req, res) => {
  const { id } = req.params;
  let participant = await College.findById(id);
  if (!participant) participant = await SHS.findById(id);

  if (!participant) return res.status(404).json({ error: 'Not found' });
  res.json(participant);
};

