import College from '../models/College.js';
import SHS from '../models/Shs.js';
import Teacher from '../models/Teacher.js';
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
    const { idNumber, firstName, middleInitial, lastName, year, strand } = req.body;
    const fullName = `${firstName} ${middleInitial}. ${lastName}`;

    const qrData = `SHS|${idNumber}|${fullName}|${strand}|Year ${year} `;
    const qrCode = await QRCode.toDataURL(qrData);

    const newParticipant = new SHS({ idNumber, firstName, middleInitial, lastName, strand, year, qrCode });
    const saved = await newParticipant.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const registerTeacher = async (req, res) => {
  try {
    const { idNumber, firstName, middleInitial, lastName, department } = req.body;
    const fullName = `${firstName} ${middleInitial}. ${lastName}`;

    const qrData = `Teacher|${idNumber}|${fullName}|${department}`;
    const qrCode = await QRCode.toDataURL(qrData);

    const newTeacher = new Teacher({ idNumber, firstName, middleInitial, lastName, department, qrCode });
    const saved = await newTeacher.save();

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

export const getTeachers = async (req, res) => {
  const list = await Teacher.find();
  res.json(list);
};

export const getParticipantById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid participant ID format' });
  }

  try {
    let participant = await College.findById(id);
    if (!participant) participant = await SHS.findById(id);
    if (!participant) participant = await Teacher.findById(id);

    if (!participant) return res.status(404).json({ error: 'Participant not found' });

    res.json(participant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // For Admin to view all participants
// export const getAllParticipants = async (req, res) => {
//   try {
//     const colleges = await College.find();
//     const shs = await SHS.find();
//     const teachers = await Teacher.find();

//     res.json({ colleges, shs, teachers });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch participants.' });
//   }
// };

// // For deleting a participant
// export const deleteParticipant = async (req, res) => {
//   const { category, id } = req.params;
//   let model;
//   if (category === 'college') model = College;
//   else if (category === 'shs') model = SHS;
//   else if (category === 'teacher') model = Teacher;
//   else return res.status(400).json({ error: 'Invalid category' });

//   try {
//     await model.findByIdAndDelete(id);
//     res.json({ message: 'Participant deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete participant.' });
//   }
// };







