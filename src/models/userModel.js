// Bu örnek projede gerçek bir veri tabanı kullanmıyoruz
// Ama ileride mongoose gibi bir ORM kullanarak MongoDB'ye bağlanabilirsiniz
// Şimdilik basit bir kullanıcı veri modeli tanımlıyoruz

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

module.exports = User;
