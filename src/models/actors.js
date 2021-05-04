'use strict';

class Actor {

    constructor() {
        this.id = 0;
        this.actorDb = [

        ];
    };
    get(id) {
        if (id) {
            return this.actorDb.find(data => data.id === id)
        } else {
            return this.actorDb;
        }
    };
    create(obj) {
        let data = {
            id: ++this.id,
            data: obj
        }
        this.actorDb.push(data);
        return data;
    };
    update(id,obj) {
        for (let i = 0; i < this.actorDb.length; i++) {
            if (this.actorDb[i].id == id) {
                this.actorDb[i].data = obj;
                return this.actorDb[i];
            }
        }
    }
    delete(id) {
        let deleted = false;
        this.actorDb = this.actorDb.filter(data => {
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

module.exports = Actor;