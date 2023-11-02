const express = require('express');
const router = express.Router();
const folderController = require('../controllers/folderController');
const fileController = require('../controllers/fileController'); // Import the file controller

// Create a Folder
router.post('/folders', folderController.createFolder);

// Rename a Folder
router.put('/folders/:id', folderController.renameFolder);

// Upload a File to a Folder
router.post('/folders/:id/files', folderController.uploadFile);

// Retrieve Folders
router.get('/folders', folderController.getFolders);

// Retrieve Files in a Folder
router.get('/folders/:id/files', fileController.getFilesInFolder); // Use the file controller to get files

// Delete a Folder
router.delete('/folders/:id', folderController.deleteFolder);

module.exports = router;
