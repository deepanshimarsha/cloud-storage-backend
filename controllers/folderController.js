const Folder = require("../models/folderModel");

// Create a Folder
exports.createFolder = async (req, res) => {
  try {
    const newFolder = new Folder({ name: "New Folder" });
    const folder = await newFolder.save();

    res.status(201).json(folder);
  } catch (error) {
    res.status(500).json({ error: "Failed to create folder" });
  }
};

// Rename a Folder
exports.renameFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const folder = await Folder.findByIdAndUpdate(id, { name }, { new: true });
    if (!folder) {
      return res.status(404).json({ error: "Folder not found" });
    }
    res.json(folder);
  } catch (error) {
    res.status(500).json({ error: "Failed to rename folder" });
  }
};

// Upload a File to a Folder
exports.uploadFile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, owner, type } = req.body;
    const folder = await Folder.findById(id);
    if (!folder) {
      return res.status(404).json({ error: "Folder not found" });
    }
    const newFile = { name, owner, type };
    folder.files.push(newFile);
    const updatedFolder = await folder.save();
    res.status(201).json(updatedFolder);
  } catch (error) {
    res.status(500).json({ error: "Failed to upload file" });
  }
};

// Delete a Folder
exports.deleteFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const folder = await Folder.findByIdAndDelete(id);
    if (!folder) {
      return res.status(404).json({ error: "Folder not found" });
    }
    res.json(folder);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete folder" });
  }
};

// Retrieve Folders
exports.getFolders = async (req, res) => {
  try {
    const folders = await Folder.find();
    res.json(folders);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve folders" });
  }
};
