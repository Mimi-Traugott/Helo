const bcrypt = require('bcryptjs');

module.exports={
    login: async(req,res) => {
       
        const {username, password}=req.body
        const {session} = req
        const db = req.app.get('db')

        let users = await db.check_user(username)
        const user = users[0]
        if(!user) {
            return res.status(400).send('Email not found')
        }
        const authenticated = bcrypt.compareSync(password, user.password);
        if(authenticated){
            delete user.password
            session.user=user;
            res.status(202).send(session.user)
        }else {
            res.status(401).send('Incorrect Password')
        }
    },
    register: async(req, res) => {
        const {username, password}=req.body;
        const {session}= req
        const db = req.app.get('db');

        let users = await db.check_user(username);
        users=users[0]
        if (users){
            return res.status(400).send('user already exists')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password,salt)
        let newUser = await db.register_user({username, hash})
        newUser = newUser[0]
        session.users = newUser;
        res.status(200).send(session.users)
    },
    getUser: (req,res) => {
        if(req.session.users){
        res.status(200).send(req.session.users)
    }else{
        res.status(200).send('')
    }
    },
}




