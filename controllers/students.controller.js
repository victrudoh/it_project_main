const { Student } = require("../models");

var bcrypt = require("bcryptjs");

module.exports = {

    studentsListController: async (req, res) => {
        const students = await Student.findAll();
        res.render('students_list', {students: students});
      },

    createStudentController: (req, res) => {
        res.render("create_student");
    },

    publishStudentController: async (req, res) => {
        const {name, department, phone, bio, email, password} = req.body;
        if(!name || !department || !phone || !bio || !email || !password){ //if no name or no department or no phone or no..., redirect to same page(dont submit)
            return res.redirect('/auth/register');
        }

        hashedPassword = bcrypt.hashSync(req.body.password, 8)

       const studentExist = await Student.findOne({
            where: {
              email: req.body.email
            }
          })


        if(studentExist) {
          // return res.status(400).send("Email already exists")
          return res.render("register_view", {message: "Email already exists"});
        }

        const student = await Student.create({
            name,
            department,
            phone,
            bio,
            email,
            password: hashedPassword
        });
        console.log(req.body);
        res.redirect('/auth/login');
    },

    editStudentController: async (req, res) => {
        const id = req.params.id;
        const student = await Student.findAll({
          where: {
            id: id,
          },
        });
    
        // console.log(student[0]);
    
        res.render("edit_student", { student: student[0] });
      },

      updateStudentController: async (req, res) => {
        const { id, name, department, phone, bio, email, password } = req.body;
    
        const student = await Student.update(
          {id, name, department, phone, bio, email, password } ,
          {
            where: {
              id: id,
            },
          }
        );
    
        res.redirect("/students");
      },

      viewStudentController: async (req, res) => {
        const id = req.params.id;
        const student = await Student.findAll({
          where: {
            id: id,
          },
        });
    
        // console.log(student[0]);
    
        res.render("view_student", { student: student[0] });
      },

      // *** LOGIN VERIFICATION ***//
      verifyController: (req, res)=> {

        Student.findOne({
            where: {
              email: req.body.email
            }

        })


        .then(user => {
            if (!user) {
              return res.status(404).send({ message: "User Not found." });
            }
      
            var passwordIsValid = bcrypt.compareSync(
              req.body.password,
              user.password
            );
      
            if (!passwordIsValid) {
              // alert('Word');
              // res.json({message: 'beep', status: 404})
              return res.status(404).send({ message: "Incorrect Password" });
              async (req, res)=> {
                await sleep(1000)
                function sleep(ms) {
                  return new Promise((resolve) => {
                    setTimeout(resolve, ms);
                  });
                }
              }
              res.redirect('/auth/login');
              // return res.status(401).send({
              //   accessToken: null,
              //   message: "Invalid Password!"
              // });
            }

            res.redirect('/home');
        })
    },


      //**** DELETE *********//

      // THIS IS FOR THE DELETE PAGE
      delete_viewStudentController: async (req, res) => {
        const id = req.params.id;
        const student = await Student.findAll({
          where: {
            id: id,
          },
        });
    
        // console.log(student[0]);
    
        res.render("delete_student", { student: student[0] });
      },

      // THIS IS THE DELETE CONTROLLER
      deleteStudentController: async (req, res) => {
        const {id} = req.body;
    
        const student = await Student.destroy(
          {
            where: {
              id: id,
            },
          }
        );
    
        res.redirect("/students");
      },

}