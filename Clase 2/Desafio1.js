class User {

    constructor(name,surname){
        this.name = name;
        this.surname = surname;
        this.books = [];
        this.pets = [];
    }

    getFullname(){
        console.log(`${this.name} ${this.surname}`)
    }
    addPet(pet){
        this.pets.push(pet)
    }
    countPets(){
        const amount = this.pets.length
        const text = amount > 1 ? `tiene ${amount} mascotas`: 'tiene una sola mascota' ;
        console.log(`${this.name} ${amount === 0 ? 'no tiene mascotas': text}`);
    }
    addBook(book, author){
        this.books.push({book, author})
    }
    getBooksNames(){
        console.log(this.books.map((e) => e.book))
    }
}
const user = new User('Luciano', 'Ibañez')
user.getFullname()

user.addPet('Gato');
user.addPet('Caniche');
user.countPets();

user.addBook('Nacidos de la Bruma', 'Brandon Sanderson');
user.addBook('Don Quijote de la Mancha', 'Miguel de Cervantes');
user.addBook('It', 'Sthephen King');
user.getBooksNames();