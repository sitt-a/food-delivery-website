const express = require('express');
const app = express();
const port = 6001;
const cors = require('cors');
const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb+srv://sitramohammed75:QayYKyezACG3RXcj@cluster0.1nu1tl4.mongodb.net/cluster';

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const client = new MongoClient(uri, {
  useNewUrlParser: true, // Use new URL parser
  useUnifiedTopology: true, // Use new server discovery and monitoring engine
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

// CRUD operations

// Create - POST /menus
app.post('/menus', async (req, res) => {
  try {
    const menusCollection = client.db("cluster").collection('menusCollection');
    const menu = req.body;

    // Insert the menu document into the collection
    const result = await menusCollection.insertOne(menu);

    res.status(201).json(result.ops[0]);
  } catch (error) {
    console.error('Failed to insert menu', error);
    res.status(500).json({ error: 'Failed to insert menu' });
  }
});

// Read - GET /menus
app.get('/menus', async (req, res) => {
  try {
    const menusCollection = client.db("cluster").collection('menusCollection');

    // Retrieve all documents from the collection
    const menus = await menusCollection.find().toArray();

    res.json(menus);
  } catch (error) {
    console.error('Failed to retrieve menus', error);
    res.status(500).json({ error: 'Failed to retrieve menus' });
  }
});

// Update - PUT /menus/:id
app.put('/menus/:id', async (req, res) => {
  try {
    const menusCollection = client.db("cluster").collection('menusCollection');
    const menuId = req.params.id;
    const updatedMenu = req.body;

    // Update the menu document
    const result = await menusCollection.updateOne(
      { _id: menuId },
      { $set: updatedMenu }
    );

    if (result.modifiedCount === 0) {
      res.status(404).json({ error: 'Menu not found' });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error('Failed to update menu', error);
    res.status(500).json({ error: 'Failed to update menu' });
  }
});

// Delete - DELETE /menus/:id
app.delete('/menus/:id', async (req, res) => {
  try {
    const menusCollection = client.db("cluster").collection('menusCollection');
    const menuId = req.params.id;

    // Delete the menu document
    const result = await menusCollection.deleteOne({ _id: menuId });

    if (result.deletedCount === 0) {
      res.status(404).json({ error: 'Menu not found' });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error('Failed to delete menu', error);
    res.status(500).json({ error: 'Failed to delete menu' });
  }
});

// Connect to MongoDB and start the Express server
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});