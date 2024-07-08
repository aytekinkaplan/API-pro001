const users = []; // Basit bir kullanıcı listesi (örnek veri)

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};
