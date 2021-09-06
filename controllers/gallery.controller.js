const { Post } = require('../models');

module.exports = {
    galleryController: async (req, res)=> {
        const posts = await Post.findAll();
        res.render('gallery', {posts: posts});
    },

    newPostController: (req, res)=> {
        res.render('newPost');
    },

    viewPostController: async (req, res) => {
        const id = req.params.id;
        const post = await Post.findAll({
          where: {
            id: id,
          },
        });
    
        console.log(post[0]);
    
        res.render("viewPost", { post: post[0] });
    },

    pulishPostController: async (req, res) => {
        const {media, caption, description, author} = req.body;
        if(!media && !caption && !description ){    //if no media and no caption and no desrciption,  redirect to same page(dont submit)
            return res.redirect('/gallery/newPost');
        }
        const post = await Post.create({
            media,
            caption,
            description,
            author
        });
        console.log(req.body);
        res.redirect('/gallery');
    },

    deletePostController: async (req, res) => {
        const {id} = req.body;
    
        const student = await Post.destroy(
          {
            where: {
              id: id,
            },
          }
        );
    
        res.redirect("/gallery");
      },
}