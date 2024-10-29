const errorHandler = (err, req, res, next) => {
    if (err.code === 11000) {
        return res.status(400).render('signUp',{
            errors: { email: 'email deja existant' }
        })
    }
    if (err.message.includes('passwords do not match')) {
        return res.status(400).render('signUp',{
            errors: { password: 'les mot de passes ne corresponde pas' }
        })
    }
    if (err.name === 'ValidationError') {
        let errors = {};
        for (let field in err.errors) {
            errors[field] = err.errors[field].message;
        }
        return res.status(400).render('signUp',{ errors })
    }

    res.status(500).json({ errors: err.message })
}

module.exports = errorHandler;