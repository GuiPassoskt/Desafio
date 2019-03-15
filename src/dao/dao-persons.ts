export class DAOPersons {

    list:Array<{id:number,name:string,email:string}>;

    constructor(){
        this.list = [];
    }

    getList(){
        this.list = [
            {id:1, name:'Guilherme Passos Moreira da Silva', email:'guipassoskt@gmail.com'},
            {id:2, name:'Carlos Alberto de Nobrega', email:'carlosnobrega@gmail.com'},
            {id:3, name:'Guilherme Passos Moreira da Silva', email:'guipassoskt@gmail.com'},
            {id:4, name:'Carlos Alberto de Nobrega', email:'carlosnobrega@gmail.com'},
        ];
        return this.list;
    }

    insert(person:any){
        this.list.push(person);
    }

    edit(person:any){
    
    }

    delete(person:any){
        let pos = this.list.indexOf(person);
        this.list.splice(pos, 1);
    }

}