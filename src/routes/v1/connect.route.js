const express = require('express');
const auth = require('../../middlewares/auth');
const { User } = require('../../models');

const router = express.Router();

router.post('/request', auth(), async (req, res) => {
  try {
    const sender = await User.findById(req.user.id);
    const receiver = await User.findOne({ email: req.body.email });

    if (!receiver) {
      res.status(404).send({
        message: 'There was no user found with this email address. Are you sure you spelled it correctly?',
      });
    } else if (sender.id === receiver.id) {
      res.status(403).send({
        message: 'Want to become friends with yourself? Weird...',
      });
    } else if (sender.friends.includes(receiver.id)) {
      res.status(403).send({
        message: 'You are already friends!',
      });
    } else if (sender.sentRequests.includes(receiver.id)) {
      res.status(403).send({
        message: 'You already sent a request to this person!',
      });
    } else if (sender.receivedRequests.includes(receiver.id)) {
      res.status(403).send({
        message: 'This person already sent a friend request to you! Please accept this request in order to become friends.',
      });
    } else {
      sender.sentRequests.push(receiver.id);
      receiver.receivedRequests.push(sender.id);
      await sender.save();
      await receiver.save();
      res.send({ receiver });
    }
  } catch (error) {
    res.send(error);
  }
});

router.post('/accept/:id', auth(), async (req, res) => {
  try {
    const sender = await User.findById(req.user.id);
    const receiver = await User.findById(req.params.id);
    if (!receiver) res.status(404).send('Receiver not found');
    else if (sender.receivedRequests.includes(receiver.id) && receiver.sentRequests.includes(sender.id)) {
      sender.receivedRequests.splice(sender.receivedRequests.indexOf(receiver.id), 1);
      receiver.sentRequests.splice(receiver.sentRequests.indexOf(sender.id), 1);
      sender.friends.push(receiver.id);
      receiver.friends.push(sender.id);
      await sender.save();
      await receiver.save();
      res.json({ receiver });
    } else {
      res.send({
        message: `Something went wrong`,
      });
    }
  } catch (error) {
    res.send({
      message: `Something went wrong`,
    });
  }
});

router.post('/decline/:id', auth(), async (req, res) => {
  try {
    const sender = await User.findById(req.user.id);
    const receiver = await User.findById(req.params.id);
    if (sender.receivedRequests.includes(receiver.id) && receiver.sentRequests.includes(sender.id)) {
      sender.receivedRequests.splice(sender.receivedRequests.indexOf(receiver.id), 1);
      receiver.sentRequests.splice(receiver.sentRequests.indexOf(sender.id), 1);
      await sender.save();
      await receiver.save();
      res.json({ receiver });
    } else {
      res.send({
        message: `Something went wrong`,
      });
    }
  } catch (error) {
    res.send({
      message: `Something went wrong`,
    });
  }
});

router.get('/friends', auth(), async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate('friends', 'name')
      .populate('sentRequests', 'name')
      .populate('receivedRequests', 'name')
      .select('name');
    res.json({
      friends: user.friends,
      sentRequests: user.sentRequests,
      receivedRequests: user.receivedRequests,
    });
  } catch (error) {
    res.send(error);
  }
});

router.get('/requests', auth(), async (req, res) => {
  try {
    const requests = await User.findById(req.user.id).populate('receivedRequests', 'name').select('receivedRequests');
    res.send(requests);
  } catch (error) {
    res.status(400).json({
      message: 'Something went wrong',
    });
  }
});

router.get('/matches/:id', auth(), async (req, res) => {
  try {
    const friend = await User.findById(req.params.id);
    const user = await User.findById(req.user.id);
    const mutualLikes = [];
    user.likes.forEach((movieLikedByUser) => {
      friend.likes.forEach((movieLikedByFriend) => {
        if (movieLikedByUser.id === movieLikedByFriend.id) {
          mutualLikes.push(movieLikedByUser);
        }
      });
    });
    res.send({
      mutualLikes,
      friend: {
        id: friend.id,
        name: friend.name,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
