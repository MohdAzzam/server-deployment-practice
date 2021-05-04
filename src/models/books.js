'use strict';

class Book {
    constructor() {
        this.id = 0;
        this.bookDb = [

        ];
    };
    get(id) {
        if (id) {
            return this.bookDb.find(data => data.id === id)
        } else {
            return this.bookDb;
        }
    };
    create(obj) {
        let data = {
            id: ++this.id,
            data: obj
        }
        this.bookDb.push(data);
        return data;
    };
    update(id,obj) {
        for (let i = 0; i < this.bookDb.length; i++) {
            if (this.bookDb[i].id == id) {
                this.bookDb[i].data = obj;
                return this.bookDb[i];
            }
        }
    }
    delete(id) {
        let deleted = false;
        this.bookDb = this.bookDb.filter(data => {
            if (data.id != id) {
                return true;
            } else {
                deleted = true;
                return false;
            }
        });
        return deleted;
    }
}

module.exports = Book;