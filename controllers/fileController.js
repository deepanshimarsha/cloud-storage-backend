const Folder = require('../models/folderModel');

// Retrieve Files in a Folder
exports.getFilesInFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const folder = await Folder.findById(id);
    if (!folder) {
      return res.status(404).json({ error: 'Folder not found' });
    }
    res.json(folder.files);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve files' });
  }
};
