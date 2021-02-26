const express = require('express');
const auth = require('../../middlewares/auth');
const { User } = require('../../models');

const router = express.Router();

router.post('/:type', auth(), async (req, res) => {
  try {
    const { type } = req.params;
    const user = await User.findById(req.user._id, `${type} friends`).populate('friends', `${type} name`);

    if (user[type].some((t) => t.id === req.body.movie.id)) {
      res.status(403).send({
        message: `You already added this movie to ${type}`,
      });
    } else {
      const matches = [];
      if (type === 'likes') {
        user.friends.forEach((friend) => {
          friend.likes.forEach((like) => {
            if (like.id === req.body.movie.id) {
              matches.push({
                friend: {
                  name: friend.name,
                  id: friend._id,
                },
                movie: like,
              });
            }
          });
        });
      }
      user[type].push(req.body.movie);
      await user.save();
      res.status(200).json({
        movie: req.body.movie,
        matches,
      });
    }
  } catch (error) {
    res.status(400).send({
      message: 'something went wrong',
    });
  }
});

// router.post('/dislikes', auth(), async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id);
//     if (user.dislikes.some((dislike) => dislike.id === req.body.movie.id)) {
//       res.status(403).send({
//         message: 'You already disliked this movie',
//       });
//     } else {
//       user.dislikes.push(req.body.movie);
//       await user.save();
//       res.status(200).json({
//         movie: req.body.movie,
//       });
//     }
//   } catch (error) {
//     res.status(400).send({
//       message: 'something went wrong',
//     });
//   }
// });

// router.post('/seen', auth(), async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id);
//     if (user.seen.some((seen) => seen.id === req.body.movie.id)) {
//       res.status(403).send({
//         message: 'You already marked this movie as seen',
//       });
//     } else {
//       user.seen.push(req.body.movie);
//       await user.save();
//       res.status(200).json({
//         movie: req.body.movie,
//       });
//     }
//   } catch (error) {
//     res.status(400).send({
//       message: 'something went wrong',
//     });
//   }
// });

// router.post('/favourites', auth(), async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id);
//     if (user.favourites.some((favourite) => favourite.id === req.body.movie.id)) {
//       res.status(403).send({
//         message: 'You already marked this movie as favourite',
//       });
//     } else {
//       user.favourites.push(req.body.movie);
//       await user.save();
//       res.status(200).json({
//         movie: req.body.movie,
//       });
//     }
//   } catch (error) {
//     res.status(400).send({
//       message: 'something went wrong',
//     });
//   }
// });

// router.post('/likes', auth(), async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id, 'likes friends').populate('friends', 'likes name');
//     if (user.likes.some((like) => like.id === req.body.movie.id)) {
//       res.status(403).send({
//         message: 'You already liked this movie',
//       });
//     } else {
//       user.likes.push(req.body.movie);
//       const matches = [];
//       user.friends.forEach((friend) => {
//         friend.likes.forEach((like) => {
//           if (like.id === req.body.movie.id) {
//             matches.push({
//               friend: {
//                 name: friend.name,
//                 id: friend._id,
//               },
//               movie: like,
//             });
//           }
//         });
//       });
//       console.log(matches);

//       await user.save();

//       res.status(200).json({
//         movie: req.body.movie,
//         matches,
//       });
//     }
//   } catch (error) {
//     res.status(400).send({
//       message: 'something went wrong',
//     });
//   }
// });

module.exports = router;
