exports.getLoginForm =async (req, res) => {
    res.status(200).render('user_service', {
      title: 'Log into your account'
    });
  };